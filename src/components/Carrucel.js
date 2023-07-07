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
    navigation.navigate('Buscar'); 
    setTimeout(() => { 
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
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} />
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        snapToAlignment="start"
        contentContainerStyle={{
          paddingTop: 230,  // Para hacer mas arriba o mas abajo el carruccel
          paddingHorizontal: ESPACIO_CONTENEDOR,
        }}
        snapToInterval={ANCHO_CONTENEDOR}
        decelerationRate={0}
        scrollEventThrottle={16}
        data={imagenes}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ANCHO_CONTENEDOR,
            index * ANCHO_CONTENEDOR,
            (index + 1) * ANCHO_CONTENEDOR,
          ];

          const scrollY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -0.2 * ANCHO_CONTENEDOR, 0],
          });
          return (

            <TouchableOpacity
            key={index}
            onPress={() => {
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
                            case 8:
                              navigateToConstruccion();
                              break;

                // Resto de tus casos
                default:
                  break;
              }
            }}
          >
            <View style={{ width: ANCHO_CONTENEDOR }}>
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
                <Text style={{ fontWeight: "bold", fontSize: 26 , textAlign:"center"}}>
                {titulos[index]} {/* Utiliza el título correspondiente */}
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
