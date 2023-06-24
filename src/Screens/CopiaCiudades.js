import { View, Text, StyleSheet,TouchableOpacity,Image, ScrollView, Button } from 'react-native';
import React, { useState } from 'react'
import Search from '../components/Search.'
import { useNavigation } from '@react-navigation/native';



const Ciudades = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  
  return (
    <View style={styles.container}>
        <Search/>
      <ScrollView>
    

      <View style={styles.container2}>
      <View style={styles.row}>
      <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Search2")}
        >
          <Image
            source={{ uri: 'https://i.imgur.com/9UycxBg.jpg' }} // Reemplaza con la ruta de la imagen para Button 1
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Danli</Text>
        </TouchableOpacity>
            
          
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Search2")}
        >
          <Image
            source={{ uri: 'https://i.imgur.com/dYTQAcn.jpg' }} // Reemplaza con la ruta de la imagen para Button 2
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Tegus</Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.container2}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('HomeScreen')}
        >
          <Image
            source={{ uri: 'https://i.imgur.com/AkAFz7F.jpg' }} // Reemplaza con la ruta de la imagen para Button 1
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>El Paraiso</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('HomeScreen')}
        >
          <Image
            source={{ uri: 'https://i.imgur.com/RzTk95v.jpg' }} // Reemplaza con la ruta de la imagen para Button 1
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>La Ceiba</Text>
        </TouchableOpacity>
        
      </View>
      
      { 
      /* Agrega más líneas aquí para más filas de botones */}
    </View><View style={styles.container2}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('San Pedro Sula')}
        >
          <Image
            source={{ uri: 'https://i.imgur.com/3JsIc7p.jpg' }} // Reemplaza con la ruta de la imagen para Button 1
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>San Pedro Sula</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('HomeScreen')}
        >
          <Image
             source={{ uri: 'https://i.imgur.com/iGGWOG6.jpg' }} // Reemplaza con la ruta de la imagen para Button 1
             style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Roatan</Text>
        </TouchableOpacity>
        
      </View>
      
      { 
      /* Agrega más líneas aquí para más filas de botones */}
    </View>
      { 
      /* Agrega más líneas aquí para más filas de botones */}
    </View>
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
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      marginBottom: 16,
    },
    button: {
      alignItems: 'center',
      marginBottom: 18,
      
      backgroundColor: 'transparent',
      borderRadius: 10,
      padding: 10,
      marginHorizontal: 25, // Agregado para separar los botones horizontalmente
    },
    buttonImage: {
      width: 110,
      height: 110,
      marginBottom: 8,
      borderRadius: 10,
    },
    buttonText: {
      fontSize: 12,
      color: 'black',
    },
    

  });

export default Ciudades