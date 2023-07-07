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
import Bancolafise from './BancosDanli/Bancolafise';




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
const Screenk = ({ text, mostrarBotonAnterior }) => {
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
      <Bancolafise/>
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
    { text: 'Banco Lafise', image: 'data:image/jpeg;base64,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', screen: Screenk },
  
  
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
    { key: '12', value: 'Banco Lafise' },
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
