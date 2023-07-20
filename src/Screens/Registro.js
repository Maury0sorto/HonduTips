import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert, StyleSheet, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

const Registro = ({ navigation }) => {
  const [nombre, setNombre] = useState("");
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [rubro, setRubro] = useState("");
  const [telefono, setTelefono] = useState("");
  const [paginaWebRedSocial, setPaginaWebRedSocial] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    if (!nombre || !nombreEmpresa || !rubro || !telefono || !paginaWebRedSocial || !image) {
      Alert.alert("Error", "Todos los campos son obligatorios. Por favor, completa todos los campos antes de registrar el negocio.");
      return;
    }

    const datos = {
      Nombre: nombre,
      "Nombre empresa": nombreEmpresa,
      Rubro: rubro,
      Teléfono: telefono,
      "Página web o red social": paginaWebRedSocial,
      "Foto del negocio": image,
    };
    Alert.alert("Datos ingresados:", JSON.stringify(datos));
    limpiarCampos();
  };

  const limpiarCampos = () => {
    setNombre("");
    setNombreEmpresa("");
    setRubro("");
    setTelefono("");
    setPaginaWebRedSocial("");
    setImage(null);
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error al cargar la imagen:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Registrar Negocio</Text>
        <TouchableOpacity onPress={pickImage} style={styles.imagePickerButton}>
          {image ? (
            <Image source={{ uri: image }} style={styles.imagePreview} />
          ) : (
            <MaterialIcons name="add-a-photo" size={30} color={COLORS.primary} />
          )}
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={(text) => setNombre(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Nombre empresa"
          value={nombreEmpresa}
          onChangeText={(text) => setNombreEmpresa(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Rubro"
          value={rubro}
          onChangeText={(text) => setRubro(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          value={telefono}
          onChangeText={(text) => setTelefono(text)}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Link página web o red social"
          value={paginaWebRedSocial}
          onChangeText={(text) => setPaginaWebRedSocial(text)}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign:"center"
  },
  imagePickerButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.lightGray,
    width: 100,
    height: 100,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 20,
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    backgroundColor: "#00BCE4",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "50%",
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Registro;
