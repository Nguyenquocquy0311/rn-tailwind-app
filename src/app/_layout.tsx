import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import '@/themes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <GestureHandlerRootView className='flex-1'>
      <ThemeProvider value={DefaultTheme}>
        <QueryClientProvider client={queryClient}>
          <StatusBar translucent style='auto' />
          <Slot />
        </QueryClientProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
