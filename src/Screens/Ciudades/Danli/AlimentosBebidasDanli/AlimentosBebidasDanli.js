import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderBackButton } from '@react-navigation/stack';

const AlimentosBebidasDanli = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerBackVisible: true,
    });
  }, []);
  const [data, setData] = useState([
   
    { text: 'Supermercados', image: 'https://i.imgur.com/PUravFh.png' },
    { text: 'Restaurantes', image: 'https://i.imgur.com/SQStGOP.png' },
    { text: 'Bares', image: 'https://i.imgur.com/K8i0GPL.png' },
    { text: 'Food Trucks', image: 'https://i.imgur.com/CWYpQ5n.png' },
    { text: 'Cafeterías', image: 'https://i.imgur.com/XYgNC4A.png' },
    { text: 'Reposterias', image: 'https://i.imgur.com/S2oPe0C.png' },
    { text: 'Heladerias', image: 'https://i.imgur.com/GgGx4NI.png' },
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
    if (text === 'Supermercados') {
      navigation.navigate('Supermercados Danlí');
    }  
    else if (text === 'Restaurantes') {
      navigation.navigate('Restaurantes Danlí');
    } 
    else if (text === 'Bares') {
      navigation.navigate('Bares Danlí');
    } 
    else if (text === 'Food Trucks') {
        navigation.navigate('Comida Callejera Danlí');
      } 
    else if (text === 'Cafeterías') {
        navigation.navigate('Cafés Danlí');
      } 
      else if (text === 'Reposterias') {
        navigation.navigate('Repostería Danlí');
      } 
      else if (text === 'Heladerias') {
        navigation.navigate('Heladeria Danlí');
      } 
  };

  

  const renderButtons = () => {
    if (filterData.length === 0 && searchText.length !== 0) {
      return (
        <Text style={styles.noResultsText}>
          Este tipo de Servicio de Alimetos y Bebidas aun no se encuentra en la APP
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
    marginTop: 76,
    
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

export default AlimentosBebidasDanli;
