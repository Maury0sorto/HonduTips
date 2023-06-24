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
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
       
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

const ScreenE = ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
     <ExpressoAmericanoDanli/>
    </View>
  );
};

const ScreenF = ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <ParadiseBurgerDanli/>
    </View>
  );
};

const RestaurantesDanli = () => {
  const [componenteVisible, setComponenteVisible] = useState(null);
  const [mostrarSelectList, setMostrarSelectList] = useState(true); // Nuevo estado
  const [selectedOption, setSelectedOption] = useState('Recomendados');

  const mostrarComponente = (text, screenComponent) => {
    setMostrarSelectList(false); // Ocultar SelectList
    setComponenteVisible({ text, screenComponent });
    setSelectedOption(text); // Actualizar la opción seleccionada
  };

  const mostrarBotonAnterior = () => {
     setMostrarSelectList(true); // Mostrar SelectList nuevamente
  setComponenteVisible(null);
  setSelectedOption("Recomendados");
  };

  const buttons = [
    { text: "Wendy's", image: 'https://logodownload.org/wp-content/uploads/2020/05/wendys-logo-3-1.png',  screen: ScreenA },
   
    { text: 'Pizza Hut', image: 'https://graffica.info/wp-content/uploads/2017/07/Pizza_Hut_Logo_3.png', screen: ScreenB },
    { text: "Chesters Chiken", image: 'https://static.wikia.nocookie.net/logopedia/images/0/02/Chesters-0.png/revision/latest?cb=20200304191304', screen: ScreenC },
    { text: 'Papa Johns', image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/309639873_2055961541266124_6515876166726249677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=X3tRoyKK9ocAX_9vCOI&_nc_ht=scontent.fsap8-1.fna&oh=00_AfBbkhONEfeqgzrsjZI8Q7NF8XpXx6y1EThX6iMgNlJrGQ&oe=649806B4', screen: ScreenD },
    { text: 'Expresso Americano', image: 'https://media.giphy.com/avatars/espressoamericano/OvcvgcC9TVlp.jpg', screen: ScreenE },
    { text: "Paradise Burger", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/301142856_452426046902766_6302578564774581807_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3mQS9QVKScgAX-n2wPO&_nc_ht=scontent.fsap8-1.fna&oh=00_AfAvovX-dp8UzN45xpiJkZAFVUB3jpdOHKNBSbCu8deyHg&oe=6498B25F', screen: ScreenF },
  ];

  const data2 = [
    { key: '1', value: 'Recomendados' },
    { key: '2', value: "Wendy's" },
    { key: '3', value: 'Pizza Hut' },
    { key: '4', value: 'Chesters Chiken' },
    { key: '5', value: 'Papa Johns' },
    { key: '6', value: 'Expresso Americano' },
    { key: '7', value: 'Paradise Burger' },
    
  ];

  const ComponenteVisible = componenteVisible?.screenComponent || null;

  const filteredButtons = buttons.filter(
    (button) =>
      selectedOption === 'Recomendados' || button.text.includes(selectedOption)
  ); 

  
  

  return (
    <View style={styles.container}>
      {mostrarSelectList && (
        <View style={styles.container2}>
          <SelectList
            setSelected={(val) => setSelectedOption(val)}
            data={data2}
            save="value"
            placeholder="Recomendados"
            noDataText="Restaurante no disponible"
            searchPlaceholder="Busca tu restaurante"
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

export default RestaurantesDanli;
