import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [contactInfo, setContactInfo] = useState({
    fullName: '',
    contactPhone: '',
    contactEmail: '',
  });

  const [localInfo, setLocalInfo] = useState({
    localName: '',
    branches: '',
    openingHours: '',
    localPhone: '',
    address: '',
    comments: '',
    logoImage: null,
    localImage: null,
    menuImage: null,
  });

  const pickImage = async (type) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      switch (type) {
        case 'logo':
          setLocalInfo({ ...localInfo, logoImage: result.uri });
          break;
        case 'local':
          setLocalInfo({ ...localInfo, localImage: result.uri });
          break;
        case 'menu':
          setLocalInfo({ ...localInfo, menuImage: result.uri });
          break;
      }
    }
  };

  const handleSubmit = () => {
    // Validación de campos vacíos
    if (
      contactInfo.fullName.trim() === '' ||
      contactInfo.contactPhone.trim() === '' ||
      contactInfo.contactEmail.trim() === '' ||
      localInfo.localName.trim() === '' ||
      localInfo.branches.trim() === '' ||
      localInfo.openingHours.trim() === '' ||
      localInfo.localPhone.trim() === '' ||
      localInfo.address.trim() === ''
    ) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    // Aquí puedes enviar los datos a un servidor o realizar alguna acción con ellos
    console.log(contactInfo, localInfo);
  };

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' }}>
        Registra tu Empresa
      </Text>

      {/* Información de Contacto */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Información de Contacto</Text>
      <View style={{ marginBottom: 16 }}>
        <Text>Nombre completo de contacto:</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'gray', padding: 8, marginBottom: 8, borderRadius: 8 }}
          onChangeText={(text) => setContactInfo({ ...contactInfo, fullName: text.trim() })}
          value={contactInfo.fullName}
        />

        <Text>Teléfono de contacto:</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'gray', padding: 8, marginBottom: 8, borderRadius: 8 }}
          onChangeText={(text) => setContactInfo({ ...contactInfo, contactPhone: text.trim() })}
          value={contactInfo.contactPhone}
        />

        <Text>Correo electrónico:</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'gray', padding: 8, borderRadius: 8 }}
          onChangeText={(text) => setContactInfo({ ...contactInfo, contactEmail: text.trim() })}
          value={contactInfo.contactEmail}
        />
      </View>

      {/* Datos del comercio */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8, borderRadius: 8 }}>
        Datos del comercio
      </Text>
      <View style={{ marginBottom: 16 }}>
        <Text>Nombre del local:</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'gray', padding: 8, marginBottom: 8, borderRadius: 8 }}
          onChangeText={(text) => setLocalInfo({ ...localInfo, localName: text.trim() })}
          value={localInfo.localName}
        />

        <Text>Número de sucursales:</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'gray', padding: 8, marginBottom: 8, borderRadius: 8 }}
          onChangeText={(text) => setLocalInfo({ ...localInfo, branches: text.trim() })}
          value={localInfo.branches}
        />

        <Text>Horario de atención:</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'gray', padding: 8, marginBottom: 8, borderRadius: 8 }}
          onChangeText={(text) => setLocalInfo({ ...localInfo, openingHours: text.trim() })}
          value={localInfo.openingHours}
        />

        <Text>Teléfono del local:</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'gray', padding: 8, marginBottom: 8, borderRadius: 8 }}
          onChangeText={(text) => setLocalInfo({ ...localInfo, localPhone: text.trim() })}
          value={localInfo.localPhone}
        />

        <Text>Dirección completa del local:</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'gray', padding: 8, marginBottom: 8, borderRadius: 8 }}
          onChangeText={(text) => setLocalInfo({ ...localInfo, address: text.trim() })}
          value={localInfo.address}
        />

<Text>Comentarios adicionales:</Text>
<TextInput
  style={{ borderWidth: 1, borderColor: 'gray', padding: 8, marginBottom: 30, borderRadius: 8 }}
  onChangeText={(text) => setLocalInfo({ ...localInfo, comments: text })}
  value={localInfo.comments}
  multiline={true} // <-- Agregamos esta prop para hacerlo multilinea
/>


        {/* Alineación horizontal de los botones para subir imágenes */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
          <TouchableOpacity
            onPress={() => pickImage('logo')}
            style={{
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'gray',
              padding: 15,
              borderRadius: 8,
              backgroundColor: '#00BCE4',
            }}
          >
            <Text style={{ color: '#fff' }}>Subir Imagen</Text>
            <Text style={{ color: '#fff' }}>de Logotipo</Text>
            <Text> </Text>
            {localInfo.logoImage && <Image source={{ uri: localInfo.logoImage }} style={{width: 95, height: 95}} />}
            {!localInfo.logoImage && <Text style={{fontSize:10, color:"red"}}>No hay imagen</Text>}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => pickImage('local')}
            style={{
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'gray',
              padding: 15,
              borderRadius: 8,
              backgroundColor: '#00BCE4',
            }}
          >
            <Text style={{ color: '#fff' }}>Subir</Text>
            <Text style={{ color: '#fff' }}>Fotografía</Text>
            <Text style={{ color: '#fff' }}>del Local</Text>
            {localInfo.localImage && <Image source={{ uri: localInfo.localImage }} style={{width: 95, height: 95}} />}
            {!localInfo.localImage && <Text style={{fontSize:10, color:"red"}}>No hay imagen</Text>}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => pickImage('menu')}
            style={{
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'gray',
              padding: 15,
              borderRadius: 8,
              backgroundColor: '#00BCE4',
            }}
          >
            <Text style={{ color: '#fff' }}>Subir Menú</Text>
            <Text style={{ color: '#fff' }}>ó</Text>
            <Text style={{ color: '#fff' }}>Servicios</Text>
            {localInfo.menuImage && <Image source={{ uri: localInfo.menuImage }} style={{width: 95, height: 95}} />}
            {!localInfo.menuImage && <Text style={{fontSize:10, color:"red"}}>No hay imagen</Text>}
          </TouchableOpacity>
        </View>

      </View>

      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          backgroundColor: '#007BFF',
          padding: 12,
          borderRadius: 8,
          alignItems: 'center',
          marginBottom: 50,
          backgroundColor: '#00BCE4',
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Enviar Información</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
