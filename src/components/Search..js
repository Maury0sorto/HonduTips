import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [isPlaceholderVisible, setPlaceholderVisible] = useState(true);

  const handleSearch = () => {
    console.log('Searching for:', searchText);
    // Agrega aquí la lógica de búsqueda
  };

  const handleTextChange = (text) => {
    setSearchText(text);
    setPlaceholderVisible(text === '');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Buscar Ciudad"
          placeholderTextColor="gray"
          value={searchText}
          onChangeText={handleTextChange}
        />
      </View>
      {!isPlaceholderVisible && <Text style={styles.placeholderText}>No se ha encontrado la ciudad </Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: '8%',
    marginBottom:'5%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderRadius: 20,
    paddingHorizontal: '8%',
    paddingVertical: 8,
    width: '80%',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 30,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  placeholderText: {
    marginTop: 8,
    color: 'gray',
  },
});

export default Search;
