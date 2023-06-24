import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { Welcome } from '../Screens';
import Ciudades from '../Screens/Ciudades';
import Search2 from '../Screens/Search2';
import CopiaCiudades from '../Screens/CopiaCiudades'
import OnboardingScreen from '../Screens/OnboardingScreen';
import DanliScreen from '../Screens/Ciudades/Danli/DanliScreen';
import BancosDanli from '../Screens/Ciudades/Danli/BancosDanli';
import HotelesDanli from '../Screens/Ciudades/Danli/HotelesDanli';
import RestaurantesDanli from '../Screens/Ciudades/Danli/RestaurantesDanli'
import GasolinerasDanli from '../Screens/Ciudades/Danli/GasolinerasDanli';
import BarberiasDanli from '../Screens/Ciudades/Danli/BarberiasDanli';
import FarmaciasDanli from '../Screens/Ciudades/Danli/FarmaciasDanli';

const SerchStackScreen = () => {

    const SerchStack = createNativeStackNavigator();
  return (
    <SerchStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#00BCE4', // Color de fondo de la barra de navegación
      },
      headerTintColor: '#fff', // Color del texto en la barra de navegación
    }}
  >


          <SerchStack.Screen name="Search" component={Ciudades}/>
          <SerchStack.Screen name="Search2" component={Search2}/>
          <SerchStack.Screen name="Danli" component={DanliScreen}/>
          <SerchStack.Screen name="Bancos Danli" component={BancosDanli}/>
          <SerchStack.Screen name="Restaurantes Danli" component={RestaurantesDanli}/>
          <SerchStack.Screen name="Hoteles Danli" component={HotelesDanli}/>
          <SerchStack.Screen name="Gasolineras Danli" component={GasolinerasDanli}/>
          <SerchStack.Screen name="Barberias Danli" component={BarberiasDanli}/>
          <SerchStack.Screen name="Farmacias Danli" component={FarmaciasDanli}/>



          <SerchStack.Screen name="Search3" component={OnboardingScreen}/>
        </SerchStack.Navigator>
  )
}

export default SerchStackScreen