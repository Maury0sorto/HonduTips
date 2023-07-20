import React from "react";
import { View, Text} from "react-native";
import { createNativeStackNavigator} from "@react-navigation/native-stack"

import Settings from "../Screens/Settings";



const RegistrarEmpresa = () => {                   // Este stack es el de Settings  es decir es uno de los 3 que se ven en la parte de abajo
  const SettingsStack = createNativeStackNavigator();
  return(
        <SettingsStack.Navigator>
          <SettingsStack.Screen name="Settings" component={Settings}/>
         
        </SettingsStack.Navigator>
    
  );
};

export default RegistrarEmpresa;
