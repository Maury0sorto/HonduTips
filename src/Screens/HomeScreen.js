// Importa los módulos necesarios de React y React Native.
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importa el componente Carrucel desde la ruta especificada.
import Carrucel from '../components/Carrucel';

// Importa la pantalla de OnboardingScreen (puede faltar en el código actual).
import OnboardingScreen from './OnboardingScreen';

// Define el componente HomeScreen.
const HomeScreen = () => {
  // Obtiene el objeto de navegación utilizando el hook useNavigation.
  const navigation = useNavigation();

  // Renderiza la pantalla principal.
  return (
    <>
    <View style={styles.container}>
      <Carrucel/>
    </View>
    </>
  );
};


// Define los estilos de la pantalla utilizando StyleSheet.create.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
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

export default HomeScreen;
