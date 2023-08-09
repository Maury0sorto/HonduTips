import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderBackButton } from '@react-navigation/stack';

const ActividadFisicaDanli = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerBackVisible: true,
    });
  }, []);
  const [data, setData] = useState([
   
    { text: 'Gimnasios', image: 'https://i.imgur.com/cBvl0M9.png' },
    { text: 'Fútbol', image: 'https://i.imgur.com/ZgGhd86.png' },
    { text: 'Baloncesto', image: 'https://i.imgur.com/F6N60i4.png' },
    { text: 'Artes Marciales Mixtas', image: 'https://i.imgur.com/Z878AFN.png' },
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
    if (text === 'Gimnasios') {
      navigation.navigate('Gimnasios Danli');
    }  
    else if (text === 'Fútbol') {
      navigation.navigate('Canchas De Fútbol en Danlí');
    } 
    else if (text === 'Baloncesto') {
      navigation.navigate('Baloncesto en Danlí');
    } 
    else if (text === 'Artes Marciales Mixtas') {
        navigation.navigate('Artes Marciales de Danlí');
      } 
  };

  

  const renderButtons = () => {
    if (filterData.length === 0 && searchText.length !== 0) {
      return (
        <Text style={styles.noResultsText}>
          Este tipo de actividad fisica aun no se encuentrssa en la APP
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
  marginTop: 156,
},

// Estilo para la fila (row) que contiene elementos
row: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 16,
  marginBottom: 16,
},

// Estilo para los botones
button: {
  maxWidth: 160,
  alignItems: 'center',
  backgroundColor: 'transparent',
  borderRadius: 10,
},

// Estilo para la imagen del botón
buttonImage: {
  width: 145,
  height: 145,
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

// Estilo para el contenedor de búsqueda
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

// Estilo para el icono de búsqueda
icon: {
  marginRight: 8,
},

// Estilo para el campo de entrada de búsqueda
searchInput: {
  flex: 1,
  height: 30,
  fontSize: 16,
  fontWeight: 'bold',
  color: 'black',
},

// Estilo para el texto que se muestra cuando no hay resultados
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

export default ActividadFisicaDanli;
