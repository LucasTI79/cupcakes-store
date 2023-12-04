import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeIcon, ShoppingCartIcon } from 'lucide-react-native';
import React from 'react';

import { Cart } from '@screens/User/Cart';
import { Home } from '@screens/User/Home';
import { ProductDetails } from '@screens/User/ProductDetails';
import theme from '@theme/index';

const { Navigator, Screen } = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="productDetails" component={ProductDetails} />
    </Navigator>
  );
}

export function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.COLORS.PRIMARY,
        tabBarInactiveTintColor: theme.COLORS.SUBTEXT,
      }}
    >
      <Tab.Screen
        name="homeStack"
        component={HomeStack}
        options={{
          title: 'Inicio',
          tabBarIcon(props) {
            return (
              <HomeIcon
                color={
                  props.focused ? theme.COLORS.PRIMARY : theme.COLORS.SUBTEXT
                }
                style={{ width: 24, height: 24 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          title: 'Carrinho',
          tabBarIcon(props) {
            return (
              <ShoppingCartIcon
                color={
                  props.focused ? theme.COLORS.PRIMARY : theme.COLORS.SUBTEXT
                }
                style={{ width: 24, height: 24 }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
