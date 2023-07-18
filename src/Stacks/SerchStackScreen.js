import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { Welcome } from '../Screens';
import Ciudades from '../Screens/Ciudades';


import OnboardingScreen from '../Screens/OnboardingScreen';
import DanliScreen from '../Screens/Ciudades/Danli/DanliScreen';
import BancosDanli from '../Screens/Ciudades/Danli/Banca/BancosDanli';
import HotelesDanli from '../Screens/Ciudades/Danli/HospedajesDanli/HotelesDanli';
import RestaurantesDanli from '../Screens/Ciudades/Danli/RestaurantesDanli'
import GasolinerasDanli from '../Screens/Ciudades/Danli/GasolinerasDanli/GasolinerasDanli';
import BarberiasDanli from '../Screens/Ciudades/Danli/BellezaDanli/BarberiasDanli';
import FarmaciasDanli from '../Screens/Ciudades/Danli/SaludDanli/FarmaciasDanli';
import AutomotrizDanli from '../Screens/Ciudades/Danli/Automotriz/AutomotrizDanli';
import CarWashDanli from '../Screens/Ciudades/Danli/Automotriz/servicios/CarWashDanli';
import LubricentrosDanli from '../Screens/Ciudades/Danli/Automotriz/servicios/lubricentrosDanli';
import GimnasiosDanli from '../Screens/Ciudades/Danli/ActividadFisicaDanli/GimnasiosDanli';
import PlazasComercialesDanli from '../Screens/Ciudades/Danli/PlazasComercialesDanli/PlazasComercialesDanli';
import ClinicasDanli from '../Screens/Ciudades/Danli/SaludDanli/CentroMedicosDanli';
import TerminalBusesDanli from '../Screens/Ciudades/Danli/TransporteDanli/TransporteDanli';
import ActividadFisicaDanli from '../Screens/Ciudades/Danli/ActividadFisicaDanli/ActividadaFisicaDanli';
import ArtesMarcialesDanli from '../Screens/Ciudades/Danli/ActividadFisicaDanli/ArtesMarcialesDanli/ArtesMarcialesDanli';
import CanchasDeFutbolDanli from '../Screens/Ciudades/Danli/ActividadFisicaDanli/CanchasFootBallDanli/CanchasDeFutbolDanli';
import CanchasDeBaloncestoDanli from '../Screens/Ciudades/Danli/ActividadFisicaDanli/CanchasBasketDanli/CanchasDeBaloncestoDanli';
import TalleresDanli from '../Screens/Ciudades/Danli/Automotriz/servicios/TalleresDanli';
import SupersDanli from '../Screens/Ciudades/Danli/AlimentosBebidasDanli/supermercadoDanli/SupersDanli';

import EnConstruccion from '../Screens/EnConstruccion';
import HospedajesDanli from '../Screens/Ciudades/Danli/HospedajesDanli/HospedajesDanli';
import AlimentosBebidasDanli from '../Screens/Ciudades/Danli/AlimentosBebidasDanli/AlimentosBebidasDanli';
import SaludDanli from '../Screens/Ciudades/Danli/SaludDanli/SaludDanli';
import CentroMedicosDanli from '../Screens/Ciudades/Danli/SaludDanli/CentroMedicosDanli';

