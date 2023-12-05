import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { Load } from '@components/controllers/loading/Load';
import { useAuth } from '@hooks/useAuth';

import { AdminRoutes } from './admin.routes';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { isLoading, user, isAdmin } = useAuth();

  if (isLoading) {
    return <Load />;
  }

  if (!user?.uid) {
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
