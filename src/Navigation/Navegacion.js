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
      {/* Crea un stack navigator */}
      <Stack.Navigator>
        {/* Define las pantallas en el stack */}
        {/* Por ejemplo, aquí está definida una pantalla llamada "Onboarding" */}
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        {/* Agrega más pantallas aquí, si es necesario */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navegacion;
