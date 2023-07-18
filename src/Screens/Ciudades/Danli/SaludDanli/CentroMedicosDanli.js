import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Ionicons } from '@expo/vector-icons';



import HospitalGabrielaAlvaradoDanli from './CentrosMedicosDanli/HospitalGabrielaAlvaradoDanli';
import IHSSDanli from './CentrosMedicosDanli/IHSSDanli';
import CentroMedicoQuirurgicoDeOriendeDanli from './CentrosMedicosDanli/CentroMedicoQuirurgicoDeOrienteDanli';
import CentroMedicoNavarroEspinalDanli from './CentrosMedicosDanli/CentroMedicoNavarroEspinalDanli';
import CEMEDDanli from './CentrosMedicosDanli/CEMEDDanli';
import ClinicaPsicologicaIntegraMenteDanli from './CentrosMedicosDanli/ClinicaPsicologicaIntegraMenteDanli';
import ClinicaDrSalvadorMoncadaDanli from './CentrosMedicosDanli/ClinicaDrSalvadorMoncadaDanli';
import ClinicasMedicasDanli from './CentrosMedicosDanli/ClinicasMediasDanli';
import ClinicaMedicaFerrerasDanli from './CentrosMedicosDanli/ClinicaMedicaFerrerasDanli';


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
      <ClinicaPsicologicaIntegraMenteDanli/>
    </View>
  );
}; 

const ScreenI = ({ text, mostrarBotonAnterior }) => {
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
      <ClinicaDrSalvadorMoncadaDanli/>
    </View>
  );
}; 


const ScreenJ = ({ text, mostrarBotonAnterior }) => {
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
      <ClinicasMedicasDanli/>
    </View>
  );
}; 

const ScreenK = ({ text, mostrarBotonAnterior }) => {
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
      <ClinicaMedicaFerrerasDanli/>
    </View>
  );
}; 



const CentroMedicosDanli = () => {
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
    { text: "Hospital Gabriela Alvarado", image: 'https://i.imgur.com/mx9ujPo.png',  screen: ScreenA },
    { text: 'IHSS Danli', image: 'https://i.imgur.com/XJy61FQ.png', screen: ScreenB },
    { text: 'CEMED', image: 'https://i.imgur.com/WXijeHP.png', screen: ScreenF },
    { text: 'Clínica Psicológica IntegraMente', image: 'https://i.imgur.com/MyJNaQ0.png', screen: ScreenG },
    { text: 'Clinicas Medicas Danli', image: 'https://i.imgur.com/wPkpx22.png', screen: ScreenJ },
    { text: 'Clinica Dr. Salvador Moncada', image: 'https://i.imgur.com/BJXt1QL.png', screen: ScreenI },
    { text: "Clínica Médica Ferrera'S", image: 'https://i.imgur.com/h2bmzh4.jpg', screen: ScreenK },
    { text: 'Centro Medico Quirurgico De Oriente', image: 'https://i.imgur.com/h2bmzh4.jpg', screen: ScreenC },
    { text: 'Centro Médico Navarro Espinal', image: 'https://i.imgur.com/h2bmzh4.jpg', screen: ScreenD },
 
    

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

export default CentroMedicosDanli;
