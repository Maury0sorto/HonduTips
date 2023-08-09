import React, { useEffect, useState } from 'react';  // Importa React y los hooks useEffect y useState
import { View, StyleSheet, ActivityIndicator, Modal } from 'react-native';  // Importa los componentes necesarios de react-native

const LoadingScreen = () => {  // Define el componente funcional LoadingScreen
  const [isLoading, setIsLoading] = useState(true);  // Define un estado para controlar si se está cargando

  useEffect(() => {
    // Simula una operación de carga
    setTimeout(() => {
      setIsLoading(false);  // Cambia isLoading a falso después de 900 ms
    }, 900);
  }, []);

  if (isLoading) {
    // Si isLoading es verdadero, muestra un modal con un indicador de actividad
    return (
      <Modal transparent={true} visible={isLoading}>
        <View style={styles.modalContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </Modal>
    );
  }

  return null;  // Si isLoading es falso, no muestra nada
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,  // Ocupa todo el espacio disponible en la pantalla
    justifyContent: 'center',  // Centra verticalmente el contenido
    alignItems: 'center',  // Centra horizontalmente el contenido
    backgroundColor: 'rgba(255, 255, 255, 1)',  // Fondo blanco opaco
  },
});

export default LoadingScreen;  // Exporta el componente LoadingScreen como el componente principal de este archivo
