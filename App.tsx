import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { QueryClientProvider } from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';

import { AuthProvider } from '@context/auth';
import { CartProvider } from '@context/cart';
import { queryClient } from '@lib/queryClient';
import theme from '@theme/index';

import { Routes } from './src/routes';

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
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <CartProvider>
              <Routes />
            </CartProvider>
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
