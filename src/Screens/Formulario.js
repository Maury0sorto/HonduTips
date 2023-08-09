import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import React from 'react';

const Formulario = () => {
  const handlePress = () => {
    const url = 'https://forms.gle/ZeYTQ1snSaMRTWbKA'; // Reemplaza con la URL que desees
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={handlePress}>
        <Text style={styles.buttonText}>Envía los datos de tu empresa</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    backgroundColor: '#00BCE4',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Formulario;
