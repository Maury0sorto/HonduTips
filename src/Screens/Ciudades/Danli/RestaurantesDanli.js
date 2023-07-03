import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import  ExpressoAmericanoDanli from './RestaurantesDanli/ExpressoAmericanoDanli';
import WendysDanli from './RestaurantesDanli/WendysDanli';
import PizzaHutDanli from './RestaurantesDanli/PizzaHutDanli';
import ChesterChikeDanli from './RestaurantesDanli/ChesterChikenDanli';
import PapaJohnstDanli from './RestaurantesDanli/PapaJohnsDanli';
import ParadiseBurgerDanli from './RestaurantesDanli/ParadiseBurgerDanli';
import HotWingsDanli from './RestaurantesDanli/HotWings';
import SushiTotemoDanli from './RestaurantesDanli/SushiTetemoDanli';
import MarioChavezDanli from './RestaurantesDanli/MarioChavezDanli';
import ElGauchoDanli from './RestaurantesDanli/ElGauchoDanli';
import CocoBaleadasDanli from './RestaurantesDanli/CocoBaleadasDanli';
import MoyasGrillDanli from './RestaurantesDanli/MoyasDanli';
import AsadoselGordoDanli from './RestaurantesDanli/AsadosElGordoDanli';
import ElToritoDanli from './RestaurantesDanli/ElToritoDanli';
import Danli800Grados from './RestaurantesDanli/800gradosDanli';
import RincondelToroDanli from './RestaurantesDanli/RincondelToroDanli';
import JamsDanli from './RestaurantesDanli/JamsDanli';
import NapolesDanli from './RestaurantesDanli/NapolesDanli';
import MegaPizzaDanli from './RestaurantesDanli/MegaPizzaDanli';
import PicolinoDanli from './RestaurantesDanli/PicolinoDanli';
import OviserDanli from './RestaurantesDanli/Ovi&Serdanli';
import PolloLandiaDanli from './RestaurantesDanli/PolloLandiadanli';
import PolloslaCestaDanli from './RestaurantesDanli/LaCestaDanli';
import PolloCampesinoDanli from './RestaurantesDanli/pollocampesinoDanli';
import BigosDanli from './RestaurantesDanli/BigosDanli';
import KamfuDanli from './RestaurantesDanli/KamfuDanli';
import OrientalDanli from './RestaurantesDanli/OrientalDanli';
import PupusasDanli from './RestaurantesDanli/PupusasDanli';
import SportJaliDanli from './RestaurantesDanli/SportJaliDanli';
import BaleadasYuliDanli from './RestaurantesDanli/BaleadasYuli';

const ScreenA = ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#FFFF"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
       
      </TouchableHighlight>
      <WendysDanli/>
   
    </View>
  );
};

const ScreenB = ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <PizzaHutDanli/>
     
    </View>
  );
};

const ScreenC = ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <ChesterChikeDanli/>
    </View>
  );
};

const ScreenD = ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <PapaJohnstDanli/>
    </View>
  );
};

const ScreenE = ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
     <ExpressoAmericanoDanli/>
    </View>
  );
};

const ScreenF = ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <ParadiseBurgerDanli/>
    </View>
  );
};

const ScreenG = ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <HotWingsDanli/>
    </View>
  );
};
const ScreenH = ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <SushiTotemoDanli/>
    </View>
  );
};

const ScreenI= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <MarioChavezDanli/>
    </View>
  );
};

const ScreenJ= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <ElGauchoDanli/>
    </View>
  );
};

const ScreenK= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <CocoBaleadasDanli/>
    </View>
  );
};

