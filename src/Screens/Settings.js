import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";

const Settings = ({ navigation }) => {
  const navigateToSecurity = () => {
    Alert.alert(
      "Seguridad",
      "Nuestra aplicación ha sido diseñada pensando en tu seguridad y privacidad. Hemos tomado medidas especiales para proteger tus datos personales y garantizar que puedas utilizar la aplicación de manera segura.",
      [
        {
          text: "Aceptar",
          onPress: () => console.log("Aceptar"),
        },
      ]
    );
  
  };

  const navigateToNotifications = () => {
    Alert.alert(
      "Privacidad",
      "Si desea estar al tanto de cada novedad de nuestra aplicacion registrate",
      [
        {
          text: "Aceptar",
          onPress: () => console.log("Aceptar"),
        },
      ]
    );
  };

  const navigateToPrivacy = () => {
    Alert.alert(
      "Privacidad",
      "Utilizamos los datos recopilados para brindarte los servicios solicitados y mejorar nuestra aplicación. Podemos utilizar la información para personalizar tu experiencia, enviar notificaciones relevantes y realizar análisis internos para mejorar nuestros productos y servicios.",
      [
        {
          text: "Aceptar",
          onPress: () => console.log("Aceptar"),
        },
      ]
    );
  };

  const navigateToSubscription = () => {
    console.log("Subscription function");
  };

  const navigateToSupport = () => {
    console.log("Support function");
  };

  const navigateToReportProblem = () => {
    console.log("Report a problem");
  };

  const logout = () => {
    Alert.alert(
      "Confirmación",
      "¿Estás seguro de que deseas salir de la aplicación?",
      [
        {
          text: "No",
          style: "cancel",
          onPress: () => console.log("Cancelado"),
        },
        { text: "Sí", onPress: () => exitApp() },
      ],
      { cancelable: false }
    );
  };

  const exitApp = () => {
    console.log("Saliendo de la aplicación");
    // Aquí puedes agregar el código necesario para cerrar la aplicación
  };

  const accountItems = [
    { icon: "security", text: "Seguridad", action: navigateToSecurity },
    {
      icon: "notifications-none",
      text: "Notifications",
      action: navigateToNotifications,
    },
    { icon: "lock-outline", text: "Privacidad", action: navigateToPrivacy },
  ];

  const actionsItems = [
    {
      icon: "outlined-flag",
      text: "Reportar un problema",
      action: navigateToReportProblem,
    },
    { icon: "logout", text: "Salir", action: logout },
  ];

  const renderSettingsItem = ({ icon, text, action }) => (
    <TouchableOpacity
      onPress={action}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingLeft: 12,
        backgroundColor: COLORS.gray,
      }}
    >
      <MaterialIcons name={icon} size={24} color="black" />
      <Text
        style={{
          marginLeft: 36,
          
          fontWeight: 600,
          fontSize: 16,
        }}
      >
        {text}{" "}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <ScrollView style={{ marginHorizontal: 12 }}>
        {/* Account Settings */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{  marginVertical: 10 }}>Principales</Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: COLORS.gray,
            }}
          >
            {accountItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Actions Settings */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{  marginVertical: 10 }}>Acciones</Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: COLORS.gray,
            }}
          >
            {actionsItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
