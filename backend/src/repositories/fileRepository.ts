import { FirestoreRepository } from './firestoreRepository';
import { FirestoreCollections, FirestoreFile } from '../schemas/firestoreSchemas';

export class FileRepository extends FirestoreRepository<FirestoreFile> {
    constructor() {
        super(FirestoreCollections.files);
    }

    async listByOwner(ownerUid: string, limit = 50): Promise<Array<FirestoreFile & { id: string }>> {
        return this.queryByField('ownerUid', '==', ownerUid, limit);
    }
}
