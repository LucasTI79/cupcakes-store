import auth from '@react-native-firebase/auth';

export function useAuth() {
  const handleRegister = (email: string, password: string) =>
    auth().createUserWithEmailAndPassword(email, password);

  const handleLogin = (email: string, password: string) =>
    auth().signInWithEmailAndPassword(email, password);

  const handleSignOut = () => auth().signOut();

  const handleForgotPassword = (email: string) =>
    auth().sendPasswordResetEmail(email);

  return { handleRegister, handleLogin, handleForgotPassword, handleSignOut };
}
