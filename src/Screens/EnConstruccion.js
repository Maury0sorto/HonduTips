import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';

export default function EnConstruccion() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://i.imgur.com/L3jkuII.png' }}
        style={styles.imageBackground}
      >
        
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
