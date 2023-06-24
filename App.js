
import { useState } from 'react';  // Eliminé la importación duplicada de 'React'

import LoadingScreen from './src/Screens/LoadingScreen';
import { ThemeProvider } from './src/Navigation/ThemeContext';
import { HomeScreen, Welcome } from "./src/Screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
import Prueba from './src/Navigation/Tabs';
import OnboardingScreen from './src/Screens/OnboardingScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
    
      <Prueba/>
      <LoadingScreen />
      
      
    </>
  );
};

export default App;
