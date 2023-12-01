import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ForgotPassword } from '@screens/ForgotPassword';
import { Login } from '@screens/Login';
import { Register } from '@screens/Register';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="register" component={Register} />
      <Screen name="forgotPassword" component={ForgotPassword} />
    </Navigator>
  );
}
