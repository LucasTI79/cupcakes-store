import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeIcon } from 'lucide-react-native';
import React from 'react';

import theme from '@theme/index';

const { Navigator, Screen } = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return null;
}

function HomeStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
    </Navigator>
  );
}

export function AdminRoutes() {
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
    </Tab.Navigator>
  );
}
