import { FirestoreRepository } from './firestoreRepository';
import { FirestoreCollections, FirestoreUser } from '../schemas/firestoreSchemas';

export class UserRepository extends FirestoreRepository<FirestoreUser> {
    constructor() {
        super(FirestoreCollections.users);
    }

    async getByEmail(email: string): Promise<(FirestoreUser & { id: string }) | null> {
        const results = await this.queryByField('email', '==', email, 1);
        return results.length > 0 ? results[0] : null;
    }

    async getByFirebaseUid(firebaseUid: string): Promise<(FirestoreUser & { id: string }) | null> {
        const results = await this.queryByField('firebaseUid', '==', firebaseUid, 1);
        return results.length > 0 ? results[0] : null;
    }
}