const ScreenL= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <MoyasGrillDanli/>
    </View>
  );
};
const ScreenM= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <AsadoselGordoDanli/>
    </View>
  );
};
const ScreenN= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <ElToritoDanli/>
    </View>
  );
};
const ScreenÑ= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <Danli800Grados/>
    </View>
  );
};
const ScreenO= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <RincondelToroDanli/>
    </View>
  );
};
const ScreenP= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <JamsDanli/>
    </View>
  );
};
const ScreenQ= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <NapolesDanli/>
    </View>
  );
};
const ScreenR= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <MegaPizzaDanli/>
    </View>
  );
};const ScreenS= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <PicolinoDanli/>
    </View>
  );
};
const ScreenT= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <OviserDanli/>
    </View>
  );
};
const ScreenU= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <PolloLandiaDanli/>
    </View>
  );
};const ScreenV= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <PolloslaCestaDanli/>
    </View>
  );
};
const ScreenW= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <PolloCampesinoDanli/>
    </View>
  );
};
const ScreenX= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <BigosDanli/>
    </View>
  );
};
const ScreenY= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <KamfuDanli/>
    </View>
  );
};
const ScreenZ= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <OrientalDanli/>
    </View>
  );
};
const ScreenAA= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <PupusasDanli/>
    </View>
  );
};
const ScreenAB= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <SportJaliDanli/>
    </View>
  );
};
const ScreenAC= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <BaleadasYuliDanli/>
    </View>
  );
};

