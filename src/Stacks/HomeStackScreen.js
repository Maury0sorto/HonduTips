import React from "react";  // Importa React
import { View, Text } from "react-native";  // Importa componentes básicos de react-native
import { createNativeStackNavigator } from "@react-navigation/native-stack";  // Importa el componente createNativeStackNavigator de @react-navigation/native-stack
import HomeScreen from "../Screens/HomeScreen";  // Importa el componente HomeScreen desde la ruta relativa "../Screens/HomeScreen"
import { Ionicons } from "@expo/vector-icons";  // Importa el componente Ionicons de @expo/vector-icons

const HomeStackScreen = () => {  // Define el componente funcional HomeStackScreen
  const HomeStack = createNativeStackNavigator();  // Crea una instancia del stack de navegación HomeStack
  return (
    <HomeStack.Navigator>
      {/* Define una pantalla en el stack con nombre "HomeScreen" */}
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}  // Asigna el componente HomeScreen a esta pantalla
        options={{
          headerShown: false,  // Oculta la barra de navegación superior
          headerTitle: "Home",  // Establece el título de la barra de navegación
          headerTitleStyle: { color: "#fff" },  // Estilos para el título de la barra de navegación
          headerLeft: () => (
            <Ionicons
              name="md-home"
              size={24}
              color="#fff"
              style={{ marginLeft: 10 }}  // Estilos para el ícono en la parte izquierda de la barra de navegación
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;  // Exporta el componente HomeStackScreen
