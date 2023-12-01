import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const [user, setUser] = React.useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
