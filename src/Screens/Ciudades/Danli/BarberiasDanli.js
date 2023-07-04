import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Ionicons } from '@expo/vector-icons';


import BarberiaGudosDanli from './BarberiasDanli/BarberiaGudosDanli';
import BarberiaMileniumDanli from './BarberiasDanli/BarberiaMileniumDanli';
import BarberiaLeody from './BarberiasDanli/BarberiaLeodyDanli';
import MateosBarberShop from  './BarberiasDanli/MateosBarberShopDanli';
import BarberiaTuImagenDanli from './BarberiasDanli/BarberiaTuImagenDanli';
import BarberiaErickGlamurDanli from './BarberiasDanli/BarberiaErickGlamurDanli';
import ShadaiMasterBarberShopDanli from './BarberiasDanli/ShadaiMasterBarberShopDanli';
import EvansBarberShopDanli from './BarberiasDanli/EvansBarberShopDanli';

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
      <BarberiaGudosDanli/>
   
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
      <BarberiaMileniumDanli/>
     
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
      <BarberiaLeody/>
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
      <MateosBarberShop/>
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
      <BarberiaTuImagenDanli/>
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
      <BarberiaErickGlamurDanli/>
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
      <ShadaiMasterBarberShopDanli/>
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
      <EvansBarberShopDanli/>
    </View>
  );
};



const BarberiasDanli = () => {
  const [componenteVisible, setComponenteVisible] = useState(null);
  const [mostrarSelectList, setMostrarSelectList] = useState(true); // Nuevo estado
  const [selectedOption, setSelectedOption] = useState('Recomendadas');

  const mostrarComponente = (text, screenComponent) => {
    setMostrarSelectList(false); // Ocultar SelectList
    setComponenteVisible({ text, screenComponent });
    setSelectedOption(text); // Actualizar la opción seleccionada
  };

  const mostrarBotonAnterior = () => {
     setMostrarSelectList(true); // Mostrar SelectList nuevamente
  setComponenteVisible(null);
  setSelectedOption("Recomendadas");
  };

  const buttons = [
    { text: "Gudo's Barber Shop", image: 'https://scontent.ftgu2-3.fna.fbcdn.net/v/t1.6435-9/84417156_404104600506266_3678776354938574901_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2qdJe0Y-0cQAX9HfEna&_nc_ht=scontent.ftgu2-3.fna&oh=00_AfBIy1Q0u3k73sXcmZ4chG-J5Sx5jVUut8_UWtpjG0e5jg&oe=64BD6190',  screen: ScreenA },
    { text: 'Barberia Millenium', image: 'https://scontent.ftgu2-2.fna.fbcdn.net/v/t39.30808-6/245220410_625456092171502_3658673365075829292_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5iG4J1fxuG0AX8HLcfZ&_nc_ht=scontent.ftgu2-2.fna&oh=00_AfCxr_Z_PrbMNy2rceZYEEuuPBa-SIUZ7pdPGYkbpGzoIQ&oe=649B9AA4', screen: ScreenB },
    { text: 'Barberia Leody', image: 'https://i.imgur.com/h2bmzh4.jpg', screen: ScreenC },
    { text: 'Mateos Barber Shop', image: 'https://i.imgur.com/h2bmzh4.jpg', screen: ScreenD },
    { text: 'Barberia Tu Imagen', image: 'https://i.imgur.com/h2bmzh4.jpg', screen: ScreenE },
    { text: 'Barberia Erick Glamur', image: 'https://i.imgur.com/h2bmzh4.jpg', screen: ScreenF },
    { text: 'Shadai Master BarberShop', image: 'https://i.imgur.com/h2bmzh4.jpg', screen: ScreenG },
    { text: 'Evan’s Barber Shop', image: 'https://i.imgur.com/h2bmzh4.jpg', screen: ScreenH },
  
  ];

  const data2 = [
    { key: '1', value: 'Recomendadas' },
    { key: '2', value: "Gudo's Barber Shop" },
    { key: '3', value: 'Barberia Millenium' },
    { key: '4', value: 'Barberia Leody' },
    { key: '5', value: 'Mateos Barber Shop' },
    { key: '6', value: 'Barberia Erick Glamur' },
    { key: '7', value: 'Shadai Master BarberShop' },
    { key: '8', value: 'Evan’s Barber Shop' },
  ];

  const ComponenteVisible = componenteVisible?.screenComponent || null;

  const filteredButtons = buttons.filter(
    (button) =>
      selectedOption === 'Recomendadas' || button.text.includes(selectedOption)
  ); 

  
  

  return (
    <View style={styles.container}>
      {mostrarSelectList && (
        <View style={styles.container2}>
          <SelectList
            setSelected={(val) => setSelectedOption(val)}
            data={data2}
            save="value"
            placeholder="Recomendadas"
            noDataText="Gasolinera no disponible"
            searchPlaceholder="Busca tu barberia"
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

export default BarberiasDanli;
