import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const ToggleSwitch = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <View style={styles.switchContainer}>
      <Text style={styles.switchText}>Modo oscuro:</Text>
      <TouchableOpacity
        style={[
          styles.switchButton,
          { backgroundColor: isDarkMode ? '#000' : '#fff' },
        ]}
        onPress={toggleDarkMode}
      >
        <Text style={[styles.switchButtonText, { color: isDarkMode ? '#fff' : '#000' }]}>
          {isDarkMode ? 'Oscuro' : 'Claro'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchText: {
    marginRight: 10,
    fontSize: 16,
    color: '#333',
  },
  switchButton: {
    width: 50,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ToggleSwitch;
