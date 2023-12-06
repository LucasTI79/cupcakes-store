import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import React, { createContext, useEffect, useMemo, useState } from 'react';

import { getUsersStore } from '@lib/firebase/firestore';

type MyUser = FirebaseAuthTypes.User & {
  fullname?: string;
  phone: string;
  isAdmin?: boolean;
};

type AuthContextType = {
  user: MyUser | null;
  isLoading?: boolean;
  isAdmin?: boolean;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [user, setUser] = useState<MyUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const subscriber = auth().onAuthStateChanged((response) => {
      getUsersStore
        .doc(response?.uid)
        .get()
        .then((userData) => {
          if (!userData.exists) {
            setUser(null);
          }
          const data = userData.data();
          const newUserData: MyUser = {
            ...response,
            fullname: data?.fullname,
            uid: response?.uid,
            phone: data?.phone,
            isAdmin: data?.role === 'ADMIN',
          } as MyUser;
          setUser(newUserData);
        })
        .finally(() => setIsLoading(false));
    });
    return subscriber;
  }, []);

  const authContextValue = useMemo(
    () => ({ user, isAdmin: !!user?.isAdmin, isLoading }),
    [user, isLoading],
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
