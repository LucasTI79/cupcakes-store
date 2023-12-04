import auth from '@react-native-firebase/auth';

import { getUsersStore } from '../lib/firebase/firestore';

export function useAuth() {
  const handleRegisterUser = async (
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

  const handleRegisterAdmin = async (
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

  const handleLogin = (email: string, password: string) =>
    auth().signInWithEmailAndPassword(email, password);

  const handleSignOut = () => auth().signOut();

  const handleForgotPassword = (email: string) =>
    auth().sendPasswordResetEmail(email);

  const getCurrentUser = async () => {
    const user = auth().currentUser;
    const extraData = await getUsersStore.doc(user?.uid).get();
    return { ...user, extraData };
  };

  return {
    handleRegister: handleRegisterUser,
    handleRegisterAdmin,
    handleLogin,
    handleForgotPassword,
    handleSignOut,
    getCurrentUser,
  };
}
