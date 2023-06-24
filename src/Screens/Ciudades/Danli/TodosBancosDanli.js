import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const OtroComponente = () => {
  return (
    <View>
      <Text>Otro Componente</Text>
    </View>
  );
};

const Atlantida = () => {
  return (
    <View>
      <Text>TodosBancosDanli</Text>
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
    fontSize: 20,
  },
});

export default function TodosBancosDanli() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TodosBancosDanli</Text>
      <Atlantida />
      <OtroComponente />
    </View>
  );
}
