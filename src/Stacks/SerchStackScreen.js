import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { Welcome } from '../Screens';
import Ciudades from '../Screens/Ciudades';


import OnboardingScreen from '../Screens/OnboardingScreen';
import DanliScreen from '../Screens/Ciudades/Danli/DanliScreen';
import BancosDanli from '../Screens/Ciudades/Danli/BancosDanli';
import HotelesDanli from '../Screens/Ciudades/Danli/HotelesDanli';
import RestaurantesDanli from '../Screens/Ciudades/Danli/RestaurantesDanli'
import GasolinerasDanli from '../Screens/Ciudades/Danli/GasolinerasDanli';
import BarberiasDanli from '../Screens/Ciudades/Danli/BarberiasDanli';
import FarmaciasDanli from '../Screens/Ciudades/Danli/FarmaciasDanli';
import AutomotrizDanli from '../Screens/Ciudades/Danli/Automotriz/AutomotrizDanli';
import lubricentrosDanli from '../Screens/Ciudades/Danli/Automotriz/servicios/lubricentrosDanli';
import carwashDanli from '../Screens/Ciudades/Danli/Automotriz/servicios/CarWashDanli';

import EnConstruccion from '../Screens/EnConstruccion';


const SerchStackScreen = () => {        // Este stack es el de Search es decir es uno de los 3 que se ven en la parte de abajo

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
          <SerchStack.Screen name="Ciudades" component={Ciudades}/>
          <SerchStack.Screen name='Danli' component={DanliScreen}  options={{ headerBackVisible: true }} />
          <SerchStack.Screen name="Bancos Danli" component={BancosDanli}/>
          <SerchStack.Screen name="Restaurantes Danli" component={RestaurantesDanli} />
          <SerchStack.Screen name="Hoteles Danli" component={HotelesDanli}/>
          <SerchStack.Screen name="Gasolineras Danli" component={GasolinerasDanli}/>
          <SerchStack.Screen name="Barberias Danli" component={BarberiasDanli}/>
          <SerchStack.Screen name="Farmacias Danli" component={FarmaciasDanli}/>
          <SerchStack.Screen name="Automotriz Danli" component={AutomotrizDanli}/>
          <SerchStack.Screen name="Lubricentros Danli" component={lubricentrosDanli}/>
          <SerchStack.Screen name="CarWash Danli" component={carwashDanli}/>






          <SerchStack.Screen name="Construccion" component={EnConstruccion}/>
          <SerchStack.Screen name="Onboarding" component={OnboardingScreen}/>
        </SerchStack.Navigator>
  )
}

export default SerchStackScreen