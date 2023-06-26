
import { useState } from 'react';  // Importar todo lo que se necesitara
import LoadingScreen from './src/Screens/LoadingScreen';
import { ThemeProvider } from './src/Navigation/ThemeContext';
import { HomeScreen, Welcome } from "./src/Screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
import Prueba from './src/Navigation/Tabs';
import OnboardingScreen from './src/Screens/OnboardingScreen';
import { useNavigation } from '@react-navigation/native';



const Stack = createNativeStackNavigator();

const App = () => { // Aca se mandara  llamar solamente lo que se desea a la hora de cargar la App al iniciarla
  
  return (
    
    <>
    
      <Prueba/>       
      <LoadingScreen /> 
      
      
    </>
  );
};

export default App;
