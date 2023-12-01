import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';

import { Routes } from './src/routes';
import theme from './src/theme';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar style="dark" translucent backgroundColor="transparent" />
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
