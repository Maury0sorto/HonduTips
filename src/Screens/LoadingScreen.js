import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Modal } from 'react-native';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una operación de carga
    setTimeout(() => {
      setIsLoading(false);
    }, 900);
  }, []);

  if (isLoading) {
    return (
      <Modal transparent={true} visible={isLoading}>
        <View style={styles.modalContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </Modal>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
});

export default LoadingScreen;
