import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import { AppRoutes } from './src/routes/app.routes';

import theme from '@global/styles';

import { DayPeriodProvider } from './src/contexts/DayPeriodContext';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <DayPeriodProvider>
          <NavigationContainer>
            <StatusBar barStyle='dark-content' backgroundColor='transparent' />
            <AppRoutes />
          </NavigationContainer>
        </DayPeriodProvider>
      </SafeAreaView>
    </ThemeProvider>
  );
}