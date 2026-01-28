import { Request, Response } from 'express';
import User from '../models/User';
import { firebaseAuth } from '../config/firebase';
import { cacheDel } from '../services/cacheService';
import { publishWelcomeEmail } from '../queues/publishers';

const USERS_CACHE_KEY = 'users:all';

interface FirebaseSignInResponse {
    idToken: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    displayName?: string;
    email?: string;
}

const getFirebaseApiKey = (): string | undefined =>
    process.env.FIREBASE_API_KEY || process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

const signInWithFirebase = async (email: string, password: string): Promise<FirebaseSignInResponse> => {
    const apiKey = getFirebaseApiKey();
    if (!apiKey) {
        throw new Error('Missing FIREBASE_API_KEY for Firebase Auth sign-in');
    }

    const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            }),
        }
    );

    const data = await response.json();

    if (!response.ok) {
        const message = data?.error?.message || 'Invalid email or password';
        const error = new Error(message);
        (error as any).status = 401;
        throw error;
    }

    return data as FirebaseSignInResponse;
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const registerUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ error: 'Please provide all required fields' });
            return;
        }

        if (password.length < 6) {
            res.status(400).json({ error: 'Password must be at least 6 characters' });
            return;
        }

        const auth = firebaseAuth();
        const userExists = await User.findOne({ email });

        if (userExists) {
            res.status(400).json({ error: 'User with this email already exists' });
            return;
        }

        const existingFirebaseUser = await auth.getUserByEmail(email).catch(() => null);

        if (existingFirebaseUser) {
            res.status(400).json({ error: 'User with this email already exists' });
            return;
        }

        const userRecord = await auth.createUser({
            email,
            password,
            displayName: name,
        });

        const role = 'user';
        await auth.setCustomUserClaims(userRecord.uid, { role });

        try {
            const user = await User.create({
                name,
                email,
                role,
                firebaseUid: userRecord.uid,
            });

            await cacheDel(USERS_CACHE_KEY);

            let welcomeJobId: string | undefined;
            try {
                const job = await publishWelcomeEmail({
                    userId: user._id.toString(),
                    email: user.email,
                    name: user.name,
                });
                welcomeJobId = job.id?.toString();
            } catch (jobError) {
                console.error('Failed to enqueue welcome email:', jobError);
            }

            res.status(201).json({
                message: 'User created successfully',
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    firebaseUid: user.firebaseUid,
                    createdAt: user.createdAt,
                },
                welcomeJobId,
            });
        } catch (dbError) {
            await auth.deleteUser(userRecord.uid);
            throw dbError;
        }
    } catch (error: any) {
        console.error('Registration error:', error);
        res.status(500).json({ error: error.message || 'Internal server error' });
    }
};

// @desc    Login user & get details
// @route   POST /api/auth/login
// @access  Public
export const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ error: 'Email and password are required' });
            return;
        }

        const auth = firebaseAuth();
        const signInData = await signInWithFirebase(email, password);

        const decodedToken = await auth.verifyIdToken(signInData.idToken);
        const role = (decodedToken as any).role || 'user';

        let user = await User.findOne({ firebaseUid: signInData.localId });

        if (!user) {
            user = await User.findOne({ email });
        }

        if (!user) {
            const firebaseUser = await auth.getUser(signInData.localId);
            const displayName = firebaseUser.displayName || email.split('@')[0];

            user = await User.create({
                name: displayName,
                email,
                role,
                firebaseUid: signInData.localId,
            });
        } else if (!user.firebaseUid) {
            user.firebaseUid = signInData.localId;
            await user.save();
        }

        res.status(200).json({
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role || role,
            firebaseUid: user.firebaseUid,
            idToken: signInData.idToken,
            refreshToken: signInData.refreshToken,
            expiresIn: signInData.expiresIn,
        });
    } catch (error: any) {
        console.error('Login error:', error);
        const status = error?.status || 500;
        res.status(status).json({ error: error.message || 'Internal server error' });
    }
};
