"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { 
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '@/libs/firebase/config';
import { notifications } from '@mantine/notifications';

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // Admin email - you can also store this in environment variables
  const ADMIN_EMAIL = 'suhasnidgundi@gmail.com'; // Replace with your email

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsAdmin(user?.email === ADMIN_EMAIL);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const loginWithEmail = async (email, password) => {
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      
      if (result.user.email !== ADMIN_EMAIL) {
        await signOut(auth);
        throw new Error('Unauthorized access. Admin privileges required.');
      }
      
      notifications.show({
        title: 'Success',
        message: 'Successfully logged in as admin!',
        color: 'green',
      });
      
      return result;
    } catch (error) {
      notifications.show({
        title: 'Login Error',
        message: error.message,
        color: 'red',
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      
      if (result.user.email !== ADMIN_EMAIL) {
        await signOut(auth);
        throw new Error('Unauthorized access. Admin privileges required.');
      }
      
      notifications.show({
        title: 'Success',
        message: 'Successfully logged in with Google!',
        color: 'green',
      });
      
      return result;
    } catch (error) {
      notifications.show({
        title: 'Login Error',
        message: error.message,
        color: 'red',
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      notifications.show({
        title: 'Success',
        message: 'Successfully logged out!',
        color: 'blue',
      });
    } catch (error) {
      notifications.show({
        title: 'Logout Error',
        message: error.message,
        color: 'red',
      });
      throw error;
    }
  };

  const value = {
    user,
    isAdmin,
    loading,
    loginWithEmail,
    loginWithGoogle,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};