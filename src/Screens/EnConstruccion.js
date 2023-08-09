import { View, Text, ImageBackground, StyleSheet } from 'react-native';  // Importa los componentes necesarios de react-native
import React from 'react';

// Define el componente funcional EnConstruccion
export default function EnConstruccion() {
  return (
    <View style={styles.container}>
      {/* Fondo de imagen */}
      <ImageBackground
        source={{ uri: 'https://i.imgur.com/L3jkuII.png' }}  // Fuente de la imagen de fondo
        style={styles.imageBackground}  // Aplica los estilos de la imagen de fondo
      >
        {/* No se coloca nada dentro del ImageBackground */}
      </ImageBackground>
    </View>
  );
}

// Definición de estilos utilizando StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flex: 1,  // Ocupa todo el espacio disponible en la pantalla
    justifyContent: 'center',  // Centra verticalmente el contenido
    alignItems: 'center',  // Centra horizontalmente el contenido
  },
  imageBackground: {
    width: '100%',  // Ancho al 100% del contenedor
    height: '100%',  // Altura al 100% del contenedor
    resizeMode: 'cover',  // Ajuste de tamaño para cubrir el contenedor
    justifyContent: 'center',  // Centra verticalmente el contenido de la imagen
    alignItems: 'center',  // Centra horizontalmente el contenido de la imagen
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
