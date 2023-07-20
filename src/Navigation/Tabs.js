import React from 'react';
import { useState } from 'react';
import LoadingScreen from '../Screens/LoadingScreen';
import { HomeScreen, Welcome } from '../Screens';
import Ciudades from '../Screens/Ciudades';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackScreen from '../Stacks/HomeStackScreen';
import { Ionicons } from '@expo/vector-icons';
import Settings from '../Screens/Settings';
import SerchStackScreen from '../Stacks/SerchStackScreen';
import Registro from '../Screens/Registro';
import OnboardingScreen from '../Screens/OnboardingScreen';
import { Image } from 'react-native';




const Stack = createNativeStackNavigator();


const Tabs = () => {
  const Tab = createBottomTabNavigator();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (

    
    <Tab.Navigator >

      
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

        
<Tab.Screen
        name="Buscar"
        component={SerchStackScreen}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: '#00BCE4', shadowColor: 'black'},
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={{ uri: 'https://i.imgur.com/UpWzcqV.png' }} // URL de la imagen
              style={{ width: size * 1.5, height: size, tintColor: color, resizeMode: 'contain' }}
            />
          ),
          tabBarActiveTintColor: '#00BCE4',
        }}
       />

<Tab.Screen
        name="Registra tu Empresa"
        component={Registro}
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

      <Tab.Screen
        name="Ajustes"
        component={Settings}
        options={{
          
          headerStyle: { backgroundColor: '#00BCE4', shadowColor: 'black' },
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-settings" size={size} color={color} />
          ),
          tabBarActiveTintColor: '#00BCE4',
        }}
      />



      

      

      
    </Tab.Navigator>
    
    
    
  );
  
};

const Prueba = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
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
      <LoadingScreen />
    </NavigationContainer>
  );
};

export default Prueba;
