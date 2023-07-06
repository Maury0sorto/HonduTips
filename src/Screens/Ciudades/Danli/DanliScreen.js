import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
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
    { text: 'Restaurantes', image: 'https://i.imgur.com/SQStGOP.png' },
    { text: 'Hoteles', image: 'https://i.imgur.com/SN0hO9s.png' },
    { text: 'Farmacias', image: 'https://i.imgur.com/dsnanSl.png' },
    { text: 'Gasolineras', image: 'https://i.imgur.com/meCBdUt.png' },
    { text: 'Barberias', image: 'https://i.imgur.com/K0qLKfW.png' },
    { text: 'Actividad Física', image: 'https://i.imgur.com/YFd8er3.png' },
    { text: 'Centros Medicos', image: 'https://i.imgur.com/H4mcQuT.png' }, 
    { text: 'Automotriz', image: 'https://i.imgur.com/Ld3u2NI.png' },
    { text: 'Plazas Comerciales', image: 'https://i.imgur.com/GycKe4i.png' },
    { text: 'Puntos de Transporte', image: 'https://i.imgur.com/2sgBrWV.png' },
    { text: 'Educación', image: 'https://i.imgur.com/jPVcqaS.png' },
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
      navigation.navigate('Bancos Danli');
    } else if (text === 'Restaurantes') {
      navigation.navigate('Restaurantes Danli');
    } else if (text === 'Hoteles') {
      navigation.navigate('Hoteles Danli');
    } else if (text === 'Farmacias') {
      navigation.navigate('Farmacias Danli');
    } else if (text === 'Gasolineras') {
      navigation.navigate('Gasolineras Danli');
    } else if (text === 'Barberias') {
      navigation.navigate('Barberias Danli');
    }
    else if (text === 'Actividad Física') {
      navigation.navigate('Actividad Fisica en Danli');
    }
    else if (text === 'Centros Medicos') {
      navigation.navigate('Salud Danli');
    }
    else if (text === 'Automotriz') {
      navigation.navigate('Automotriz Danli');
    }
    else if (text === 'Plazas Comerciales') {
      navigation.navigate("Mall's Danli");
    }
    else if (text === 'Puntos de Transporte') {
      navigation.navigate("Terminal de Buses Danli");
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
  <View style={styles.searchContainer}>
    <Ionicons name="search" size={24} color="gray" style={styles.icon} />
    <TextInput
      style={styles.searchInput}
      placeholder="Donde quieres ir..."
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
