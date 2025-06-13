import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  orderBy, 
  query 
} from 'firebase/firestore';
import { db } from './firebase/config';

// Timeline data structure
export const timelineCollections = {
  education: 'timeline_education',
  experience: 'timeline_experience'
};

// Fetch timeline data
export const getTimelineData = async (type) => {
  try {
    const q = query(
      collection(db, timelineCollections[type]), 
      orderBy('startDate', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error(`Error fetching ${type} data:`, error);
    return [];
  }
};

// Add timeline item
export const addTimelineItem = async (type, data) => {
  try {
    const docRef = await addDoc(collection(db, timelineCollections[type]), {
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    return docRef.id;
  } catch (error) {
    console.error(`Error adding ${type} item:`, error);
    throw error;
  }
};

// Update timeline item
export const updateTimelineItem = async (type, id, data) => {
  try {
    await updateDoc(doc(db, timelineCollections[type], id), {
      ...data,
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error(`Error updating ${type} item:`, error);
    throw error;
  }
};

// Delete timeline item
export const deleteTimelineItem = async (type, id) => {
  try {
    await deleteDoc(doc(db, timelineCollections[type], id));
  } catch (error) {
    console.error(`Error deleting ${type} item:`, error);
    throw error;
  }
};