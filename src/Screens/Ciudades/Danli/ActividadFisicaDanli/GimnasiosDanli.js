import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import ACFitnesDanli from  './GimnasiosDanli/ACFitnessDanli';
import MuscleTempleGYMDanli from './GimnasiosDanli/MuscleTempleGYMDanli';
import RoyalGYMDanli from './GimnasiosDanli/RoyalGYMDanli';
import GymOlimpoDanli from './GimnasiosDanli/GymOlimpoDanli';
import BetterGymDanli from './GimnasiosDanli/BetterGymDanli';

const ScreenA = ({ text, mostrarBotonAnterior }) => {
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
    <ACFitnesDanli/>
   
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
      <RoyalGYMDanli/>
     
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
      <MuscleTempleGYMDanli/>
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
      <GymOlimpoDanli/>
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
      <BetterGymDanli/>
    </View>
  );
};





const GimnasiosDanli = () => {
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
    { text: "AC Fitnes", image: 'https://i.imgur.com/qeqZlb6.png',  screen: ScreenA },
    { text: 'Royal GYM', image: 'https://i.imgur.com/XV4Juf5.jpg', screen: ScreenB },
    { text: "Muscle Temple Gym", image: 'https://i.imgur.com/uaPaHyW.jpg', screen: ScreenC },
    { text: "GYM Olimpo", image: 'https://i.imgur.com/BOpQh4h.png', screen: ScreenD },
    { text: "Better Body GYM", image: 'https://i.imgur.com/peJ2Mvm.png', screen: ScreenE },
   
  ];

  const data2 = [
    { key: '1', value: 'Recomendados' },
    { key: '2', value: "AC Fitnes" },
    { key: '3', value: 'Royal GYM' },
    { key: '4', value: 'Muscle Temple Gym' },
    { key: '5', value: 'GYM Olimpo' },
    { key: '6', value: 'Better Body GYM' },
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
 // Estilo para el contenedor principal
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},

// Estilo para el segundo contenedor
container2: {
  backgroundColor: 'transparent',
  borderRadius: 20,
  paddingHorizontal: 8,
  paddingVertical: 8,
  width: '80%',
  marginLeft: '1%',
  marginTop: 20,
},

// Estilo para el contenedor de los botones
buttonsContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginLeft: '5%',
  marginRight: '5%',
  marginTop: 20,
},

// Estilo para el contenedor de un botón individual (45% de ancho)
buttonWrapper: {
  width: '45%',
  marginBottom: 20,
  overflow: 'hidden',
},

// Estilo para el contenedor de un solo botón (100% de ancho)
singleButtonWrapper: {
  width: '100%',
  alignItems: 'center',
},

// Estilo para el botón
button: {
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
},

// Estilo para la imagen del botón
buttonImage: {
  width: 150,
  height: 150,
  marginBottom: 8,
  alignSelf: 'center',
  borderRadius: 10,
},

// Estilo para el texto del botón
buttonText: {
  marginTop: 10,
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},

// Estilo para el contenedor de componente
componentContainer: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},

// Estilo para el botón de retroceso (back)
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

// Estilo para el texto del botón de retroceso
backButtonText: {
  color: '#000',
  fontSize: 16,
  fontWeight: 'bold',
},

// Estilo para la imagen
image: {
  width: 362,
  height: 76,
  marginLeft: -35, // Alinea la imagen a la izquierda dentro del contenedor
  // Otros estilos que desees aplicar a la imagen
},

});

export default GimnasiosDanli;
