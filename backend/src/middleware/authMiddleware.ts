import { NextFunction, Request, Response } from 'express';
import { firebaseAuth } from '../config/firebase';

interface FirebaseRefreshResponse {
    id_token: string;
    refresh_token?: string;
    expires_in?: string;
    token_type?: string;
}

const getBearerToken = (req: Request): string | undefined => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return undefined;
    }

    const [scheme, token] = authHeader.split(' ');
    if (scheme?.toLowerCase() === 'bearer' && token) {
        return token.trim();
    }

    return authHeader.trim();
};

const refreshIdToken = async (refreshToken: string): Promise<FirebaseRefreshResponse> => {
    const apiKey = process.env.FIREBASE_API_KEY || process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

    if (!apiKey) {
        throw new Error('Missing FIREBASE_API_KEY for token refresh');
    }

    const params = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
    });

    const response = await fetch(`https://securetoken.googleapis.com/v1/token?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
    });

    const data = await response.json();

    if (!response.ok) {
        const message = data?.error?.message || 'Failed to refresh token';
        throw new Error(message);
    }

    return data as FirebaseRefreshResponse;
};

export const authenticate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const token = getBearerToken(req);

    if (!token) {
        res.status(401).json({ error: 'Missing authorization token' });
        return;
    }

    try {
        const decoded = await firebaseAuth().verifyIdToken(token, true);
        req.user = decoded;
        next();
    } catch (error: any) {
        if (error?.code === 'auth/id-token-expired') {
            const refreshToken = req.headers['x-refresh-token'];

            if (typeof refreshToken === 'string' && refreshToken.length > 0) {
                try {
                    const refreshed = await refreshIdToken(refreshToken);
                    const decoded = await firebaseAuth().verifyIdToken(refreshed.id_token, true);
                    req.user = decoded;

                    res.setHeader('x-id-token', refreshed.id_token);
                    if (refreshed.refresh_token) {
                        res.setHeader('x-refresh-token', refreshed.refresh_token);
                    }

                    next();
                    return;
                } catch (refreshError: any) {
                    res.status(401).json({ error: 'Token expired', detail: refreshError?.message });
                    return;
                }
            }
        }

        res.status(401).json({ error: 'Invalid or expired token' });
    }
};
