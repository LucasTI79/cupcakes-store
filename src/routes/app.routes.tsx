import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Cart } from '@screens/Cart';
import { Home } from '@screens/Home';
import { ProductDetails } from '@screens/ProductDetails';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="cart" component={Cart} />
      <Screen name="productDetails" component={ProductDetails} />
    </Navigator>
  );
}
