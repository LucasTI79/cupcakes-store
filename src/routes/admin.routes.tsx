import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeIcon } from 'lucide-react-native';
import React from 'react';
import { useTheme } from 'styled-components/native';

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
        name="homeStack"
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
    </Tab.Navigator>
  );
}
