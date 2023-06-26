import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import  ExpressoAmericanoDanli from './RestaurantesDanli/ExpressoAmericanoDanli';
import WendysDanli from './RestaurantesDanli/WendysDanli';
import PizzaHutDanli from './RestaurantesDanli/PizzaHutDanli';
import ChesterChikeDanli from './RestaurantesDanli/ChesterChikenDanli';
import PapaJohnstDanli from './RestaurantesDanli/PapaJohnsDanli';
import ParadiseBurgerDanli from './RestaurantesDanli/ParadiseBurgerDanli';
import HotWingsDanli from './RestaurantesDanli/HotWings';
import SushiTotemoDanli from './RestaurantesDanli/SushiTetemoDanli';
import MarioChavezDanli from './RestaurantesDanli/MarioChavezDanli';
import ElGauchoDanli from './RestaurantesDanli/ElGauchoDanli';
import CocoBaleadasDanli from './RestaurantesDanli/CocoBaleadasDanli';

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

const ScreenG = ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <HotWingsDanli/>
    </View>
  );
};
const ScreenH = ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <SushiTotemoDanli/>
    </View>
  );
};

const ScreenI= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <MarioChavezDanli/>
    </View>
  );
};

const ScreenJ= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <ElGauchoDanli/>
    </View>
  );
};

const ScreenK= ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#0080ff"
        onPress={mostrarBotonAnterior}
      >
        <Text style={styles.backButtonText}>Ver los restaurantes...</Text>
      </TouchableHighlight>
      <CocoBaleadasDanli/>
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
    { text: "Hot Wings", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/346629593_1960075220994004_5975068841861283462_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZT_-H3QrFKkAX8W2kR6&_nc_ht=scontent.fsap8-1.fna&oh=00_AfB4h7TtayyqLxRW1tCueTQUqeFti0tbvruUm3aKDk6yUg&oe=649EBDAE', screen: ScreenG },
    { text: "Sushi Totemo", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/343310766_2183144078740427_3441642581191720748_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KGx1dnjGAR0AX-3DsBX&_nc_ht=scontent.fsap8-1.fna&oh=00_AfBDqOOa_SgCBqGal6lYmzl2WgG1hr03IIhHmPyGzwTPsw&oe=649EE165', screen: ScreenH },
    { text: "Restaurante Mario Chávez", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/323553590_1140424086657650_1481250813580760994_n.jpg?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-FGGdSpCcLoAX-iM634&_nc_ht=scontent.fsap8-1.fna&oh=00_AfBg14AnXVlbICXzhWK46wXJJ7MzPwiZdCxVGHWJXK6IIA&oe=649F07DB', screen: ScreenI },
    { text: "El Gaucho", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/323695677_444934067711668_6237152711758612986_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KUhX5jVr6HcAX_SIQjY&_nc_ht=scontent.fsap8-1.fna&oh=00_AfBV1m6ut0siH1NgvTya3nTR-y50KYTyczJZXbgRLoNxwg&oe=649F1E55', screen: ScreenJ },
    { text: "Coco Baleadas", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t1.6435-9/42716286_2144075459244554_1165425262507065344_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_ohc=pyq1nYYASiYAX_eVu3E&_nc_ht=scontent.fsap8-1.fna&oh=00_AfC-Mwl6QNbnpKY_gHuAFGZr0Zpkq_zXw2Ff78aAOYsZmA&oe=64C16D0F', screen: ScreenK },
   
  
  
  
  ];

  const data2 = [
    { key: '1', value: 'Recomendados' },
    { key: '2', value: "Wendy's" },
    { key: '3', value: 'Pizza Hut' },
    { key: '4', value: 'Chesters Chiken' },
    { key: '5', value: 'Papa Johns' },
    { key: '6', value: 'Expresso Americano' },
    { key: '7', value: 'Paradise Burger' },
    { key: '8', value: 'Hot Wings' },
    { key: '9', value: 'Sushi Totemo' },
    { key: '10', value: 'Restaurante Mario Chávez' },
    { key: '11', value: 'El Gaucho' },
    { key: '12', value: 'Coco Baleadas' },
    
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
