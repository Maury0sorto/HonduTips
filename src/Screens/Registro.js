import { View, Text, TouchableOpacity, ScrollView, Alert, StyleSheet, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";

const Registro = ({ navigation }) => {
  const [nombre1, setNombre1] = React.useState("");
  const [nombre2, setNombre2] = React.useState("");
  const [nombre3, setNombre3] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* TextBox 1 */}
        <View style={styles.textboxContainer}>
          <Text>Nombre 1:</Text>
          <TextInput
            style={styles.textbox}
            value={nombre1}
            onChangeText={(text) => setNombre1(text)}
          />
        </View>

        {/* TextBox 2 */}
        <View style={styles.textboxContainer}>
          <Text>Nombre 2:</Text>
          <TextInput
            style={styles.textbox}
            value={nombre2}
            onChangeText={(text) => setNombre2(text)}
          />
        </View>

        {/* TextBox 3 */}
        <View style={styles.textboxContainer}>
          <Text>Nombre 3:</Text>
          <TextInput
            style={styles.textbox}
            value={nombre3}
            onChangeText={(text) => setNombre3(text)}
          />
        </View>

        {/* Resto del código... */}
        {/* Aquí puedes agregar el resto de tu código para el componente Registro */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  textboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  textbox: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 5,
    marginLeft: 10,
    paddingHorizontal: 10,
  },
});

export default Registro;