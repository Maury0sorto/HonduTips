import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import JirehDanli from './carwashJireh';
import BarPinDanli from './BarPinDanli';
import EvoAutoSpaDanli from './EvoAutoSpaDanli';
import AutoPitRomeroDanli from './AutoPitRomeroDanli';
import AutoEstiloDanli from './AutoEstiloDanli'

import TallerAlvaradoDanli from '../Talleres/TallerAlvaradoDanli';
import TallerMerloDanli from '../Talleres/TallerMerloDanli';
import TallerWilliamsDanli from '../Talleres/TallerWilliamsDanli';
import TallerElRey from '../Talleres/TallerElReyDanli';

 


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
    <TallerAlvaradoDanli/>
   
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
    <TallerMerloDanli/>
   
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
    <TallerWilliamsDanli/>
   
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
    <TallerElRey/>
   
  </View>
  );
};





const TalleresDanli = () => {
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
    { text: "Taller Mecanico Alvarado", image: 'https://i.imgur.com/fv4KinK.jpg',  screen: ScreenA },
    { text: "Taller Mecanico Merlo", image: 'https://i.imgur.com/X7NqEDM.png',  screen: ScreenB },
    { text: "Taller Mecanico Williams", image: 'https://i.imgur.com/GhMQbWn.png',  screen: ScreenC },
    { text: "Taller Auto Eléctrico El Rey", image: 'https://i.imgur.com/Mp9lNHN.jpg',  screen: ScreenD },
    
  ];

  const data2 = [
    { key: '1', value: 'Recomendados' },
    { key: '2', value: "Taller Mecanico Alvarado" },
    { key: '3', value: "Taller Mecanico Merlo" },
    { key: '4', value: "Taller Mecanico Williams" },
    { key: '5', value: "Taller Auto Eléctrico El Rey" },
   
    
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

export default TalleresDanli;
