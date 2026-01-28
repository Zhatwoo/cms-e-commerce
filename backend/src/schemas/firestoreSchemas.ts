export const FirestoreCollections = {
    users: 'users',
    products: 'products',
    orders: 'orders',
    categories: 'categories',
    inventory: 'inventory',
} as const;

export type FirestoreCollectionName =
    (typeof FirestoreCollections)[keyof typeof FirestoreCollections];

export interface FirestoreUser {
    name: string;
    email: string;
    role: 'user' | 'admin';
    firebaseUid?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface FirestoreProduct {
    name: string;
    slug: string;
    description?: string;
    price: number;
    currency: string;
    status: 'draft' | 'active' | 'archived';
    categoryIds?: string[];
    inventoryId?: string;
    imageUrls?: string[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface FirestoreOrderItem {
    productId: string;
    quantity: number;
    price: number;
}

export interface FirestoreOrder {
    userId: string;
    status: 'pending' | 'paid' | 'fulfilled' | 'cancelled';
    currency: string;
    totalAmount: number;
    items: FirestoreOrderItem[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface FirestoreCategory {
    name: string;
    slug: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface FirestoreInventory {
    sku: string;
    quantity: number;
    reserved?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