const RestaurantesDanli = () => {
  const [componenteVisible, setComponenteVisible] = useState(null);
  const [mostrarSelectList, setMostrarSelectList] = useState(true); // Nuevo estado
  const [selectedOption, setSelectedOption] = useState('Recomendados');

  const mostrarComponente = (text, screenComponent) => {
    setMostrarSelectList(false); // Ocultar SelectList
    setComponenteVisible({ text, screenComponent });
    setSelectedOption(text); // Actualizar la opción seleccionada
  };

  const mostrarBotonAnterior = () => {
     setMostrarSelectList(true); // Mostrar SelectList nuevamente
  setComponenteVisible(null);
  setSelectedOption("Recomendados");
  };

  const buttons = [
    { text: "Wendy's", image: 'https://logodownload.org/wp-content/uploads/2020/05/wendys-logo-3-1.png',  screen: ScreenA },
   
    { text: 'Pizza Hut', image: 'https://graffica.info/wp-content/uploads/2017/07/Pizza_Hut_Logo_3.png', screen: ScreenB },
    { text: "Chesters Chiken", image: 'https://static.wikia.nocookie.net/logopedia/images/0/02/Chesters-0.png/revision/latest?cb=20200304191304', screen: ScreenC },
    { text: 'Papa Johns', image: 'https://scontent.ftgu3-3.fna.fbcdn.net/v/t39.30808-6/309639873_2055961541266124_6515876166726249677_n.jpg?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=U7tRfKx1PUYAX-4Kqxp&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfD8HLF9Fw1p5u5yPkQRDbJO1h_TbfbUlCyXtc04sLa4bw&oe=649FEFB4', screen: ScreenD },
    { text: 'Expresso Americano', image: 'https://media.giphy.com/avatars/espressoamericano/OvcvgcC9TVlp.jpg', screen: ScreenE },
    { text: "Paradise Burger", image: 'https://scontent.ftgu3-4.fna.fbcdn.net/v/t39.30808-6/301142856_452426046902766_6302578564774581807_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iog7n5WRpe4AX9PnFJx&_nc_ht=scontent.ftgu3-4.fna&oh=00_AfCVQ1I2E73-ccXkujXZOSRJ0BP6qWFiIuduZKrwrPVbZw&oe=64A09B5F', screen: ScreenF },
    { text: "Hot Wings", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/346629593_1960075220994004_5975068841861283462_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZT_-H3QrFKkAX8W2kR6&_nc_ht=scontent.fsap8-1.fna&oh=00_AfB4h7TtayyqLxRW1tCueTQUqeFti0tbvruUm3aKDk6yUg&oe=649EBDAE', screen: ScreenG },
    { text: "Sushi Totemo", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/343310766_2183144078740427_3441642581191720748_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KGx1dnjGAR0AX-3DsBX&_nc_ht=scontent.fsap8-1.fna&oh=00_AfBDqOOa_SgCBqGal6lYmzl2WgG1hr03IIhHmPyGzwTPsw&oe=649EE165', screen: ScreenH },
    { text: "Restaurante Mario Chávez", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/323553590_1140424086657650_1481250813580760994_n.jpg?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-FGGdSpCcLoAX-iM634&_nc_ht=scontent.fsap8-1.fna&oh=00_AfBg14AnXVlbICXzhWK46wXJJ7MzPwiZdCxVGHWJXK6IIA&oe=649F07DB', screen: ScreenI },
    { text: "El Gaucho", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/323695677_444934067711668_6237152711758612986_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KUhX5jVr6HcAX_SIQjY&_nc_ht=scontent.fsap8-1.fna&oh=00_AfBV1m6ut0siH1NgvTya3nTR-y50KYTyczJZXbgRLoNxwg&oe=649F1E55', screen: ScreenJ },
    { text: "Coco Baleadas", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t1.6435-9/42716286_2144075459244554_1165425262507065344_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_ohc=pyq1nYYASiYAX_eVu3E&_nc_ht=scontent.fsap8-1.fna&oh=00_AfC-Mwl6QNbnpKY_gHuAFGZr0Zpkq_zXw2Ff78aAOYsZmA&oe=64C16D0F', screen: ScreenK },
    { text: "Moyas Grill", image: 'https://scontent.ftgu3-3.fna.fbcdn.net/v/t39.30808-6/326250757_681003343722419_3032547084751507322_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c8P7dYLzPJQAX8L39Eq&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfBHlXdtqL6tswL1C5ZtpGsuUdcsdpkHmnrE2JAKJhbyow&oe=649F02C1', screen: ScreenL },
    { text: "Asados El Gordo", image: 'https://scontent.ftgu3-4.fna.fbcdn.net/v/t39.30808-6/305105310_493556006114989_8534309958381839711_n.jpg?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=coHOQs5QdoIAX8LixWX&_nc_ht=scontent.ftgu3-4.fna&oh=00_AfBUY4Nc7lWJM8VuzpG_COlREAiSNhwT7OEF2Ddn1d6fyA&oe=649FA7D0', screen: ScreenM},
    { text: "El Torito", image: 'https://scontent.ftgu3-4.fna.fbcdn.net/v/t39.30808-6/305620187_609265687569160_2100453553839024644_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tn801JTWHtkAX_PmN_h&_nc_ht=scontent.ftgu3-4.fna&oh=00_AfBbd42RfpDzcPFeFlZ6fxUdds_cuRVDIjGy9u5vjmLROQ&oe=64A02F64', screen: ScreenN},
    { text: "800 Grados", image: 'https://scontent.ftgu3-3.fna.fbcdn.net/v/t39.30808-6/323773866_535253195336933_2214384425370066927_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=w57-9c9Do8QAX9URWun&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfCXyxqqAlSafBFo7Cmb_bHXmjPwl0SriuvvcgbOLkhU7g&oe=649F9562', screen: ScreenÑ},
    { text: "El Rincón del Toro", image: 'https://scontent.ftgu3-3.fna.fbcdn.net/v/t39.30808-6/318711036_528672305941630_92058210381710933_n.jpg?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HwjfIwkamv0AX-CHgHY&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfBlPxyW7gJpssbYb8MGBdUvKLV9a-sw1m-0bJ16wYYnng&oe=649F3183', screen: ScreenO},
    { text: "Jam's", image: 'https://scontent.ftgu3-3.fna.fbcdn.net/v/t39.30808-6/315252857_147347051369941_6230054939530427174_n.jpg?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=YrAeZO71MmMAX_SlJsk&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfCIfSCbB_xPi7gGE1Px35utIZL0rLrVcr150FREwBcmHg&oe=649F337E', screen: ScreenP},
    { text: "Pizzería Nápoles", image: 'https://scontent.ftgu3-3.fna.fbcdn.net/v/t39.30808-6/327028496_702125618286866_8807573907191352898_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Sd4iThVy3LwAX9r-1yy&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfDCwzj5wZ2hYHxf2Gn97I_6iZ4HxgH01erzZYfNUakyOA&oe=64A0AE25', screen: ScreenQ},
    { text: "Mega Pizza", image: 'https://scontent.ftgu3-3.fna.fbcdn.net/v/t39.30808-6/271747154_1289385321487391_4302338733097803900_n.png?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_hTHfJCYHYQAX_MET0s&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfCAybD85VhvQWdJ-GagLG5jb38rjSjPl7bR2oK3CZQBJw&oe=64A08624', screen: ScreenR},
    { text: "Pizza Picolino", image: 'https://scontent.ftgu3-3.fna.fbcdn.net/v/t39.30808-6/279743863_1027434387867292_6859084035090998512_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wXSP5rv6kEIAX8dh0iM&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfABcBqVFpNTA4BCP9PEM9bKEEr_-RKkB5ju8_mAH4NGxQ&oe=649F9A0E', screen: ScreenS},
    { text: "Ovi & Ser", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/323867740_6623661224317291_9202089584719900258_n.jpg?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XfQNz9xc_7UAX9ZXE9v&_nc_oc=AQlN_m1bdg4sYGCZ13nFbYiAIpriQ6_CelWPfswmYj-f8cwtqmUXvnMGhqQlHQJW3ug&_nc_ht=scontent.fsap8-1.fna&oh=00_AfC06cD4y05SI_Ho4LKJQA3bghZugniWOBI_IYU9nVEl4w&oe=649F3D08', screen: ScreenT},
    { text: "Pollolandia", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/347446343_772421607766649_795804025841303832_n.jpg?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=odEBZQIWXLEAX__m-vR&_nc_ht=scontent.fsap8-1.fna&oh=00_AfD3jqI4stOrLVdhU92OO2FnoGauH65VPz8MCPYee-pAVA&oe=649FA659', screen: ScreenU},
    { text: "Pollos La Cesta", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-1/345920514_539994888349310_7491954719497548359_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=c6021c&_nc_ohc=tAK5_2fr8UwAX_6_D7-&_nc_ht=scontent.fsap8-1.fna&oh=00_AfDfTqxB_1wt5xxaWAUgSxj8jDI_dO7Ag744iDPl46Gf0w&oe=64A0C002', screen: ScreenV},
    { text: "Pollo Campesino", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/327107488_3415127425397936_587678943379260759_n.jpg?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=x_JDECsKWOsAX8a4rWL&_nc_ht=scontent.fsap8-1.fna&oh=00_AfBKUWk3Jxyzm6BBzQaTBJc2X2sF8RxZQzSD58dLdwzygQ&oe=64A189EB', screen: ScreenW},
    { text: "Bigos", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/324188755_949078036090103_6975206024296977072_n.jpg?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GLoa1DsDUioAX_n6TVi&_nc_ht=scontent.fsap8-1.fna&oh=00_AfDLqcIryCSSehuP8ujI6ONHgK2vlw1L5rPIFefvFqz9jw&oe=64A19662', screen: ScreenX},
    { text: "KAM FU", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/271735932_275448434652028_1332807540249237618_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE21F6Espw2nNrHrj2vFoK3_rfus7073XH-t-6zvTvdcZsTRIifBXIjMscQ6MffQFvlY63335aO_VLqqu0nPLzC&_nc_ohc=oHtoP3CoEgkAX9-M6fz&_nc_ht=scontent.fsap8-1.fna&oh=00_AfB5GjivU2qnnrQCL3VQiQLLnBghGaqWT5G2p9VTphhwNA&oe=64A73774', screen: ScreenY},
    { text: "Min Oriental", image: 'https://allrest-ams3-space-cdn-06-2023.ams3.digitaloceanspaces.com/adverts/restaurant/min-oriental/min-oriental.jpg', screen: ScreenZ},
    { text: "Servitipicos Alameda Honduras", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/348992973_773007401279215_4735694757935288340_n.jpg?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEVhJqnXid2sje4IGp-1LOwnD9R-kiO2VmcP1H6SI7ZWZ37YHLVaF8YZdc12FW0dzH8g0CnV5WsgrSt16crDRks&_nc_ohc=2vHjQAYf6QIAX_faNo-&_nc_ht=scontent.fsap8-1.fna&oh=00_AfDWmxRKO5HmDvW5iCjlXngF5WmxXt5BIlG6ggVvS402KQ&oe=64A8693A', screen: ScreenAA},
    { text: "Sport Jali", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/286781801_2242366029245456_906977375012473814_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHQy6bX3s2XeVaP6jxyA9BkXIb4ZiXsBXFchvhmJewFcSXbbYuF42i66UE4FoQsrUs3_uuoPTCkc6_1VP8-4Hhi&_nc_ohc=9-sKEANLu_UAX_ukjbx&_nc_ht=scontent.fsap8-1.fna&oh=00_AfDdrdVllfD5FxzMdXTTe0k5PKI9HEhbb9XxlWaAPm4_ZA&oe=64A73727', screen: ScreenAB},
    { text: "Baleadas Yuli", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/305028972_472829328189425_5933724912231027169_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeES0yGPfsnkJE9gKj0gcumBiWT4p_uSBrWJZPin-5IGtfHGaCKFV9zmTXPC1w6HCiLPJ5W2HVk0vSvndxMbNicv&_nc_ohc=u7If57OmjOgAX8OXn-0&_nc_ht=scontent.fsap8-1.fna&oh=00_AfDjq4uV70DReplx0Q-_A9u_rX9c9hYNf63hFGLaFElHKw&oe=64A82F31', screen: ScreenAC},
   
  
  
  
  ];

  const data2 = [
    { key: '1', value: 'Recomendados' },
    { key: '2', value: "Wendy's" },
    { key: '3', value: 'Pizza Hut' },
    { key: '4', value: 'Chesters Chiken' },
    { key: '5', value: 'Papa Johns' },
    { key: '6', value: 'Expresso Americano' },
    { key: '7', value: 'Paradise Burger' },
    { key: '8', value: 'Hot Wings' },
    { key: '9', value: 'Sushi Totemo' },
    { key: '10', value: 'Restaurante Mario Chávez' },
    { key: '11', value: 'El Gaucho' },
    { key: '12', value: 'Coco Baleadas' },
    { key: '13', value: 'Moyas Grill' },
    { key: '14', value: 'Asados El Gordo' },
    { key: '15', value: 'El Torito' },
    { key: '16', value: '800 Grados' },
    { key: '17', value: 'El Rincón del Toro' },
    { key: '18', value: 'Jams' },
    { key: '19', value: 'Pizzería Nápoles' },
    { key: '20', value: 'Mega Pizza' },
    { key: '21', value: 'Pizza Picolino' },
    { key: '22', value: 'Ovi & Ser' },
    { key: '23', value: 'Pollolandia' },
    { key: '24', value: 'Pollos La Cesta' },
    { key: '25', value: 'Pollo Campesino' },
    { key: '26', value: 'Bigos' },
    { key: '27', value: 'KAM FU' },
    { key: '28', value: 'Min Oriental' },
    { key: '29', value: 'Servitipicos Alameda Honduras' },
    { key: '30', value: 'Sport Jali' },
    { key: '31', value: 'Baleadas Yuli' },
    
  ];

  const ComponenteVisible = componenteVisible?.screenComponent || null;

  const filteredButtons = buttons.filter(
    (button) =>
      selectedOption === 'Recomendados' || button.text.includes(selectedOption)
  ); 

  
  

  return (
    <View style={styles.container}>
      {mostrarSelectList && (
        <View style={styles.container2}>
          <SelectList
            setSelected={(val) => setSelectedOption(val)}
            data={data2}
            save="value"
            placeholder="Recomendados"
            noDataText="Restaurante no disponible"
            searchPlaceholder="Busca tu restaurante"
            onInputChange={(text) => mostrarComponente(text, null)}
          />
        </View>
      )}

      {ComponenteVisible ? (
        <ComponenteVisible
          text={componenteVisible.text}
          mostrarBotonAnterior={mostrarBotonAnterior}
        />
      ) : (
        <ScrollView>
        <View style={styles.buttonsContainer}>
          {filteredButtons.map((button, index) => (
            <View
              key={index}
              style={filteredButtons.length === 1 ? styles.singleButtonWrapper : styles.buttonWrapper}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={() => mostrarComponente(button.text, button.screen)}
              >
                <View>
                  <Image source={{ uri: button.image }} style={styles.buttonImage} />
                  <Text style={styles.buttonText}>{button.text}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: '#ffff',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 8,
    width: '80%',
    marginLeft: '1%',
    marginTop: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 20,
    
    
    
  },
  buttonWrapper: {
    width: '45%',
    marginBottom: 20,
    overflow: 'hidden',
  },

  singleButtonWrapper: {
    width: '100%',
    alignItems: 'center',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    
    
  },
  buttonImage: {
    width: 150,
    height: 150,
    marginBottom: 8,
    alignSelf: 'center',
     borderRadius: 10,
  },
  buttonText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  componentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  backButton: {
    backgroundColor: '#E5E7E5',
    paddingHorizontal: 110,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 20,
  },
  backButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
});

export default RestaurantesDanli;
