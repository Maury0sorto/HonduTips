import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import  ExpressoAmericanoDanli from './RestaurantesDanli/ExpressoAmericanoDanli';
import WendysDanli from './RestaurantesDanli/WendysDanli';
import PizzaHutDanli from './RestaurantesDanli/PizzaHutDanli';
import ChesterChikeDanli from './RestaurantesDanli/ChesterChikenDanli';
import PapaJohnstDanli from './RestaurantesDanli/PapaJohnsDanli';
import ParadiseBurgerDanli from './RestaurantesDanli/ParadiseBurgerDanli';

const ScreenA = ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#FFFF"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver las Gasolineras...</Text>
       
      </TouchableHighlight>
      <WendysDanli/>
   
    </View>
  );
};

const ScreenB = ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <PizzaHutDanli/>
     
    </View>
  );
};

const ScreenC = ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <ChesterChikeDanli/>
    </View>
  );
};

const ScreenD = ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <PapaJohnstDanli/>
    </View>
  );
};



const GasolinerasDanli = () => {
  const [componenteVisible, setComponenteVisible] = useState(null);
  const [mostrarSelectList, setMostrarSelectList] = useState(true); // Nuevo estado
  const [selectedOption, setSelectedOption] = useState('Recomendadas');

  const mostrarComponente = (text, screenComponent) => {
    setMostrarSelectList(false); // Ocultar SelectList
    setComponenteVisible({ text, screenComponent });
    setSelectedOption(text); // Actualizar la opción seleccionada
  };

  const mostrarBotonAnterior = () => {
     setMostrarSelectList(true); // Mostrar SelectList nuevamente
  setComponenteVisible(null);
  setSelectedOption("Recomendadas");
  };

  const buttons = [
    { text: "Gasolinera Uno", image: 'https://scontent.ftgu2-3.fna.fbcdn.net/v/t39.30808-6/310994414_481719290664274_947117072423186180_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bLs-33kUqJYAX-FkqYs&_nc_ht=scontent.ftgu2-3.fna&oh=00_AfAZ2Zv7FzAOedXOFRjI2jjkUY2a_wITHKM43IRugxjV0w&oe=649B3912',  screen: ScreenA },
    { text: 'Gasolinera Texaco', image: 'https://scontent.ftgu2-3.fna.fbcdn.net/v/t39.30808-6/212301045_993368057868532_635814340386293217_n.png?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MFDCqnQFtDoAX-C743J&_nc_ht=scontent.ftgu2-3.fna&oh=00_AfAo3Scvpqs97syAMQqdPgr83PX1nuvgR1zEJHqPYBh2pQ&oe=649B6719', screen: ScreenB },
    { text: "Gasolinera Puma", image: 'https://scontent.ftgu2-2.fna.fbcdn.net/v/t39.30808-6/306354912_132279286239458_1560117613148766858_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wNzX1OB84SMAX8M1Esz&_nc_ht=scontent.ftgu2-2.fna&oh=00_AfAnzjvleRgPK8QqVpIFvK19f3ejJx9V-zJ6KjWrn_DVOg&oe=649A4C64', screen: ScreenC },
   

  ];

  const data2 = [
    { key: '1', value: 'Recomendadas' },
    { key: '2', value: "Gasolinera Uno" },
    { key: '3', value: 'Gasolinera Texaco' },
    { key: '4', value: 'Gasolinera Puma' },
    
    
    
  ];

  const ComponenteVisible = componenteVisible?.screenComponent || null;

  const filteredButtons = buttons.filter(
    (button) =>
      selectedOption === 'Recomendadas' || button.text.includes(selectedOption)
  ); 

  
  

  return (
    <View style={styles.container}>
      {mostrarSelectList && (
        <View style={styles.container2}>
          <SelectList
            setSelected={(val) => setSelectedOption(val)}
            data={data2}
            save="value"
            placeholder="Recomendadas"
            noDataText="Gasolinera no disponible"
            searchPlaceholder="Busca tu gasolinera"
            onInputChange={(text) => mostrarComponente(text, null)}
          />
        </View>
      )}

      {ComponenteVisible ? (
        <ComponenteVisible
          text={componenteVisible.text}
          mostrarBotonAnterior={mostrarBotonAnterior}
        />
      ) : (
        <ScrollView>
        <View style={styles.buttonsContainer}>
          {filteredButtons.map((button, index) => (
            <View
              key={index}
              style={filteredButtons.length === 1 ? styles.singleButtonWrapper : styles.buttonWrapper}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={() => mostrarComponente(button.text, button.screen)}
              >
                <View>
                  <Image source={{ uri: button.image }} style={styles.buttonImage} />
                  <Text style={styles.buttonText}>{button.text}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: '#ffff',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 8,
    width: '80%',
    marginLeft: '1%',
    marginTop: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 20,
    
    
    
  },
  buttonWrapper: {
    width: '45%',
    marginBottom: 20,
    overflow: 'hidden',
  },

  singleButtonWrapper: {
    width: '100%',
    alignItems: 'center',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    
    
  },
  buttonImage: {
    width: 150,
    height: 150,
    marginBottom: 8,
    alignSelf: 'center',
     borderRadius: 10,
  },
  buttonText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  componentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  backButton: {
    backgroundColor: '#E5E7E5',
    paddingHorizontal: 110,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 20,
  },
  backButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
});

export default GasolinerasDanli;
