import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet,Text,View,Image, Dimensions, SafeAreaView, Animated,} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';


const imagenes = [
  "https://i.imgur.com/9UycxBg.jpg",
  "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2425&q=80",
  "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80",
  "https://images.unsplash.com/photo-1525183995014-bd94c0750cd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80",
  "https://images.unsplash.com/photo-1503756234508-e32369269deb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
  "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80",
];

const backdropImagenes = [
  "https://www.hondurastips.hn/wp-content/uploads/2016/08/danli-8.jpg",
  "https://elcomercio.pe/resizer/vR-RM4uvl6yxbaPOw9rHhcBg6Jw=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ZRNBMG3HVBAHPGAZAUJGBJJ7HU.jpg",
  "https://i.blogs.es/b7f54f/dragon-ball-asi-se-veria-broly-si-alcanzara-la-transformacion-super-saiyajin-4-en-un-fanart-que-lo-imagina-mas-poderoso-que-nunca1/1366_2000.jpeg",
  // Agrega más URL de imágenes personalizadas aquí
];


// Inicio de codigos de los texto debajo de el carrucel
const titulos = [
  "DANLI 0703",
  "Título 2",
  "Título 3",
  "Título 4",
  "Título 5",
  "Título 6",
  "Título 7",
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
          paddingTop: 130,
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
                <Text style={{ fontWeight: "bold", fontSize: 26 }}>
                {titulos[index]} {/* Utiliza el título correspondiente */}
                </Text>
              </Animated.View>
            </View>
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
    height: ANCHO_CONTENEDOR * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});
