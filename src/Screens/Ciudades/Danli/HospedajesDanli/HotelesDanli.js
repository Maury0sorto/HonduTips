import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import HotelMeLateBoutiqueDanli from './HotelesDanli/HotelMeLateBoutiqueDanli';
import HotelCasaEncatadaDanli from './HotelesDanli/HotelCasaEncantadaDanli';
import FamilyHotelDanli from './HotelesDanli/FamilyHotelDanli';
import HotelPosadaLosArcosDanli from './HotelesDanli/HotelPosadaLosArcosDanli';
import HotelLaEsperanzaDanli from './HotelesDanli/HotelLaEsperanzaDanli';
import HotelApoloDanli from './HotelesDanli/HotelApoloDanli';
import HotelGranadaDanli from './HotelesDanli/HotelGranadaDanli';
import HotelClementinaDanli from './HotelesDanli/HotelClementinaDanli';
import HotelLaGuadalupeDanli from './HotelesDanli/HotelGuadalupeDanli';
import HotelVillaParaisoDanli from './HotelesDanli/HotelVillaParaisoDanli';
import HoltelKairos from './HotelesDanli/HotelKairosDanli';

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
      <HotelMeLateBoutiqueDanli/>
   
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
      <HotelCasaEncatadaDanli/>
     
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
      <FamilyHotelDanli/>
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
      <HotelPosadaLosArcosDanli/>
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
      <HotelLaEsperanzaDanli/>
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
      <HotelApoloDanli/>
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
      <HotelGranadaDanli/>
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
      <HotelClementinaDanli/>
    </View>
  );
};

const ScreenI = ({ text, mostrarBotonAnterior }) => {
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
      <HotelLaGuadalupeDanli/>
    </View>
  );
};


const ScreenJ = ({ text, mostrarBotonAnterior }) => {
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
      <HotelVillaParaisoDanli/>
    </View>
  );
};



const ScreenK = ({ text, mostrarBotonAnterior }) => {
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
      <HoltelKairos/>
    </View>
  );
};


const HotelesDanli = () => {
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
    { text: 'Hotel Granada', image: 'https://i.imgur.com/Mc9aTIy.jpg', screen: ScreenG },
    { text: 'Hotel Clementina', image: 'https://i.imgur.com/lcYrbPb.jpg', screen: ScreenH },
    { text: "Hotel Me Late Boutique", image: 'https://i.imgur.com/9HptOUw.jpg',  screen: ScreenA },
    { text: 'Hotel Casa Encantada', image: 'https://i.imgur.com/sYu84sU.jpg', screen: ScreenB },
    { text: 'Hotel Posada "Los Arcos"', image: 'https://i.imgur.com/LKC1e6A.jpg', screen: ScreenD },
    { text: "Family Hotel", image: 'https://i.imgur.com/DPSvwix.png', screen: ScreenC },
    { text: 'Hotel La Esperanza', image: 'https://i.imgur.com/8BT7RHT.png', screen: ScreenE },
    { text: 'Hotel Apolo', image: 'https://i.imgur.com/iafHP3j.png', screen: ScreenF },
    { text: 'Hotel La Guadalupe', image: 'https://i.imgur.com/X9hX6Ik.png', screen: ScreenI },
    { text: 'Hotel Villa Paraiso', image: 'https://i.imgur.com/NyECKWB.png', screen: ScreenJ },
    { text: 'Hotel Kairos', image: 'https://i.imgur.com/rEFwTM7.png', screen: ScreenK },


  ];

  const data2 = [
    { key: '1', value: 'Recomendados' },
    { key: '2', value: "Hotel Me Late Boutique" },
    { key: '3', value: 'Hotel Casa Encantada' },
    { key: '4', value: 'Family Hotel' },
    { key: '5', value: 'Hotel Posada "Los Arcos"' },
    { key: '6', value: 'Hotel La Esperanza' },
    { key: '7', value: 'Hotel Apolo' },
    { key: '8', value: 'Hotel Granada' },
    { key: '9', value: 'Hotel Clementina' },
    { key: '10', value: 'Hotel Guadalupe' },
    { key: '11', value: 'Hotel Villa Paraiso' },
    { key: '12', value: 'Hotel Kairos' },
   

  ];

  const ComponenteVisible = componenteVisible?.screenComponent || null;

  const filteredButtons = buttons.filter(
    (button) =>
      selectedOption === 'Recomendados' || button.text.includes(selectedOption)
  ); 

  
  
  const navigation = useNavigation();
  const handleImagePress = () => {
    // Aquí puedes agregar la lógica que desees ejecutar cuando se presione la imagen
    navigation.navigate('Registra tu Empresa');
  };


  return (
    <View style={styles.container}>
      {mostrarSelectList && (
      <View style={styles.container2}>
      <TouchableOpacity onPress={handleImagePress}>
     <Image
       source={{ uri: 'https://i.imgur.com/7YTTkEO.png' }} // Reemplaza con la URL de tu imagen
       style={styles.image}
     />
   </TouchableOpacity>
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
    backgroundColor: 'transparent',
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

  image: {
    width: 362,
    height: 76,
   marginLeft: -35, // Alinea la imagen a la izquierda dentro del contenedor
    // Otros estilos que desees aplicar a la imagen
  },
});

export default HotelesDanli;
