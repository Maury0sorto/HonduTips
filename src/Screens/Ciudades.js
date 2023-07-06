import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const Ciudades = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([
    { text: 'Danlí', image: 'https://i.imgur.com/sU3Xoaz.jpg' },
    { text: 'Tegucigalpa', image: 'https://i.imgur.com/gXiH3F2.jpg' },
    { text: 'El Paraíso', image: 'https://i.imgur.com/ALmWN0k.jpg' },
    { text: 'La Ceiba', image: 'https://i.imgur.com/IIprwA2.jpg' },
    { text: 'San Pedro Sula', image: 'https://i.imgur.com/StpvOLJ.jpg' },
    { text: 'Roatán', image: 'https://i.imgur.com/8uXrwY5.jpg' },
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
    if (text === 'Danlí') {
      navigation.navigate('Danli');
    } else if (text === 'Tegucigalpa') {
      navigation.navigate('Construccion');
    } else if (text === 'El Paraíso') {
      navigation.navigate('Construccion');
    } else if (text === 'La Ceiba') {
      navigation.navigate('Construccion');
    } else if (text === 'San Pedro Sula') {
      navigation.navigate('Construccion');
    } else if (text === 'Roatán') {
      navigation.navigate('Construccion');
    }
  };

  

  const renderButtons = () => {
    if (filterData.length === 0 && searchText.length !== 0) {
      return (
        <Text style={styles.noResultsText}>
          Esta ciudad no ha sido agregada o no existe
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
    marginTop: 16,
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
    
  },
  button: {
    maxWidth: 160,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 6,
    marginHorizontal: 1,
    
  },
  buttonImage: {
    width: '100%',
    height: 160,
    marginBottom: 8,
    borderRadius: 19,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
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

export default Ciudades;
