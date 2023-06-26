import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Ionicons } from '@expo/vector-icons';
import PapaJohnstDanli from './RestaurantesDanli/PapaJohnsDanli';
import HotelMeLateBoutiqueDanli from './HotelesDanli/HotelMeLateBoutiqueDanli';
import HotelCasaEncatadaDanli from './HotelesDanli/HotelCasaEncantadaDanli';
import FamilyHotelDanli from './HotelesDanli/FamilyHotelDanli';
import HotelPosadaLosArcosDanli from './HotelesDanli/HotelPosadaLosArcosDanli';

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
    { text: "Hotel Me Late Boutique", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/348921036_766774968266866_8906466839262024938_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pQw99xLx_XMAX-dw_XG&_nc_ht=scontent.fsap8-1.fna&oh=00_AfDxpBK5PZvCCQ6Imq3Q0DocDaCzk8cVWLvRAKmFwlhTCw&oe=6498095F',  screen: ScreenA },
    { text: 'Hotel Casa Encantada', image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/299389713_463159265819149_7979066709760225222_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GcnSQYksXcYAX8niMqZ&_nc_ht=scontent.fsap8-1.fna&oh=00_AfA3g_A4nFGprzEoqb-JAANM6V5wCXYlKFvfjV2g8M47_w&oe=649930CE', screen: ScreenB },
    { text: "Family Hotel", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/255175560_1555391664809766_1326841528578620274_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Z4lh48vshv4AX8Tf4m5&_nc_ht=scontent.fsap8-1.fna&oh=00_AfBT-xCAUIWzSVRI_svSo4O1V5QhYOnBopcc2PsHKo0u0A&oe=6498639A', screen: ScreenC },
    { text: 'Hotel Posada "Los Arcos"', image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/273614094_461763148665328_8277138618712969499_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=i9ku2WgdZOAAX-xl4Yd&_nc_ht=scontent.fsap8-1.fna&oh=00_AfB1-lvNgvreeytVOW4BCrPljJF5cOz_29XJQUEXrahrbw&oe=64978C3D', screen: ScreenD },

  ];

  const data2 = [
    { key: '1', value: 'Recomendados' },
    { key: '2', value: "Hotel Me Late Boutique" },
    { key: '3', value: 'Hotel Casa Encantada' },
    { key: '4', value: 'Family Hotel' },
    { key: '5', value: 'Hotel Posada "Los Arcos"' },
    
    
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
            searchPlaceholder="Busca tu hotel"
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

export default HotelesDanli;
