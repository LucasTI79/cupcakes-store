/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HomeIcon,
  PackageIcon,
  ShoppingCartIcon,
  UserIcon,
} from 'lucide-react-native';
import React from 'react';
import { useTheme } from 'styled-components/native';

import { Profile } from '@screens/Common/Profile';
import { Cart } from '@screens/User/Cart';
import { Checkout } from '@screens/User/Checkout';
import { Home } from '@screens/User/Home';
import { Order } from '@screens/User/Order';
import { OrderDetails } from '@screens/User/OrderDetails';
import { ProductDetails } from '@screens/User/ProductDetails';

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

function OrderStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="order" component={Order} />
      <Screen name="orderDetails" component={OrderDetails} />
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

export function UserRoutes() {
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
        name="orderStack"
        component={OrderStack}
        options={{
          title: 'Pedidos',
          tabBarIcon(props) {
            return (
              <PackageIcon
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
