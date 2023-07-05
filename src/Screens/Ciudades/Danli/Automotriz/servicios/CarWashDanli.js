import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Ionicons } from '@expo/vector-icons';

import JirehDanli from './carwashJireh';
import BarPinDanli from './BarPinDanli';
import EvoAutoSpaDanli from './EvoAutoSpaDanli';
import AutoPitRomeroDanli from './AutoPitRomeroDanli';

 


const ScreenA = ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
    <TouchableHighlight
      style={styles.backButton}
      underlayColor="#0080ff"
      onPress={mostrarBotonAnterior} 
    >
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
    </TouchableHighlight>
    <JirehDanli/>
   
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
    </TouchableHighlight>
    <BarPinDanli/>
   
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
    </TouchableHighlight>
    <EvoAutoSpaDanli/>
   
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
       <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
    </TouchableHighlight>
    <AutoPitRomeroDanli/>
   
  </View>
  );
};





const CarWashDanli = () => {
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
    { text: "CarWash Jireh", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/341316165_727267185848390_9015755489032329918_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tERkz3TKimgAX8yDKke&_nc_ht=scontent.fsap8-1.fna&oh=00_AfA2IY34xk1HW5UikTkeDxVvmYfmu8zIO--86gBlZSH8QQ&oe=64A2EA5D',  screen: ScreenA },
    { text: "Llantiservicios Barpin", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/335969989_667936425338094_8331319845488467097_n.jpg?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-3TuBYC2Y8oAX_pR_Mv&_nc_ht=scontent.fsap8-1.fna&oh=00_AfBIkNrMiO8wSM-nQo1yxwXovZUwbCrjR1P8V-SNTNtHFA&oe=64A1F83C',  screen: ScreenB },
    { text: "Evo Auto Spa", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/301974136_430827812360788_6626560381477251656_n.png?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHOr5koC8javNcRPWKFI7UIfHYUApr6mUl8dhQCmvqZSbDA4WiFqVHwIxFF-a9WMAvZ4bwqLON5jYmnk3YSWkNG&_nc_ohc=n7BNCpB7kg4AX_cu_VO&_nc_ht=scontent.fsap8-1.fna&oh=00_AfDIvKGyonIMz6HZWvuGS8IiVH41dZacoBabfEVjnv5EfA&oe=64A9F9BF',  screen: ScreenC },
    { text: "Autopits Romero", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/279074552_116000814416661_4246678401940298988_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHjmITezfoY3-k5MgnM-NDP2-qOK2JGL5fb6o4rYkYvl85yYYslnfFt--8MZU883DXygeEC5V7RGiiYaqyNcHnk&_nc_ohc=eM-o2kAT4IoAX_imuVT&_nc_ht=scontent.fsap8-1.fna&oh=00_AfBXcYThl7jF7fqutO6sqzEzBDjUrTw9htQSXT00_wj8RQ&oe=64AB4964',  screen: ScreenD },
    
  ];

  const data2 = [
    { key: '1', value: 'Recomendados' },
    { key: '2', value: "CarWash Jireh" },
    { key: '3', value: "Llantiservicios Barpin" },
    { key: '4', value: "Evo Auto Spa" },
    { key: '5', value: "Autopits Romero" },
   
    
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
            noDataText="Lubricentro no disponible"
            searchPlaceholder="Busca tu Lubricentro"
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

    
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
});

export default CarWashDanli;
