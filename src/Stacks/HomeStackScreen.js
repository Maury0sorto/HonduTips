import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";

const HomeStackScreen = () => {                           // Este stack es el de Home es decir es uno de los 3 que se ven en la parte de abajo
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false, // Oculta la barra de navegación superior
          headerTitle: "Home",
          headerTitleStyle: { color: "#fff" },
          headerLeft: () => (
            <Ionicons
              name="md-home"
              size={24}
              color="#fff"
              style={{ marginLeft: 10 }}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
