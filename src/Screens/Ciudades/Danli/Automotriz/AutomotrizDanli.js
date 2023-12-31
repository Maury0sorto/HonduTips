import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderBackButton } from '@react-navigation/stack';

const AutomotrizDanli = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerBackVisible: true,
    });
  }, []);
  const [data, setData] = useState([
   
    { text: 'Lubricentros', image: 'https://i.imgur.com/nQ2AK2i.png' },
    { text: 'Talleres', image: 'https://i.imgur.com/YL2HeGL.png' },
    { text: 'Auto Lavado', image: 'https://i.imgur.com/yleWYPW.png' },
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
    if (text === 'Lubricentros') {
      navigation.navigate('Lubricentros Danlí');
    }  
    else if (text === 'Talleres') {
      navigation.navigate('Talleres en Danli');
    } 
    else if (text === 'Auto Lavado') {
      navigation.navigate('Carwash Danlí');
    } 
  };

  

  const renderButtons = () => {
    if (filterData.length === 0 && searchText.length !== 0) {
      return (
        <Text style={styles.noResultsText}>
          Este tipo de Servicio Automotriz aun no se encuentra en la APP
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
 // Estilo para el contenedor principal
container: {
  flex: 1,
},

// Estilo para el segundo contenedor
container2: {
  flex: 1,
  paddingHorizontal: 16,
  marginTop: 26,
},

// Estilo para el botón
button: {
  width: '100%',
  alignItems: 'center',
  backgroundColor: 'transparent',
  borderRadius: 10,
  marginBottom: 16,
},

// Estilo para la imagen del botón
buttonImage: {
  width: 160,
  height: 160,
  marginBottom: 8,
  alignSelf: 'center',
  borderRadius: 10,
},

// Estilo para el texto del botón
buttonText: {
  marginTop: 10,
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
},

// Estilo para el contenedor de búsqueda
searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: 20,
  paddingHorizontal: 8,
  paddingVertical: 8,
  width: '80%',
  marginLeft: '10%',
  marginTop: 16,
},

// Estilo para el ícono
icon: {
  marginRight: 8,
},

// Estilo para la entrada de búsqueda
searchInput: {
  flex: 1,
  height: 30,
  fontSize: 16,
  fontWeight: 'bold',
  color: 'black',
},

// Estilo para el texto en caso de no haber resultados
noResultsText: {
  textAlign: 'center',
  alignSelf: 'center',
  marginTop: 50,
  color: 'red',
  fontSize: 40,
  fontWeight: 'bold',
  fontFamily: 'Arial Black', // Utiliza la fuente "Arial Black"
},

});

export default AutomotrizDanli;
