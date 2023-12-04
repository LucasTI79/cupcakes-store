import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';

import { Load } from '@components/controllers/loading/Load';
import { getUsersStore } from '@lib/firebase/firestore';

import { AdminRoutes } from './admin.routes';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

type User = FirebaseAuthTypes.User & {
  isAdmin?: boolean;
};

export function Routes() {
  const [user, setUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const userIsAdmin = useCallback(() => {
    setIsLoading(true);

    getUsersStore
      .doc(user?.uid)
      .get()
      .then((userData) => {
        const data = userData.data();
        if (data) {
          console.log('data', data);
          setIsAdmin(data.role === 'ADMIN');
        }
      })
      .finally(() => setIsLoading(false));
  }, [user?.uid]);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);
    return subscriber;
  }, []);

  useEffect(() => {
    if (user) {
      userIsAdmin();
    }
  }, [user, userIsAdmin]);

  console.log('user', user);

  if (isLoading) {
    return <Load />;
  }

  if (!user) {
    return (
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      {isAdmin ? <AdminRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
}
