import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet,Text,View,Image, Dimensions, SafeAreaView, Animated, TouchableOpacity} from "react-native";

import { CommonActions } from '@react-navigation/native';


import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




const imagenes = [
  "https://i.imgur.com/qoIRXJF.jpg",
  "https://i.imgur.com/LxWPBjy.jpg",
  "https://i.imgur.com/Fv8pBwy.jpg",
  

];

const backdropImagenes = [
  "https://i.imgur.com/LZhskEp.jpg",
  "https://i.imgur.com/sXuH5b8.jpg",
  "https://i.imgur.com/HMiBgzP.jpg",
 
  // Agrega más URL de imágenes personalizadas aquí
];


// Inicio de codigos de los texto debajo de el carrucel
const titulos = [
  "DANLÍ 0703",
  "TEGUCIGALPA 0801" ,
  "SAN PEDRO SULA 0501",
  "LA CEIBA 0101",
  "ROATÁN 1101",
  "COMAYAGUA 0301",
  "TELA 0107",
  "SANTA ROSA DE COPÁN 0401",
];
// Fin de codigos de los texto debajo de el carrucel

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 10;
const ALTURA_BACKDROP = height * 0.5;

function Backdrop({ scrollX }) {
  return (
    <View
      style={[
        {
          position: "absolute",
          height: ALTURA_BACKDROP,
          top: 0,
          width: width,
        },
        StyleSheet.absoluteFillObject,
      ]}
    >
      {backdropImagenes.map((imagen, index) => {
        const inputRange = [
          (index - 1) * ANCHO_CONTENEDOR,
          index * ANCHO_CONTENEDOR,
          (index + 1) * ANCHO_CONTENEDOR,
        ];

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });
        return (
          <Animated.Image
            key={index}
            source={{ uri: imagen }}
            style={[
              { width: width, height: ALTURA_BACKDROP, opacity },
              StyleSheet.absoluteFillObject,
            ]}
          />
        );
      })}
      <LinearGradient
        colors={["transparent", "white"]}
        style={{
          width,
          height: ALTURA_BACKDROP,
          position: "absolute",
          bottom: 0,
        }}
      />
    </View>
  );
}

export default function Carrucel() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);


// Configuracion de navegaciones

const navigateToDanli = () => {
  // Navega a la pantalla 'Buscar'
  navigation.navigate('Buscar'); 

  // Espera 300 milisegundos (0.3 segundos) 
  setTimeout(() => { 
    // Después de esperar, navega a la pantalla 'Danlí'
    navigation.navigate('Danlí');
  }, 300);
};

  const navigateToConstruccion = () => {
    navigation.navigate('Buscar'); 
    setTimeout(() => { 
      navigation.navigate('Construccion');
    }, 300);
  };
  

  // Fin Configuracion de navegaciones




  const scrollX = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.timing(scrollX, {
      toValue: imagenes.length - 1,
      duration: 5000, // Duración de la animación (en milisegundos)
      useNativeDriver: true,
      isInteraction: false,
    });

    const loop = Animated.loop(animation);

    loop.start();

    return () => {
      loop.stop();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
  {/* Oculta la barra de estado */}
  <StatusBar hidden />
  
  {/* Renderiza el fondo del carrusel */}
  <Backdrop scrollX={scrollX} />
  
  {/* Renderiza la lista horizontal de elementos */}
  <Animated.FlatList
    // Captura y maneja el evento de desplazamiento horizontal
    onScroll={Animated.event(
      [{ nativeEvent: { contentOffset: { x: scrollX } } }],
      { useNativeDriver: true }
    )}
    
    // Oculta la barra de desplazamiento horizontal
    showsHorizontalScrollIndicator={false}
    
    // Hace que la lista se desplace horizontalmente
    horizontal={true}
    
    // Alinea los elementos al comienzo de la vista
    snapToAlignment="start"
    
    // Establece el estilo del contenedor de contenido
    contentContainerStyle={{
      paddingTop: 230,  // Espacio superior del carrusel (ajusta según sea necesario)
      paddingHorizontal: ESPACIO_CONTENEDOR,
    }}
    
    // Establece la distancia de desplazamiento para ajustar elementos
    snapToInterval={ANCHO_CONTENEDOR}
    
    // Establece la velocidad de desaceleración después de soltar el dedo
    decelerationRate={0}
    
    // Controla la frecuencia de eventos de desplazamiento capturados
    scrollEventThrottle={16}
    
    // Datos a mostrar en el carrusel (URLs de imágenes)
    data={imagenes}
    
    // Función para extraer una clave única para cada elemento
    keyExtractor={(item) => item}
    
    // Renderiza cada elemento en el carrusel
    renderItem={({ item, index }) => {
      // Calcula el rango de entrada para la animación de desplazamiento vertical
      const inputRange = [
        (index - 1) * ANCHO_CONTENEDOR,
        index * ANCHO_CONTENEDOR,
        (index + 1) * ANCHO_CONTENEDOR,
      ];
      
      // Crea una animación de desplazamiento vertical basada en scrollX
      const scrollY = scrollX.interpolate({
        inputRange,
        outputRange: [0, -0.2 * ANCHO_CONTENEDOR, 0],
      });

      // Renderiza cada elemento del carrusel en un TouchableOpacity
      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            // Navega a diferentes pantallas según el índice del elemento
            switch (index) {
              case 0:
                navigateToDanli();
                break;
              case 1:
                navigateToConstruccion();
                break;
              case 2:
                navigateToConstruccion();
                break;
                case 3:
                  navigateToConstruccion();
                  break;
                  case 4:
                    navigateToConstruccion();
                    break;
                    case 5:
                      navigateToConstruccion();
                      break;
                      case 6:
                        navigateToConstruccion();
                        break;
                        case 7:
                          navigateToConstruccion();
                          break;
              // Agrega más casos según sea necesario
              // ...

              default:
                break;
            }
          }}
        >
          <View style={{ width: ANCHO_CONTENEDOR }}>
            {/* Renderiza la imagen del elemento */}
            <Animated.View
              style={{
                marginHorizontal: ESPACIO,
                padding: ESPACIO,
                borderRadius: 34,
                backgroundColor: "#fff",
                alignItems: "center",
                transform: [{ translateY: scrollY }],
              }}
            >
              <Image source={{ uri: item }} style={styles.posterImage} />
              
              {/* Muestra el título correspondiente al elemento */}
              <Text style={{ fontWeight: "bold", fontSize: 26 , textAlign:"center"}}>
                {titulos[index]}
              </Text>
            </Animated.View>
          </View>
        </TouchableOpacity>
      );
    }}
  />
</SafeAreaView>


    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  posterImage: {
    width: "100%",
    height: ANCHO_CONTENEDOR * 1.25,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom:5,
  },









  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },






});
