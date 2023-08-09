import React, { useState, useEffect } from 'react';  // Importa React y los hooks useState y useEffect
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';  // Importa componentes de react-native
import { useNavigation } from '@react-navigation/native';  // Importa el hook useNavigation de la biblioteca @react-navigation/native
import { Ionicons } from '@expo/vector-icons';  // Importa el componente Ionicons de la biblioteca @expo/vector-icons

// Define el componente funcional Ciudades
const Ciudades = () => {
  const navigation = useNavigation();  // Obtiene la instancia de navegación mediante useNavigation()

  // Estado para almacenar los datos de las ciudades y realizar filtrado
  const [data, setData] = useState([
    { text: 'Danlí', image: 'https://i.imgur.com/Gg2bDTA.jpg' },
    { text: 'Tegucigalpa', image: 'https://i.imgur.com/osUnEBr.jpg' },
    { text: 'El Paraíso', image: 'https://i.imgur.com/ALmWN0k.jpg' },
    { text: 'La Ceiba', image: 'https://i.imgur.com/pvsrZHF.jpg' },
    { text: 'San Pedro Sula', image: 'https://i.imgur.com/1TiE38b.jpg' },
    { text: 'Roatán', image: 'https://i.imgur.com/418be5e.jpg' },
  ]);

  // Estado para almacenar datos filtrados y el texto de búsqueda
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState('');

  // Efecto para inicializar los datos filtrados con los datos originales
  useEffect(() => {
    setFilterData(data);
  }, [data]);

  // Función para filtrar las ciudades según el texto de búsqueda
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

  // Función para manejar la navegación según el botón presionado
  const handleButtonPress = (text) => {
    // Configura la navegación a las pantallas correspondientes según el texto del botón
    if (text === 'Danlí') {
      navigation.navigate('Danlí');
    } else {
      navigation.navigate('Construccion');
    }
  };

  // Función para renderizar los botones de las ciudades
  const renderButtons = () => {
    // Si no hay resultados de filtrado y se ha ingresado texto de búsqueda
    if (filterData.length === 0 && searchText.length !== 0) {
      return (
        <Text style={styles.noResultsText}>
          Esta ciudad no ha sido agregada o no existe
        </Text>
      );
    }

    // Array para almacenar los botones renderizados
    const renderedButtons = [];
    let rowIndex = 0;

    // Si no se ha ingresado texto de búsqueda
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
    } else {  // Si se ha ingresado texto de búsqueda
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
      {/* Barra de búsqueda */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Busca tu ciudad..."
          value={searchText}
          onChangeText={(text) => {
            setSearchText(text);
            filterSearch();
          }}
        />
      </View>
      {/* ScrollView para renderizar los botones de ciudades */}
      <ScrollView>
        <View style={styles.container2}>{renderButtons()}</View>
      </ScrollView>
    </View>
  );
};

// Definición de estilos utilizando StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flex: 1,  // Ocupa todo el espacio disponible en la pantalla
  },
  container2: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',  // Alinea los elementos en una fila
    justifyContent: 'space-between',  // Distribuye el espacio entre los elementos en la fila
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    maxWidth: 160,
    flex: 1,  // Ocupa todo el espacio disponible en la fila
    alignItems: 'center',  // Centra el contenido horizontalmente
    backgroundColor: 'transparent',  // Fondo transparente
    borderRadius: 10,
    padding: 6,
    marginHorizontal: 1,
  },
  buttonImage: {
    width: '100%',  // Ancho al 100% del botón
    height: 160,
    marginBottom: 8,
    borderRadius: 19,  // Borde redondeado
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
  searchContainer: {
    flexDirection: 'row',  // Alinea los elementos en una fila
    alignItems: 'center',  // Centra el contenido verticalmente
    backgroundColor: '#ffff',  // Fondo blanco
    borderRadius: 20,  // Borde redondeado
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
    flex: 1,  // Ocupa todo el espacio disponible en la fila
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
    fontWeight: 'bold',  // Aplicar formato en negrita
    // Utilizar la fuente "Arial Black"
  },
});

export default Ciudades;  // Exporta el componente Ciudades
