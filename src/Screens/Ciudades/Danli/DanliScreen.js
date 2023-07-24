import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Linking } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { HeaderBackButton } from '@react-navigation/stack';

const DanlíScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerBackVisible: true,
    });
  }, []);
  const [data, setData] = useState([
    { text: 'Banca', image: 'https://i.imgur.com/Bffp4OT.png' },
    { text: 'FESTIMA', image: 'https://i.imgur.com/OxmmOCF.png' },
    { text: 'Alimentos y Bebidas', image: 'https://i.imgur.com/fo5oW3d.png' },
    { text: 'Hospedaje', image: 'https://i.imgur.com/SN0hO9s.png' },
    { text: 'Salud', image: 'https://i.imgur.com/MhIuylY.png' },
    { text: 'Gasolineras', image: 'https://i.imgur.com/meCBdUt.png' },
    { text: 'Belleza', image: 'https://i.imgur.com/VE8iMQw.png' },
    { text: 'Deporte', image: 'https://i.imgur.com/YFd8er3.png' },
    { text: 'Automotriz', image: 'https://i.imgur.com/Ld3u2NI.png' },
    { text: 'Plazas Comerciales', image: 'https://i.imgur.com/GycKe4i.png' },
    { text: 'Transporte', image: 'https://i.imgur.com/2sgBrWV.png' },
    { text: 'Educación', image: 'https://i.imgur.com/jPVcqaS.png' },
    { text: 'Servicios Publicos', image: 'https://i.imgur.com/KJxzlEd.png' },
    { text: 'Empresas de Seguridad', image: 'https://i.imgur.com/4SNjwIg.png' },
    { text: 'Medios de Comunicación', image: 'https://i.imgur.com/Pgw3x9I.png' },
    { text: 'TV por Cable', image: 'https://i.imgur.com/76LovHy.png' },
  ]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setFilterData(data);
  }, [data]);

  const filterSearch = () => {
    if (searchText.length === 0) {
      setFilterData(data);
    } else {
      const filteredData = data.filter((button) =>
        button.text.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilterData(filteredData);
    }
  };

  const handleButtonPress = (text) => {
    // Configura la navegación a las pantallas correspondientes según el texto del botón
    if (text === 'Banca') {
      navigation.navigate('Banca Danlí');
    } else if (text === 'Alimentos y Bebidas') {
      navigation.navigate('Alimetos y Bebidas Danlí');
    } else if (text === 'Hospedaje') {
      navigation.navigate('Hospedajes Danlí'); 
    } else if (text === 'Salud') {
      navigation.navigate('Salud Danli');
    } else if (text === 'Gasolineras') {
      navigation.navigate('Gasolineras Danlí');
    } else if (text === 'Belleza') {
      navigation.navigate('Belleza Danlí');
    }
    else if (text === 'Deporte') {
      navigation.navigate('Deportes Danlí');
    }
    else if (text === 'Automotriz') {
      navigation.navigate('Automotriz Danlí');
    }
    else if (text === 'Plazas Comerciales') {
      navigation.navigate("Plazas Comerciales Danlí"); 
    }
    else if (text === 'Transporte') {
      navigation.navigate("Transporte Danlí");
    }
    else if (text === 'Educación') {
      navigation.navigate("Educación Danlí");
    }else if (text === 'FESTIMA') {
      Linking.openURL('https://www.facebook.com/festimaoficial/?locale=es_LA');
    }

    else if (text === 'Servicios Publicos') {
      navigation.navigate("Educación Danlí");
    }

    else if (text === 'Empresas de Seguridad') {
      navigation.navigate("Educación Danlí");
    }

    else if (text === 'Medios de Comunicación') {
      navigation.navigate("Educación Danlí");
    }

    else if (text === 'TV por Cable') {
      navigation.navigate("Educación Danlí");
    }
  };

  

  const renderButtons = () => {
    if (filterData.length === 0 && searchText.length !== 0) {
      return (
        <Text style={styles.noResultsText}>
          Este tipo de lugares aun no estan en la APP
        </Text>
      );
    }

    

    const renderedButtons = [];
    let rowIndex = 0;

    if (searchText.length === 0) {
      for (let i = 0; i < data.length; i += 2) {
        const button1 = data[i];
        const button2 = data[i + 1];

        const row = (
          <View style={styles.row} key={i}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress(button1.text)}
            >
              <Image
                source={{ uri: button1.image }}
                style={styles.buttonImage}
              />
              <Text style={styles.buttonText}>{button1.text}</Text>
            </TouchableOpacity>
            {button2 && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress(button2.text)}
              >
                <Image
                  source={{ uri: button2.image }}
                  style={styles.buttonImage}
                />
                <Text style={styles.buttonText}>{button2.text}</Text>
              </TouchableOpacity>
            )}
          </View>
        );

        renderedButtons.push(row);
      }
    } else {
      for (let i = 0; i < filterData.length; i += 2) {
        const button1 = filterData[i];
        const button2 = filterData[i + 1];

        const row = (
          <View style={styles.row} key={i}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress(button1.text)}
            >
              <Image
                source={{ uri: button1.image }}
                style={styles.buttonImage}
              />
              <Text style={styles.buttonText}>{button1.text}</Text>
            </TouchableOpacity>
            {button2 && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleButtonPress(button2.text)}
              >
                <Image
                  source={{ uri: button2.image }}
                  style={styles.buttonImage}
                />
                <Text style={styles.buttonText}>{button2.text}</Text>
              </TouchableOpacity>
            )}
          </View>
        );

        renderedButtons.push(row);
      }
    }

    return renderedButtons;
  };

  return ( 
    <View style={styles.container}>
  
  <ScrollView>
    <View style={styles.container2}>{renderButtons()}</View>
  </ScrollView>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  
  container2: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 36,
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
    
  },
  button: {
    maxWidth: 160,
    
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
  
  
    
  },
  buttonImage: {
    width: 145,
    height: 145,
    marginBottom: 10,
    alignSelf: 'center',
  },
  buttonText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 8,
    width: '80%',
    marginLeft: '10%',
    marginTop: 16,
  },
  icon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 30,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

  noResultsText: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 50,
    color: 'red',
    fontSize: 40,
    fontWeight: 'bold', // Aplicar formato en negrita
   // Utilizar la fuente "Arial Black"
  },
});

export default DanlíScreen;
