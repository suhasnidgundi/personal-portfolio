import { db } from '@/libs/firebase/config';
import {
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    onSnapshot
} from 'firebase/firestore';

// Add a document
export const addDocument = async (collectionName, data) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), {
            ...data,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        return docRef.id;
    } catch (error) {
        console.error('Error adding document:', error);
        throw error;
    }
};

// Get all documents from a collection
export const getDocuments = async (collectionName) => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const documents = [];
        querySnapshot.forEach((doc) => {
            documents.push({ id: doc.id, ...doc.data() });
        });
        return documents;
    } catch (error) {
        console.error('Error getting documents:', error);
        throw error;
    }
};

// Get a single document
export const getDocument = async (collectionName, docId) => {
    try {
        const docRef = doc(db, collectionName, docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error getting document:', error);
        throw error;
    }
};

// Update a document
export const updateDocument = async (collectionName, docId, data) => {
    try {
        const docRef = doc(db, collectionName, docId);
        await updateDoc(docRef, {
            ...data,
            updatedAt: new Date()
        });
    } catch (error) {
        console.error('Error updating document:', error);
        throw error;
    }
};

// Delete a document
export const deleteDocument = async (collectionName, docId) => {
    try {
        await deleteDoc(doc(db, collectionName, docId));
    } catch (error) {
        console.error('Error deleting document:', error);
        throw error;
    }
};

// Query documents with conditions
export const queryDocuments = async (collectionName, conditions = []) => {
    try {
        let q = collection(db, collectionName);

        // Apply conditions
        conditions.forEach(condition => {
            if (condition.type === 'where') {
                q = query(q, where(condition.field, condition.operator, condition.value));
            } else if (condition.type === 'orderBy') {
                q = query(q, orderBy(condition.field, condition.direction || 'asc'));
            }
        });

        const querySnapshot = await getDocs(q);
        const documents = [];
        querySnapshot.forEach((doc) => {
            documents.push({ id: doc.id, ...doc.data() });
        });
        return documents;
    } catch (error) {
        console.error('Error querying documents:', error);
        throw error;
    }
};

// Real-time listener
export const subscribeToCollection = (collectionName, callback, conditions = []) => {
    let q = collection(db, collectionName);

    // Apply conditions
    conditions.forEach(condition => {
        if (condition.type === 'where') {
            q = query(q, where(condition.field, condition.operator, condition.value));
        } else if (condition.type === 'orderBy') {
            q = query(q, orderBy(condition.field, condition.direction || 'asc'));
        }
    });

    return onSnapshot(q, (querySnapshot) => {
        const documents = [];
        querySnapshot.forEach((doc) => {
            documents.push({ id: doc.id, ...doc.data() });
        });
        callback(documents);
    });
  };