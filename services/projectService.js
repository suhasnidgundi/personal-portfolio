import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  query, 
  orderBy,
  where
} from 'firebase/firestore';
import { 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject 
} from 'firebase/storage';
import { db, storage } from '@/libs/firebase/config';

const PROJECTS_COLLECTION = 'projects';

export class ProjectService {
  // Upload image to Firebase Storage
  static async uploadImage(file, projectId) {
    if (!file) return null;
    
    try {
      const timestamp = Date.now();
      const fileName = `projects/${projectId || 'temp'}_${timestamp}_${file.name}`;
      const storageRef = ref(storage, fileName);
      
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      return {
        url: downloadURL,
        path: fileName
      };
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  }

  // Delete image from Firebase Storage
  static async deleteImage(imagePath) {
    if (!imagePath) return;
    
    try {
      const imageRef = ref(storage, imagePath);
      await deleteObject(imageRef);
    } catch (error) {
      console.error('Error deleting image:', error);
      // Don't throw error as image might not exist
    }
  }

  // Create new project
  static async createProject(projectData, imageFile = null) {
    try {
      // First create the project to get an ID
      const docRef = await addDoc(collection(db, PROJECTS_COLLECTION), {
        ...projectData,
        image: '',
        imagePath: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        order: projectData.order || Date.now()
      });

      // Upload image if provided
      if (imageFile) {
        const imageData = await this.uploadImage(imageFile, docRef.id);
        await updateDoc(docRef, {
          image: imageData.url,
          imagePath: imageData.path
        });
      }

      return docRef.id;
    } catch (error) {
      console.error('Error creating project:', error);
      throw error;
    }
  }

  // Update project
  static async updateProject(projectId, updates, newImageFile = null) {
    try {
      const projectRef = doc(db, PROJECTS_COLLECTION, projectId);
      
      // Handle image upload if new image provided
      if (newImageFile) {
        // Delete old image if exists
        if (updates.imagePath) {
          await this.deleteImage(updates.imagePath);
        }
        
        // Upload new image
        const imageData = await this.uploadImage(newImageFile, projectId);
        updates.image = imageData.url;
        updates.imagePath = imageData.path;
      }

      await updateDoc(projectRef, {
        ...updates,
        updatedAt: new Date()
      });
    } catch (error) {
      console.error('Error updating project:', error);
      throw error;
    }
  }

  // Delete project
  static async deleteProject(projectId, imagePath = null) {
    try {
      // Delete image if exists
      if (imagePath) {
        await this.deleteImage(imagePath);
      }
      
      // Delete project document
      await deleteDoc(doc(db, PROJECTS_COLLECTION, projectId));
    } catch (error) {
      console.error('Error deleting project:', error);
      throw error;
    }
  }

  // Get all projects
  static async getAllProjects() {
    try {
      const q = query(
        collection(db, PROJECTS_COLLECTION),
        orderBy('order', 'asc'),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting projects:', error);
      throw error;
    }
  }

  // Get featured projects
  static async getFeaturedProjects() {
    try {
      const q = query(
        collection(db, PROJECTS_COLLECTION),
        where('featured', '==', true),
        orderBy('order', 'asc')
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting featured projects:', error);
      throw error;
    }
  }

  // Update project order
  static async updateProjectOrder(projectId, newOrder) {
    try {
      const projectRef = doc(db, PROJECTS_COLLECTION, projectId);
      await updateDoc(projectRef, {
        order: newOrder,
        updatedAt: new Date()
      });
    } catch (error) {
      console.error('Error updating project order:', error);
      throw error;
    }
  }
}

export default ProjectService;