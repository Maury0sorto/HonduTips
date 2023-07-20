import { View, Text, TouchableOpacity, ScrollView, Alert, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";

const Registro = ({ navigation }) => {
  const [nombre, setNombre] = useState("");
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [rubro, setRubro] = useState("");
  const [telefono, setTelefono] = useState("");
  const [paginaWebRedSocial, setPaginaWebRedSocial] = useState("");

  const handleSubmit = () => {
    // Aquí puedes realizar alguna acción con los datos ingresados, como enviarlos a un servidor, almacenarlos en una base de datos, etc.
    // Por ejemplo, podrías mostrar una alerta con los datos ingresados:
    const datos = {
      Nombre: nombre,
      "Nombre empresa": nombreEmpresa,
      Rubro: rubro,
      Teléfono: telefono,
      "Página web o red social": paginaWebRedSocial,
    };
    Alert.alert("Datos ingresados:", JSON.stringify(datos));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Registrar Negocio</Text>
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
    textAlign:"center"
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
