import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Ionicons } from '@expo/vector-icons';

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
import PaseoPupuseriaDanli from './RestaurantesDanli/PaseoPupuseriaDanli';
import MiguelDanli from './AlimentosBebidasDanli/Bares/MiguelCubanoDanli';
import GordoMexicanoDanli from './RestaurantesDanli/GordoMexicanoDanli';
import ChilangosDanli from './RestaurantesDanli/ChilangosDanli';
import AsadosPolenchoDanli from './RestaurantesDanli/AsadosPolencho';

const ScreenA = ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#FFFF"
        onPress={mostrarBotonAnterior}
      >
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
       
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
        <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
      </TouchableHighlight>
      <MiguelDanli/>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
      </TouchableHighlight>
      <BaleadasYuliDanli/>
    </View>
  );
};
const ScreenAF= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
      </TouchableHighlight>
      <PaseoPupuseriaDanli/>
    </View>
  );
};
const ScreenAG= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
      </TouchableHighlight>
      <GordoMexicanoDanli/>
    </View>
  );
};
const ScreenAH= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
      </TouchableHighlight>
      <ChilangosDanli/>
    </View>
  );
};
const ScreenAI= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
      </TouchableHighlight>
      <AsadosPolenchoDanli/>
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
    { text: "Wendy's", image: 'https://i.imgur.com/ibuMzCK.png',  screen: ScreenA },
   
    { text: 'Pizza Hut', image: 'https://i.imgur.com/2Ncnxt6.png', screen: ScreenB },
    { text: "Chesters Chiken", image: 'https://i.imgur.com/60pifRi.jpg', screen: ScreenC },
    { text: 'Papa Johns', image: 'https://i.imgur.com/7JddAuC.jpg', screen: ScreenD },
    { text: "Bar & Taqueria Miguel Cubano", image: 'https://i.imgur.com/X4HjSqn.jpg',  screen: ScreenE },
    { text: "Paradise Burger", image: 'https://i.imgur.com/tjoOVf2.jpg', screen: ScreenF },
    { text: "Hot Wings", image: 'https://i.imgur.com/5g2ZlkU.jpg', screen: ScreenG },
    { text: "Sushi Totemo", image: 'https://i.imgur.com/9qIWZC5.jpg', screen: ScreenH },
    { text: "Mario Chávez", image: 'https://i.imgur.com/B9vkqJ7.jpg', screen: ScreenI },
    { text: "El Gaucho", image: 'https://i.imgur.com/MxcsjWk.jpg', screen: ScreenJ },
    { text: "Coco Baleadas", image: 'https://i.imgur.com/DCSWd2G.jpg', screen: ScreenK },
    { text: "Moyas Grill", image: 'https://i.imgur.com/vFXRIJi.jpg', screen: ScreenL },
    { text: "Asados El Gordo", image: 'https://i.imgur.com/otSVNbw.jpg', screen: ScreenM},
    
    
    { text: "El Torito", image: 'https://i.imgur.com/pO9EuoL.jpg', screen: ScreenN},
    { text: "800 Grados", image: 'https://i.imgur.com/fVYze9x.jpg', screen: ScreenÑ},
    { text: "El Rincón del Toro", image: 'https://i.imgur.com/EJzlkR8.jpg', screen: ScreenO},
    { text: "Jam's", image: 'https://i.imgur.com/wDmLNpc.jpg', screen: ScreenP},
    { text: "Pizzería Nápoles", image: 'https://i.imgur.com/UZgSq2H.jpg', screen: ScreenQ},
    { text: "Mega Pizza", image: 'https://i.imgur.com/MVxruzC.jpg', screen: ScreenR},
    { text: "Pizza Picolino", image: 'https://i.imgur.com/An4hOXV.jpg', screen: ScreenS},
    { text: "Ovi & Ser", image: 'https://i.imgur.com/4EpURvs.jpg', screen: ScreenT},
    { text: "Pollolandia", image: 'https://i.imgur.com/1JFLveF.jpg', screen: ScreenU},
    { text: "Pollos La Cesta", image: 'https://i.imgur.com/lKU0Dbq.jpg', screen: ScreenV},
    
    
    { text: "Pollo Campesino", image: 'https://i.imgur.com/D8zM59p.jpg', screen: ScreenW},
    { text: "Bigos", image: 'https://i.imgur.com/Y5XSBc1.jpg', screen: ScreenX},
    { text: "KAM FU", image: 'https://i.imgur.com/Mce0uhR.jpg', screen: ScreenY},
    { text: "Min Oriental", image: 'https://i.imgur.com/9d7ThcU.jpg', screen: ScreenZ},
    { text: "Servitipicos Alameda", image: 'https://i.imgur.com/aDbMNWE.jpg', screen: ScreenAA},
    { text: "Sport Jali", image: 'https://i.imgur.com/BBV6ynZ.jpg', screen: ScreenAB},
    { text: "Baleadas Yuli", image: 'https://i.imgur.com/AVc27Xo.jpg', screen: ScreenAC},
    { text: "Paseo Pupuseria", image: 'https://i.imgur.com/164Tmgq.png', screen: ScreenAF},
    { text: "El Gordo Mexican Food", image: 'https://i.imgur.com/jv52iF2.jpg', screen: ScreenAG},
    { text: "Taqueria Chilango’s", image: 'https://i.imgur.com/L1f7IxU.jpg', screen: ScreenAH},
    { text: "Asados Polencho", image: 'https://i.imgur.com/L1f7IxU.jpg', screen: ScreenAI},
   
  
  
  
  ];

  const data2 = [
    { key: '1', value: 'Recomendados' },
    { key: '2', value: "Wendy's" },
    { key: '3', value: 'Pizza Hut' },
    { key: '4', value: 'Chesters Chiken' },
    { key: '5', value: 'Papa Johns' },
    { key: '6', value: 'Bar & Taqueria Miguel Cubano' },
    { key: '7', value: 'Paradise Burger' },
    { key: '8', value: 'Hot Wings' },
    { key: '9', value: 'Sushi Totemo' },
    { key: '10', value: 'Mario Chávez' },
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
    { key: '29', value: 'Servitipicos Alameda' },
    { key: '30', value: 'Sport Jali' },
    { key: '31', value: 'Baleadas Yuli' },
    { key: '32', value: 'El Gordo Mexican Food' },
    { key: '33', value: 'Paseo Pupuseria' },
    { key: '34', value: 'Taqueria Chilango’s' },
    { key: '35', value: 'Asados Polencho' },
    
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

    flexDirection: 'row',
    alignItems: 'center',
    
  },
  backButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
});

export default RestaurantesDanli;
