import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa tus pantallas aquí
import HomeScreen from '../Screens/HomeScreen';
import OnboardingScreen from '../Screens/OnboardingScreen';

const Stack = createStackNavigator();

function Navegacion() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navegacion;
