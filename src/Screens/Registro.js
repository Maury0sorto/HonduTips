import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ExpoFormScreen = () => {
  const [contactInfo, setContactInfo] = useState({
    fullName: '',
    contactPhone: '',
    email: '',
  });

  const [commerceInfo, setCommerceInfo] = useState({
    storeName: '',
    branchesNumber: '',
    openingHours: '',
    storePhone: '',
    storeAddress: '',
    additionalComments: '',
  });

  const handleContactInfoChange = (key, value) => {
    setContactInfo({
      ...contactInfo,
      [key]: value,
    });
  };

  const handleCommerceInfoChange = (key, value) => {
    setCommerceInfo({
      ...commerceInfo,
      [key]: value,
    });
  };

  const handleLogoUpload = () => {
    // Implement logic for uploading logo image
  };

  const handlePhotoUpload = () => {
    // Implement logic for uploading store photo
  };

  const handleMenuUpload = () => {
    // Implement logic for uploading menu/services
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Información de Contacto</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nombre completo de contacto:</Text>
        <TextInput
          style={styles.input}
          value={contactInfo.fullName}
          onChangeText={(text) => handleContactInfoChange('fullName', text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Teléfono de contacto:</Text>
        <TextInput
          style={styles.input}
          value={contactInfo.contactPhone}
          onChangeText={(text) => handleContactInfoChange('contactPhone', text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Correo electrónico:</Text>
        <TextInput
          style={styles.input}
          value={contactInfo.email}
          onChangeText={(text) => handleContactInfoChange('email', text)}
        />
      </View>

      <Text style={styles.title}>Datos del comercio</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Nombre del local:</Text>
        <TextInput
          style={styles.input}
          value={commerceInfo.storeName}
          onChangeText={(text) => handleCommerceInfoChange('storeName', text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Número de sucursales:</Text>
        <TextInput
          style={styles.input}
          value={commerceInfo.branchesNumber}
          onChangeText={(text) => handleCommerceInfoChange('branchesNumber', text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Horario de atención:</Text>
        <TextInput
          style={styles.input}
          value={commerceInfo.openingHours}
          onChangeText={(text) => handleCommerceInfoChange('openingHours', text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Teléfono del local:</Text>
        <TextInput
          style={styles.input}
          value={commerceInfo.storePhone}
          onChangeText={(text) => handleCommerceInfoChange('storePhone', text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Dirección completa del local:</Text>
        <TextInput
          style={styles.input}
          value={commerceInfo.storeAddress}
          onChangeText={(text) => handleCommerceInfoChange('storeAddress', text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Comentarios adicionales:</Text>
        <TextInput
          style={styles.input}
          value={commerceInfo.additionalComments}
          onChangeText={(text) => handleCommerceInfoChange('additionalComments', text)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogoUpload}>
        <Text style={styles.buttonText}>Subir Imagen de Logotipo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handlePhotoUpload}>
        <Text style={styles.buttonText}>Subir Fotografía del Local</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleMenuUpload}>
        <Text style={styles.buttonText}>Subir Menú / Servicios</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ExpoFormScreen;
