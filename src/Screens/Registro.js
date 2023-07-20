import { View, Text, TouchableOpacity, ScrollView, Alert, StyleSheet, TextInput, Image } from "react-native";
import React, { useState } from "react";
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
    // Aquí puedes realizar alguna acción con los datos ingresados, como enviarlos a un servidor, almacenarlos en una base de datos, etc.
    // Por ejemplo, podrías mostrar una alerta con los datos ingresados:
    const datos = {
      Nombre: nombre,
      "Nombre empresa": nombreEmpresa,
      Rubro: rubro,
      Teléfono: telefono,
      "Página web o red social": paginaWebRedSocial,
      "Foto del negocio": image,
    };
    Alert.alert("Datos ingresados:", JSON.stringify(datos));
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
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
          placeholder="Página web o red social"
          value={paginaWebRedSocial}
          onChangeText={(text) => setPaginaWebRedSocial(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imagePickerButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.lightGray,
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  input: {
    height: 40,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Registro;