import CafesDanli from '../Screens/Ciudades/Danli/AlimentosBebidasDanli/cafeteriasDanli/CafesDanli';
import ClinicasDentalesDanli from '../Screens/Ciudades/Danli/SaludDanli/ClinicasDentalesDanli';
import MotelesDanli from '../Screens/Ciudades/Danli/HospedajesDanli/MotelesDanli';
import BancaDanli from '../Screens/Ciudades/Danli/Banca/BancaDanli';
import BellezaDanli from '../Screens/Ciudades/Danli/BellezaDanli/BellezaDanli';
import CooperativasDanli from '../Screens/Ciudades/Danli/Banca/CooperativasDanli';
import FinancierasDanli from '../Screens/Ciudades/Danli/Banca/FinancierasDanli';
import EduacionDanli from '../Screens/Ciudades/Danli/EducacionDanli/EducacionDanli';
import FoodTrucksDanli from '../Screens/Ciudades/Danli/AlimentosBebidasDanli/FoodTrucksDanli';
import BaresDanli from '../Screens/Ciudades/Danli/AlimentosBebidasDanli/BaresDanli';
import ReposteriaDanli from '../Screens/Ciudades/Danli/AlimentosBebidasDanli/ReposteriaDanli';
const SerchStackScreen = () => {        // Este stack es el de Search es decir es uno de los 3 que se ven en la parte de abajo

    const SerchStack = createNativeStackNavigator();
  return (
    <SerchStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#00BCE4', // Color de fondo de la barra de navegación
      },
      headerTintColor: '#fff', // Color del texto en la barra de navegación
    }}  //dsa
  >
          <SerchStack.Screen name="Ciudades" component={Ciudades}/>
          <SerchStack.Screen name='Danlí' component={DanliScreen}  options={{ headerBackVisible: true }} />
          <SerchStack.Screen name="Bancos Danlí" component={BancosDanli}/>
          <SerchStack.Screen name="Restaurantes Danlí" component={RestaurantesDanli} />
          <SerchStack.Screen name="Hoteles Danlí" component={HotelesDanli}/>
          <SerchStack.Screen name="Gasolineras Danlí" component={GasolinerasDanli}/>
          <SerchStack.Screen name="Barberias Danlí" component={BarberiasDanli}/>
          <SerchStack.Screen name="Farmacias Danlí" component={FarmaciasDanli}/>
          <SerchStack.Screen name="Automotriz Danlí" component={AutomotrizDanli}/>
          <SerchStack.Screen name="Carwash Danlí" component={CarWashDanli}/>
          <SerchStack.Screen name="Lubricentros Danlí" component={LubricentrosDanli}/> 
          <SerchStack.Screen name="Gimnasios Danli" component={GimnasiosDanli}/> 
          <SerchStack.Screen name="Mall's Danlí" component={PlazasComercialesDanli}/> 
          <SerchStack.Screen name="Clinicas Danlí" component={ClinicasDanli}/> 
          <SerchStack.Screen name="Transporte Danlí" component={TerminalBusesDanli}/> 
          <SerchStack.Screen name="Deportes Danlí" component={ActividadFisicaDanli}/> 
          <SerchStack.Screen name="Artes Marciales de Danlí" component={ArtesMarcialesDanli}/> 
          <SerchStack.Screen name="Canchas De Fútbol en Danlí" component={CanchasDeFutbolDanli}/> 
          <SerchStack.Screen name="Baloncesto en Danlí" component={CanchasDeBaloncestoDanli}/> 
          <SerchStack.Screen name="Talleres en Danli" component={TalleresDanli}/>
          <SerchStack.Screen name="Salud Danli" component={SaludDanli}/>
          <SerchStack.Screen name="Centros Medicos Danlí" component={CentroMedicosDanli}/>
          <SerchStack.Screen name="Clinicas Dentales Danlí" component={ClinicasDentalesDanli}/>

          <SerchStack.Screen name="Alimetos y Bebidas Danlí" component={AlimentosBebidasDanli}/>
          <SerchStack.Screen name='Supermercados Danlí' component={SupersDanli}/>
          <SerchStack.Screen name="Cafés Danlí" component={CafesDanli}/>
          <SerchStack.Screen name="Bares Danlí" component={BaresDanli}/>
          <SerchStack.Screen name="Comida Callejera Danlí" component={FoodTrucksDanli}/>
          <SerchStack.Screen name="Repostería Danlí" component={ReposteriaDanli}/>

        <SerchStack.Screen name="Banca Danlí" component={BancaDanli}/>
        <SerchStack.Screen name="Cooperativas Danlí" component={CooperativasDanli}/>
        <SerchStack.Screen name="Financieras Danlí" component={FinancierasDanli}/>
        

         


          <SerchStack.Screen name="Hospedajes Danlí" component={HospedajesDanli}/>
          <SerchStack.Screen name="Moteles Danlí" component={MotelesDanli}/>


          <SerchStack.Screen name="Belleza Danlí" component={BellezaDanli}/>


          <SerchStack.Screen name="Educación Danlí" component={EduacionDanli}/>

          <SerchStack.Screen name="Construccion" component={EnConstruccion}/>
          <SerchStack.Screen name="Onboarding" component={OnboardingScreen}/>
        </SerchStack.Navigator>
  )
}

export default SerchStackScreen