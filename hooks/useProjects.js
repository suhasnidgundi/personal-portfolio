import { useState, useEffect } from 'react';
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy, 
  where,
  onSnapshot 
} from 'firebase/firestore';
import { db } from '@/libs/firebase/config';

const PROJECTS_COLLECTION = 'projects';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const q = query(
        collection(db, PROJECTS_COLLECTION),
        orderBy('order', 'asc'),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      const projectsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProjects(projectsData);
      setError(null);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Real-time listener for projects
  const subscribeToProjects = () => {
    const q = query(
      collection(db, PROJECTS_COLLECTION),
      orderBy('order', 'asc'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const projectsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProjects(projectsData);
      setLoading(false);
    }, (err) => {
      console.error('Error in projects subscription:', err);
      setError(err.message);
      setLoading(false);
    });

    return unsubscribe;
  };

  // Add new project
  const addProject = async (projectData) => {
    try {
      const docRef = await addDoc(collection(db, PROJECTS_COLLECTION), {
        ...projectData,
        createdAt: new Date(),
        updatedAt: new Date(),
        order: Date.now() // Simple ordering
      });
      return docRef.id;
    } catch (err) {
      console.error('Error adding project:', err);
      throw err;
    }
  };

  // Update project
  const updateProject = async (projectId, updates) => {
    try {
      const projectRef = doc(db, PROJECTS_COLLECTION, projectId);
      await updateDoc(projectRef, {
        ...updates,
        updatedAt: new Date()
      });
    } catch (err) {
      console.error('Error updating project:', err);
      throw err;
    }
  };

  // Delete project
  const deleteProject = async (projectId) => {
    try {
      await deleteDoc(doc(db, PROJECTS_COLLECTION, projectId));
    } catch (err) {
      console.error('Error deleting project:', err);
      throw err;
    }
  };

  // Get featured projects
  const getFeaturedProjects = () => {
    return projects.filter(project => project.featured);
  };

  // Get projects by tag
  const getProjectsByTag = (tag) => {
    if (tag === 'all') return projects;
    return projects.filter(project => 
      project.tags && project.tags.includes(tag)
    );
  };

  // Get unique tags
  const getAllTags = () => {
    const allTags = projects.flatMap(project => project.tags || []);
    return [...new Set(allTags)];
  };

  useEffect(() => {
    // Use real-time listener
    const unsubscribe = subscribeToProjects();
    return unsubscribe;
  }, []);

  return {
    projects,
    loading,
    error,
    addProject,
    updateProject,
    deleteProject,
    getFeaturedProjects,
    getProjectsByTag,
    getAllTags,
    refetch: fetchProjects
  };
};

export default useProjects;