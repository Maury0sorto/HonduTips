import React from "react";
import { View, Text} from "react-native";
import { createNativeStackNavigator} from "@react-navigation/native-stack"

import Settings from "../Screens/Settings";



const SettingsStackScreen = () => {
  const SettingsStack = createNativeStackNavigator();
  return(
        <SettingsStack.Navigator>
          <SettingsStack.Screen name="Settings" component={Settings}/>
         
        </SettingsStack.Navigator>
    
  );
};

export default SettingsStackScreen;
