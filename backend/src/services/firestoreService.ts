import admin from '../config/firebase';
import type { Firestore } from 'firebase-admin/firestore';

let firestoreInstance: Firestore | null = null;

export const getFirestore = (): Firestore => {
    if (!firestoreInstance) {
        firestoreInstance = admin.firestore();
        firestoreInstance.settings({ ignoreUndefinedProperties: true });
    }

    return firestoreInstance;
};

export const firestoreFieldValue = admin.firestore.FieldValue;
export const firestoreTimestamp = admin.firestore.Timestamp;

export const runFirestoreTransaction = async <T>(
    updateFn: (transaction: FirebaseFirestore.Transaction) => Promise<T>
): Promise<T> => getFirestore().runTransaction(updateFn);

export const normalizeFirestoreError = (error: any): { status: number; message: string; code?: string } => {
    const code = error?.code as string | undefined;

    switch (code) {
        case 'permission-denied':
            return { status: 403, message: 'Permission denied', code };
        case 'not-found':
            return { status: 404, message: 'Document not found', code };
        case 'already-exists':
            return { status: 409, message: 'Document already exists', code };
        case 'invalid-argument':
            return { status: 400, message: 'Invalid Firestore request', code };
        case 'deadline-exceeded':
            return { status: 504, message: 'Firestore request timed out', code };
        case 'resource-exhausted':
            return { status: 429, message: 'Firestore quota exceeded', code };
        case 'unauthenticated':
            return { status: 401, message: 'Firestore authentication required', code };
        default:
            return { status: 500, message: error?.message || 'Firestore error', code };
    }
};
