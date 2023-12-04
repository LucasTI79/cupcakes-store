import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeIcon, ShoppingCartIcon, UserIcon } from 'lucide-react-native';
import React from 'react';
import { useTheme } from 'styled-components/native';

import { Cart } from '@screens/User/Cart';
import { Checkout } from '@screens/User/Checkout';
import { Home } from '@screens/User/Home';
import { ProductDetails } from '@screens/User/ProductDetails';
import { Profile } from '@screens/User/Profile';

const { Navigator, Screen } = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="homeStack" component={Home} />
      <Screen name="productDetails" component={ProductDetails} />
    </Navigator>
  );
}

function CartStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="cartStack" component={Cart} />
      <Screen
        name="checkout"
        component={Checkout}
        options={{
          title: 'Pagamento',
        }}
      />
    </Navigator>
  );
}

export function AppRoutes() {
  const { COLORS } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.SUBTEXT,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{
          title: 'Inicio',
          tabBarIcon(props) {
            return (
              <HomeIcon
                color={props.focused ? COLORS.PRIMARY : COLORS.SUBTEXT}
                style={{ width: 24, height: 24 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartStack}
        options={{
          title: 'Carrinho',
          tabBarIcon(props) {
            return (
              <ShoppingCartIcon
                color={props.focused ? COLORS.PRIMARY : COLORS.SUBTEXT}
                style={{ width: 24, height: 24 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          title: 'Perfil',
          tabBarIcon(props) {
            return (
              <UserIcon
                color={props.focused ? COLORS.PRIMARY : COLORS.SUBTEXT}
                style={{ width: 24, height: 24 }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
