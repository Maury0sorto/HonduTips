import React from "react";
import { View, Text} from "react-native";
import { createNativeStackNavigator} from "@react-navigation/native-stack"
import Registro from "../Screens/Registro";




const RegistrarEmpresa = () => {                   // Este stack es el de Settings  es decir es uno de los 3 que se ven en la parte de abajo
  const RegistrarStack = createNativeStackNavigator();
  return(
        <RegistrarStack.Navigator>
          <RegistrarStack.Screen name="Registro" component={Registro}/>
         
        </RegistrarStack.Navigator>
    
  );
};

export default RegistrarEmpresa; 
