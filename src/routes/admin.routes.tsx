/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PackageIcon, ShoppingBagIcon, UserIcon } from 'lucide-react-native';
import React from 'react';
import { useTheme } from 'styled-components/native';

import { ProductProvider } from '@context/product';
import { EditProduct } from '@screens/Admin/EditProduct';
import { Order } from '@screens/Admin/Order';
import { OrderDetails } from '@screens/Admin/OrderDetails';
import { Products } from '@screens/Admin/Products';
import { RegisterProduct } from '@screens/Admin/RegisterProduct';
import { Profile } from '@screens/Common/Profile';

const { Navigator, Screen } = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function OrderStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="order" component={Order} />
      <Screen name="orderDetails" component={OrderDetails} />
    </Navigator>
  );
}

function ProductStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="products" component={Products} />
      <Screen name="registerProduct" component={RegisterProduct} />
      <Screen name="editProduct" component={EditProduct} />
    </Navigator>
  );
}

export function AdminRoutes() {
  const { COLORS } = useTheme();
  return (
    <ProductProvider>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.PRIMARY,
          tabBarInactiveTintColor: COLORS.SUBTEXT,
        }}
      >
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
          name="productsStack"
          component={ProductStack}
          options={{
            title: 'Meus Produtos',
            tabBarIcon(props) {
              return (
                <ShoppingBagIcon
                  color={props.focused ? COLORS.PRIMARY : COLORS.SUBTEXT}
                  style={{ width: 24, height: 24 }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="profileStack"
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
    </ProductProvider>
  );
}
