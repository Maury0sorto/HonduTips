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
    { text: 'Servicios Publicos', image: 'https://i.imgur.com/MjJTZBw.png' },
    { text: 'Empresas de Seguridad', image: 'https://i.imgur.com/4SNjwIg.png' },
    { text: 'Medios de Comunicación', image: 'https://i.imgur.com/Pgw3x9I.png' },
    { text: 'TV por Cable', image: 'https://i.imgur.com/76LovHy.png' },
  ]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setFilterData(data); // Mostrar el botón de retroceso en la barra de navegación
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
 // Estilo para el contenedor principal
container: {
  flex: 1, // Ocupar todo el espacio disponible en la pantalla
},

// Estilo para el segundo contenedor
container2: {
  flex: 1, // Ocupar todo el espacio disponible en la pantalla
  paddingHorizontal: 16, // Agregar espaciado horizontal de 16 unidades
  marginTop: 36, // Agregar margen superior de 36 unidades
},

// Estilo para una fila de elementos
row: {
  flexDirection: 'row', // Organizar los elementos en una fila horizontal
  justifyContent: 'space-between', // Distribuir el espacio disponible entre los elementos
  paddingHorizontal: 16, // Agregar espaciado horizontal de 16 unidades
  marginBottom: 16, // Agregar margen inferior de 16 unidades
},

// Estilo para un botón
button: {
  maxWidth: 160, // Ancho máximo del botón de 160 unidades
  alignItems: 'center', // Centrar los elementos horizontalmente
  backgroundColor: 'transparent', // Fondo transparente
  borderRadius: 10, // Borde redondeado con radio de 10 unidades
},

// Estilo para la imagen dentro del botón
buttonImage: {
  width: 145, // Ancho de la imagen de 145 unidades
  height: 145, // Altura de la imagen de 145 unidades
  marginBottom: 10, // Margen inferior de 10 unidades
  alignSelf: 'center', // Centrar la imagen horizontalmente dentro del botón
},

// Estilo para el texto del botón
buttonText: {
  marginTop: 10, // Margen superior de 10 unidades
  fontSize: 16, // Tamaño de fuente de 16 unidades
  fontWeight: 'bold', // Fuente en negrita
  textAlign: 'center', // Centrar el texto horizontalmente
},

// Estilo para el contenedor de búsqueda
searchContainer: {
  flexDirection: 'row', // Organizar los elementos en una fila horizontal
  alignItems: 'center', // Centrar los elementos verticalmente
  backgroundColor: '#ffff', // Fondo de color blanco
  borderRadius: 20, // Borde redondeado con radio de 20 unidades
  paddingHorizontal: 8, // Agregar espaciado horizontal de 8 unidades
  paddingVertical: 8, // Agregar espaciado vertical de 8 unidades
  width: '80%', // Ancho del contenedor del 80% del padre
  marginLeft: '10%', // Margen izquierdo del 10% del padre
  marginTop: 16, // Margen superior de 16 unidades
},

// Estilo para el ícono de búsqueda
icon: {
  marginRight: 8, // Margen derecho de 8 unidades
},

// Estilo para la entrada de texto de búsqueda
searchInput: {
  flex: 1, // Ocupar todo el espacio disponible en la dirección principal
  height: 30, // Altura de la entrada de texto de 30 unidades
  fontSize: 16, // Tamaño de fuente de 16 unidades
  fontWeight: 'bold', // Fuente en negrita
  color: 'black', // Color de texto en negro
},

// Estilo para el texto de "sin resultados"
noResultsText: {
  textAlign: 'center', // Centrar el texto horizontalmente
  alignSelf: 'center', // Centrar el elemento dentro de su contenedor
  marginTop: 50, // Margen superior de 50 unidades
  color: 'red', // Color de texto en rojo
  fontSize: 40, // Tamaño de fuente de 40 unidades
  fontWeight: 'bold', // Fuente en negrita
  fontFamily: 'Arial Black', // Tipo de fuente "Arial Black"
},

});

export default DanlíScreen;
