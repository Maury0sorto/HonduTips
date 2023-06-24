import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carrucel from '../components/Carrucel';
import OnboardingScreen from './OnboardingScreen';

const HomeScreen = () => {
 
  return (

    
    <View style={styles.container}>
      
      <Carrucel/>
      
    </View>
  );
};

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
});

export default HomeScreen;
