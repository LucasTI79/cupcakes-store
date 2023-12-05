import auth from '@react-native-firebase/auth';
import { useContext } from 'react';

import { AuthContext } from '@context/auth/auth';

import { getUsersStore } from '../lib/firebase/firestore';

export const getCurrentUser = async () => {
  const user = auth().currentUser;
  if (user) {
    const extraData = await getUsersStore.doc(user?.uid).get();
    const response = { ...user, extraData };
    return response;
  }

  return null;
};

export const handleRegisterUser = async (
  email: string,
  password: string,
  fullname: string,
) => {
  const userCredential = await auth().createUserWithEmailAndPassword(
    email,
    password,
  );
  await getUsersStore.doc(userCredential.user?.uid).set({
    role: 'USER',
    fullname,
  });
};

export const handleRegisterAdmin = async (
  email: string,
  password: string,
  fullname: string,
) => {
  const userCredential = await auth().createUserWithEmailAndPassword(
    email,
    password,
  );
  await getUsersStore.doc(userCredential.user?.uid).set({
    role: 'ADMIN',
    fullname,
  });
};

export const handleLogin = (email: string, password: string) =>
  auth().signInWithEmailAndPassword(email, password);

export const handleSignOut = () => auth().signOut();

export const handleForgotPassword = (email: string) =>
  auth().sendPasswordResetEmail(email);

export function useAuth() {
  const context = useContext(AuthContext);
  return {
    handleRegister: handleRegisterUser,
    handleRegisterAdmin,
    handleLogin,
    handleForgotPassword,
    handleSignOut,
    getCurrentUser,
    ...context,
  };
}
