import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Ionicons } from '@expo/vector-icons';



import HospitalGabrielaAlvaradoDanli from './SaludDanli/HospitalGabrielaAlvaradoDanli';
import IHSSDanli from './SaludDanli/IHSSDanli';
import IMSSDanli from './SaludDanli/IMSSDanli';
import CentroMedicoQuirurgicoDeOriendeDanli from './SaludDanli/CentroMedicoQuirurgicoDeOrienteDanli';
import CentroMedicoNavarroEspinalDanli from './SaludDanli/CentroMedicoNavarroEspinalDanli';
import CEMEDDanli from './SaludDanli/CEMEDDanli';


const ScreenA = ({ text, mostrarBotonAnterior }) => {
  return (
    <View style={styles.componentContainer}>
      <TouchableHighlight
        style={styles.backButton}
        underlayColor="#FFFF"
        onPress={mostrarBotonAnterior}
      >
        <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
       
      </TouchableHighlight>
      <HospitalGabrielaAlvaradoDanli/>
   
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
      <IHSSDanli/>
     
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
      <CentroMedicoQuirurgicoDeOriendeDanli/>
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
      <CentroMedicoNavarroEspinalDanli/>
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
        <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
      </TouchableHighlight>
      <CEMEDDanli/>
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
        <>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backButtonIcon} />
      <Text style={styles.backButtonText}>Regresar</Text>
    </>
      </TouchableHighlight>
      <CentroMedicoNavarroEspinalDanli/>
    </View>
  );
}; 




const ClinicasDanli = () => {
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
    { text: "Hospital Gabriela Alvarado", image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/280668186_533030501614511_7278109461792763589_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cjn0dXL9edgAX_LVSxz&_nc_ht=scontent.fsap8-1.fna&oh=00_AfBWZYysP-_quUNpzNRID8pv5Vcunw0XoYzuWbJwonsitQ&oe=64A76203',  screen: ScreenA },
    { text: 'IHSS Danli', image: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/275555531_7247746151932117_8739330950694517292_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ttGGKZ6pwuEAX_5bbhM&_nc_ht=scontent.fsap8-1.fna&oh=00_AfCBlmPjx4LeELnTGLk_cqeow0RXYaSs3PaDPNga1ULf9Q&oe=64A75EB4', screen: ScreenB },
    { text: 'Centro Medico Quirurgico De Oriente', image: 'https://i.imgur.com/h2bmzh4.jpg', screen: ScreenC },
    { text: 'Centro Médico Navarro Espinal', image: 'https://i.imgur.com/h2bmzh4.jpg', screen: ScreenD },
    { text: 'CEMED', image: 'https://i.imgur.com/h2bmzh4.jpg', screen: ScreenF },
    { text: 'Clínica Psicológica IntegraMente', image: 'https://i.imgur.com/h2bmzh4.jpg', screen: ScreenB },
    { text: 'Clinicas Medicas Danli', image: 'https://i.imgur.com/h2bmzh4.jpg', screen: ScreenB },
    { text: "Clínica Médica Ferrera'S", image: 'https://i.imgur.com/h2bmzh4.jpg', screen: ScreenB },
    { text: 'Clinica Dr. Salvador Moncada', image: 'https://i.imgur.com/h2bmzh4.jpg', screen: ScreenB },
    { text: 'Clinica Dental Mayorquin', image: 'https://i.imgur.com/h2bmzh4.jpg', screen: ScreenB },
    { text: 'C&D Dental', image: 'https://i.imgur.com/h2bmzh4.jpg', screen: ScreenB },
    

  ];

  const data2 = [
    { key: '1', value: 'Recomendadas' },
    { key: '2', value: "Hospital Gabriela Alvarado" },
    { key: '3', value: 'IHSS Danli' },
    { key: '4', value: 'Centro Medico Quirurgico De Oriente' },
    { key: '5', value: 'Centro Médico Navarro Espinal' },
    { key: '6', value: 'CEMED' },
    { key: '7', value: 'Clínica Psicológica IntegraMente' },
    { key: '8', value: 'Clinicas Medicas Danli' },
    { key: '9', value: "Clínica Médica Ferrera'S" },
    { key: '10', value: 'Clinica Dr. Salvador Moncada' },
    { key: '11', value: 'Clinica Dental Mayorquin' },
    { key: '12', value: 'C&D Dental' },
    
    
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



    flexDirection: 'row',
    alignItems: 'center',

  },
  backButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
});

export default ClinicasDanli;
