import admin from 'firebase-admin';

const getServiceAccount = (): admin.ServiceAccount => {
    const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;

    if (serviceAccountJson) {
        try {
            const parsed = JSON.parse(serviceAccountJson);
            const projectId = parsed.project_id || parsed.projectId || process.env.FIREBASE_PROJECT_ID;
            const clientEmail = parsed.client_email || parsed.clientEmail || process.env.FIREBASE_CLIENT_EMAIL;
            const privateKeyRaw = parsed.private_key || parsed.privateKey || process.env.FIREBASE_PRIVATE_KEY;
            const privateKey = privateKeyRaw ? String(privateKeyRaw).replace(/\\n/g, '\n') : undefined;

            const missing = [
                !projectId ? 'project_id' : null,
                !clientEmail ? 'client_email' : null,
                !privateKey ? 'private_key' : null,
            ].filter(Boolean);

            if (missing.length > 0) {
                throw new Error(`Missing Firebase service account fields: ${missing.join(', ')}`);
            }

            return {
                projectId,
                clientEmail,
                privateKey,
            };
        } catch (error: any) {
            const message = error?.message || 'Unable to parse FIREBASE_SERVICE_ACCOUNT_JSON';
            throw new Error(message);
        }
    }

    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY
        ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
        : undefined;

    const missing = [
        !projectId ? 'FIREBASE_PROJECT_ID' : null,
        !clientEmail ? 'FIREBASE_CLIENT_EMAIL' : null,
        !privateKey ? 'FIREBASE_PRIVATE_KEY' : null,
    ].filter(Boolean);

    if (missing.length > 0) {
        throw new Error(`Missing Firebase Admin environment variables: ${missing.join(', ')}`);
    }

    return {
        projectId,
        clientEmail,
        privateKey,
    };
};

const initializeFirebaseAdmin = (): admin.app.App => {
    if (admin.apps.length > 0) {
        return admin.app();
    }

    const serviceAccount = getServiceAccount();
    const storageBucket = process.env.FIREBASE_STORAGE_BUCKET;

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        storageBucket,
    });

    return admin.app();
};

export const firebaseAdminApp = initializeFirebaseAdmin();
export const firebaseAuth = () => admin.auth();
export default admin;
