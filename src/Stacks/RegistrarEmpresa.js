import React from "react";  // Importa React
import { View, Text } from "react-native";  // Importa componentes básicos de react-native
import { createNativeStackNavigator } from "@react-navigation/native-stack";  // Importa el componente createNativeStackNavigator de @react-navigation/native-stack
import Registro from "../Screens/Registro";  // Importa el componente Registro desde la ruta relativa "../Screens/Registro"

const RegistrarEmpresa = () => {  // Define el componente funcional RegistrarEmpresa
  const RegistrarStack = createNativeStackNavigator();  // Crea una instancia del stack de navegación RegistrarStack
  return (
    <RegistrarStack.Navigator>
      {/* Define una pantalla en el stack con nombre "Registro" */}
      <RegistrarStack.Screen name="Registro" component={Registro} />
    </RegistrarStack.Navigator>
  );
};

export default RegistrarEmpresa;  // Exporta el componente RegistrarEmpresa
