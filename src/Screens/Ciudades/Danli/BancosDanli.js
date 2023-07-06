import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Ionicons } from '@expo/vector-icons';
import AtlantidaDanli from './BancosDanli/AtlantidaDanli';
import FicohsaDanli from './BancosDanli/FicohsaDanli';
import BANTRABDanli from './BancosDanli/BANTRABDanli';
import BancoOccidenteDanli from './BancosDanli/BancoOccidenteDanli';
import BancoProamericaDanli from './BancosDanli/BancoProamericaDanli';
import BanPaisDanli from './BancosDanli/BanPaisDanli';
import BACDanli from './BancosDanli/BACDanli';
import Davivienda from './BancosDanli/Davivienda';
import Banrural from './BancosDanli/Banrural';
import Bancopopular from './BancosDanli/Bancopopular';




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
      <AtlantidaDanli/>
   
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
      <FicohsaDanli/>
     
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
      <BancoOccidenteDanli/>
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
      <BancoProamericaDanli/>
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
     <BanPaisDanli/>
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
      <BANTRABDanli/>
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
      <BACDanli/>
    </View>
  );
};
const Screenh = ({ text, mostrarBotonAnterior }) => {
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
      <Davivienda/>
    </View>
  );
};
const Screeni = ({ text, mostrarBotonAnterior }) => {
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
      <Banrural/>
    </View>
  );
};
const Screenj = ({ text, mostrarBotonAnterior }) => {
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
      <Bancopopular/>
    </View>
  );
};
const MyScreen = () => {
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
    { text: 'Banco Atlantida', image: 'https://i.imgur.com/EXSSlAC.jpg',  screen: ScreenA },
   
    { text: 'Banco Ficohsa', image: 'https://i.imgur.com/MZ5vWuQ.png', screen: ScreenB },
    { text: 'Banco Occidente', image: 'https://i.imgur.com/hCvDavs.jpg', screen: ScreenC },
    { text: 'Banco Promerica', image: 'https://play-lh.googleusercontent.com/XN1DevVYDHl1jdi3kn6nfz9u-eJXzN0j3ZCJmgEjSryuNxBn_4KpKE7EpVnwauEX6Vk', screen: ScreenD },
    { text: 'BANPAIS', image: 'https://i.imgur.com/351oecS.png', screen: ScreenE },
    { text: 'Banco De Los Trabajadores', image: 'https://play-lh.googleusercontent.com/sqpvV9AEkQ0gMMFGmtZpOP8xpTV8iWcopMdo0QujP6tm59AP_3CRFMpFojMLIt_je4Q', screen: ScreenF },
    { text: 'BAC', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeU4IPpu2dzGKQeWwsn-d1MnLcm_Zon1DMptUP_g67pfmhtZYl3QGu2Fe2WVSo7hQ-S9E&usqp=CAU', screen: ScreenG },
    { text: 'Davivienda', image: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/122017/untitled-1_46.png?QGYPpQzyBDJWZcxniQEKeXifDHt1F0Ty&itok=nXXCyRfy', screen: Screenh },
    { text: 'Banrural', image: 'https://scontent.ftgu2-2.fna.fbcdn.net/v/t1.18169-9/10403147_803320833037829_8379118936803293338_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9267fe&_nc_ohc=8BhY5eVI2L8AX8-iXW4&_nc_ht=scontent.ftgu2-2.fna&oh=00_AfBxDfE8yREZvV-x1I8txcAPirDwD-iMeGBKXEY0moG_oQ&oe=64CBC060', screen: Screeni },
    { text: 'Bancopopular', image: 'https://bancopopular.hn/wp-content/uploads/2018/08/logo.png', screen: Screenj },
  
  
  ];

  const data2 = [
    { key: '1', value: 'Recomendados' },
    { key: '2', value: 'Banco Atlantida' },
    { key: '3', value: 'Banco Ficohsa' },
    { key: '4', value: 'Banco Occidente' },
    { key: '5', value: 'Banco Promerica' },
    { key: '6', value: 'BANPAIS' },
    { key: '7', value: 'Banco De Los Trabajadores' },
    { key: '8', value: 'Bancopopular' },
    { key: '9', value: 'BAC' },
    { key: '10', value: 'Davivienda' },
    { key: '11', value: 'Banrural' },
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
            noDataText="Banco no disponible"
            searchPlaceholder="Busca tu banco"
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

export default MyScreen;
