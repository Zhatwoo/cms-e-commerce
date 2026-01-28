import type { Firestore, WhereFilterOp } from 'firebase-admin/firestore';
import { getFirestore } from '../services/firestoreService';

export class FirestoreRepository<T extends Record<string, any>> {
    private readonly collectionName: string;

    constructor(collectionName: string) {
        this.collectionName = collectionName;
    }

    protected collection(db: Firestore = getFirestore()) {
        return db.collection(this.collectionName);
    }

    async getById(id: string): Promise<(T & { id: string }) | null> {
        const doc = await this.collection().doc(id).get();
        if (!doc.exists) {
            return null;
        }
        return { id: doc.id, ...(doc.data() as T) };
    }

    async create(id: string, data: T): Promise<T & { id: string }> {
        await this.collection().doc(id).set(data);
        return { id, ...data };
    }

    async add(data: T): Promise<T & { id: string }> {
        const docRef = await this.collection().add(data as T);
        return { id: docRef.id, ...data };
    }

    async update(id: string, data: Partial<T>): Promise<void> {
        await this.collection().doc(id).set(data, { merge: true });
    }

    async delete(id: string): Promise<void> {
        await this.collection().doc(id).delete();
    }

    async list(limit = 50): Promise<Array<T & { id: string }>> {
        const snapshot = await this.collection().limit(limit).get();
        return snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as T) }));
    }

    async queryByField(
        field: string,
        op: WhereFilterOp,
        value: unknown,
        limit = 50
    ): Promise<Array<T & { id: string }>> {
        const snapshot = await this.collection().where(field, op, value).limit(limit).get();
        return snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as T) }));
    }
}
