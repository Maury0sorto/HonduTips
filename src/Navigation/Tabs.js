import React from 'react';
import { useState } from 'react';
import LoadingScreen from '../Screens/LoadingScreen';  // Importa el componente LoadingScreen desde la ruta relativa '../Screens/LoadingScreen'
import { HomeScreen, Welcome } from '../Screens';  // Importa los componentes HomeScreen y Welcome desde la ruta relativa '../Screens'
import Ciudades from '../Screens/Ciudades';  // Importa el componente Ciudades desde la ruta relativa '../Screens/Ciudades'
import { createNativeStackNavigator } from '@react-navigation/native-stack';  // Importa el componente createNativeStackNavigator de @react-navigation/native-stack
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  // Importa el componente createBottomTabNavigator de @react-navigation/bottom-tabs
import { NavigationContainer } from '@react-navigation/native';  // Importa el componente NavigationContainer de @react-navigation/native
import HomeStackScreen from '../Stacks/HomeStackScreen';  // Importa el componente HomeStackScreen desde la ruta relativa '../Stacks/HomeStackScreen'
import { Ionicons } from '@expo/vector-icons';  // Importa el componente Ionicons de @expo/vector-icons
import Settings from '../Screens/Settings';  // Importa el componente Settings desde la ruta relativa '../Screens/Settings'
import SerchStackScreen from '../Stacks/SerchStackScreen';  // Importa el componente SerchStackScreen desde la ruta relativa '../Stacks/SerchStackScreen'
import Registro from '../Screens/Registro';  // Importa el componente Registro desde la ruta relativa '../Screens/Registro'
import OnboardingScreen from '../Screens/OnboardingScreen';  // Importa el componente OnboardingScreen desde la ruta relativa '../Screens/OnboardingScreen'
import { Image } from 'react-native';  // Importa el componente Image desde 'react-native'
import Formulario from '../Screens/Formulario';

// Crea una instancia del stack de navegación
const Stack = createNativeStackNavigator();

// Define un componente funcional llamado Tabs
const Tabs = () => {
  // Crea una instancia del tab navigator
  const Tab = createBottomTabNavigator();
  // Define el estado isAuthenticated y su función setter setIsAuthenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Tab.Navigator>
      {/* Define una pantalla de tab para la pantalla de Inicio */}
      <Tab.Screen
        name="Inicio"
        component={HomeStackScreen}
        options={{
          headerStyle: { backgroundColor: '#00BCE4', shadowColor: 'black' },
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-home" size={size} color={color} />
          ),
          tabBarActiveTintColor: '#00BCE4',
        }}
      />
      {/* Define una pantalla de tab para la pantalla de Búsqueda */}
      <Tab.Screen
        name="Buscar"
        component={SerchStackScreen}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: '#00BCE4', shadowColor: 'black'},
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-search" size={size} color={color} />
          ),
          tabBarActiveTintColor: '#00BCE4',
        }}
      />
      {/* Define una pantalla de tab para la pantalla de Registro */}
      <Tab.Screen
        name="Registra tu Empresa"
        component={Formulario}
        options={{
          headerStyle: { backgroundColor: '#00BCE4', shadowColor: 'black'},
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={{ uri: 'https://i.imgur.com/hQ8x85P.png' }} // URL de la imagen
              style={{ width: size * 1.5, height: size, tintColor: color, resizeMode: 'contain' }}
            />
          ),
          tabBarActiveTintColor: '#00BCE4',
        }}
      />
    </Tab.Navigator>
  );
};

// Define el componente funcional Prueba
const Prueba = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      {/* Crea un stack de navegación */}
      <Stack.Navigator initialRouteName="Welcome">
        {/* Define una pantalla en el stack para la pantalla de bienvenida */}
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        {/* Define una pantalla en el stack para el tab navigator Tabs */}
        <Stack.Screen
          name="HomeScreen"
          options={{
            gestureEnabled: false,
            headerShown: false,
            headerLeft: null,
          }}
          component={Tabs}
        />
      </Stack.Navigator>
      {/* Renderiza el componente LoadingScreen */}
      <LoadingScreen />
    </NavigationContainer>
  );
};

export default Prueba;  // Exporta el componente Prueba
