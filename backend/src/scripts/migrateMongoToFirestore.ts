import mongoose from 'mongoose';
import User from '../models/User';
import { getFirestore } from '../services/firestoreService';
import { FirestoreCollections, FirestoreUser } from '../schemas/firestoreSchemas';

const getArgValue = (flag: string): string | undefined => {
    const index = process.argv.indexOf(flag);
    if (index >= 0 && process.argv.length > index + 1) {
        return process.argv[index + 1];
    }
    return undefined;
};

const parseNumber = (value: string | undefined, fallback: number): number => {
    if (!value) return fallback;
    const parsed = Number(value);
    return Number.isNaN(parsed) ? fallback : parsed;
};

const migrateUsers = async (): Promise<void> => {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
        throw new Error('Missing MONGODB_URI for migration');
    }

    const dryRun = process.argv.includes('--dry-run');
    const limit = parseNumber(getArgValue('--limit'), 0);
    const batchSize = parseNumber(getArgValue('--batch-size'), 200);

    await mongoose.connect(mongoUri);

    const firestore = getFirestore();
    let batch = firestore.batch();
    let batchCount = 0;
    let processed = 0;

    const query = limit > 0 ? User.find({}).limit(limit) : User.find({});
    const cursor = query.cursor();

    for await (const user of cursor) {
        const payload: FirestoreUser = {
            name: user.name,
            email: user.email,
            role: user.role || 'user',
            firebaseUid: user.firebaseUid,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        };

        const docId = user._id.toString();
        if (!dryRun) {
            const docRef = firestore.collection(FirestoreCollections.users).doc(docId);
            batch.set(docRef, payload, { merge: true });
            batchCount += 1;

            if (batchCount >= batchSize) {
                await batch.commit();
                batch = firestore.batch();
                batchCount = 0;
            }
        }

        processed += 1;
    }

    if (!dryRun && batchCount > 0) {
        await batch.commit();
    }

    await mongoose.disconnect();

    console.log(`✅ Migrated ${processed} user(s) to Firestore${dryRun ? ' (dry run)' : ''}.`);
};

const run = async () => {
    try {
        await migrateUsers();
        process.exit(0);
    } catch (error: any) {
        console.error('❌ Migration failed:', error?.message || error);
        process.exit(1);
    }
};

void run();
