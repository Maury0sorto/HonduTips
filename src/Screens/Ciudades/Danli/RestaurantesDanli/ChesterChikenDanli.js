
import React, { useState, useRef } from 'react';
import { StyleSheet, View, Dimensions, Linking, Text, Alert, TouchableOpacity, ScrollView, Image , Modal} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Swiper from "react-native-web-swiper";
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageViewer from 'react-native-image-zoom-viewer';


// INICIO DE PARA PONER PINES DENTRO DEL MAPA 
const locationsData = [
  {
    title: "Chester's chicken Honduras",
    
    latitude:     14.027780257489546, 
    longitude:  -86.57916358959082,
  },

  // Agrega más ubicaciones aquí si lo deseas
];
// FIN DE FUNCIO  DE PARA PONER PINES DENTRO DEL MAPA 




export default function ChesterChikeDanli() {  // Este solo es el nomre que se usa para importar esta screen dentro de otro o mandar a llamar

  // INICIO DE CODIGO PARA AGREGAR BOTONCITO CON MENU 
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const images = [
    {
      url: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/334929114_919390706070943_7825416367176551350_n.jpg?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFuTlyX0yS-jKAvv2V0Hee72LTZNmjgtqLYtNk2aOC2okNNzF5k1OmPBeZRMNWA0pS2EKGAGK9s_SJx-XfXqg49&_nc_ohc=CM_21Ea93xcAX9n_z81&_nc_ht=scontent.fsap8-1.fna&oh=00_AfAymu5THrYpI-oMJJ-JGLn1V9HXSbzmbQzeCV58cpPmvQ&oe=64AA7174',
    },
  ];

   // FIN DE CODIGO PARA AGREGAR BOTONCITO CON MENU 




   // INICIO CODIGO PARA EL PUNNTO CENTRAL DEL MAPA DE LA UBICACION
  const mapRef = useRef(null);
  const initialRegion = {
    latitude:    14.027780257489546, 
    longitude:  -86.57916358959082,
    latitudeDelta: 0.01,    //ENTRE NUMEROS MAS GRANDES MAS ZOOM DE LA VISTIA INICIAL DEL MAPA
    longitudeDelta: 0.01,  //ENTRE NUMEROS MAS GRANDES MAS ZOOM DE LA VISTIA INICIAL DEL MAPA
  };
  // FIN CODIGO PARA EL PUNNTO CENTRAL DEL MAPA DE LA UBICACION





  // INICIO DE CODIGO PARA REDIRIGIR A LA APP GE GOOGLE MAPS, CON MENSAJE DE ALERTA INCLUIDO
  const openGoogleMaps = (latitude, longitude) => {
    Alert.alert(
      'Redirigiendo a Google Maps',
      '¿Estás de acuerdo en abrir Google Maps?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Sí',
          onPress: () => {
            const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
            Linking.openURL(url);
          },
        },
      ],
      { cancelable: false }
    );
  };
  // FIN DE CODIGO PARA REDIRIGIR A LA APP GE GOOGLE MAPS, CON MENSAJE DE ALERTA INCLUIDO




  // INICIO DE CODIO DE BOTONES DE ZOOM DEL MAPA
  const handleZoomIn = () => {
    const region = {
      latitude: initialRegion.latitude,
      longitude: initialRegion.longitude,
      latitudeDelta: initialRegion.latitudeDelta * 0.5,
      longitudeDelta: initialRegion.longitudeDelta * 0.5,
    };
    mapRef.current.animateToRegion(region, 500);
    
  };

  const handleZoomOut = () => {
    const region = {
      latitude: initialRegion.latitude,
      longitude: initialRegion.longitude,
      latitudeDelta: initialRegion.latitudeDelta * 3,
      longitudeDelta: initialRegion.longitudeDelta * 3,
    };
    mapRef.current.animateToRegion(region, 500);
  };
  // FIN DE CODIO DE BOTONES DE ZOOM DEL MAPA



  
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Chester's chicken</Text>
        <View style={styles.containerSwipers}>
          <View style={styles.swiperContainer}>
            <Swiper
              horizontal
              loop
              timeout={-3.5}
              controlsProps={{
                dotActiveStyle: { backgroundColor: "red" },
              }}
            >
                 <View style={styles.slide}>
                <Image style={styles.image} source={{ uri: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/350131989_160326323540404_1772882171638190604_n.jpg?_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHWzNfPjNEiigEhq5XN9SlpIHFEu961iAkgcUS73rWICZmjVO1cOK6htx3Q9SVON8V9qKoYpg8QR6Dq8fGObeVU&_nc_ohc=6NG72xeivfYAX8Bxv-D&_nc_ht=scontent.fsap8-1.fna&oh=00_AfAFJACJcRhd9AuZExqgJH0KZB2s6OiwCxrVRkjXlHLFuQ&oe=64AABBFC' }} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.image} source={{ uri: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/342348156_195642043243437_2094563496219094790_n.jpg?stp=dst-jpg_s417x417&_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeEEc93te5SPgniIfsHfKJDMmIiRxpShYRWYiJHGlKFhFV0nQzkiquGL4fDB9o15M-ipuXlRu5xiWhfXB3Ya5C0E&_nc_ohc=hALt9d6ViJoAX9FOuaW&_nc_ht=scontent.fsap8-1.fna&oh=00_AfDbs2sg5E4y8JqEVUR6OM1CRu1L6lT94ktx-S_AHmom_g&oe=64A9EB6B' }} />
              </View>
             
  
            </Swiper>
          </View>
        </View>


                


<View style={styles.container}>
      <Text style={styles.menuText}>MENU</Text>

      <View style={styles.buttonContainer3}>
        <TouchableOpacity activeOpacity={1} onPress={toggleModal}>
          <Image
            source={{ uri: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t39.30808-6/334929114_919390706070943_7825416367176551350_n.jpg?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFuTlyX0yS-jKAvv2V0Hee72LTZNmjgtqLYtNk2aOC2okNNzF5k1OmPBeZRMNWA0pS2EKGAGK9s_SJx-XfXqg49&_nc_ohc=CM_21Ea93xcAX9n_z81&_nc_ht=scontent.fsap8-1.fna&oh=00_AfAymu5THrYpI-oMJJ-JGLn1V9HXSbzmbQzeCV58cpPmvQ&oe=64AA7174' }}
            style={styles.imagen}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.scheduleHeaderText}>HORARIOS DE ATENCION</Text>
      <View style={styles.scheduleContainer}>
        <View style={styles.scheduleItem}>
          <Icon name="clock-o" size={20} color="#000" style={styles.scheduleIcon} />
          <Text style={styles.scheduleText}>Lun-Dom: 8:00 AM - 9:00 PM</Text>
        </View>
      </View>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ImageViewer
          imageUrls={images}
          onCancel={toggleModal}
          enableSwipeDown={true}
          renderIndicator={() => null}
          renderHeader={() => (
            <TouchableOpacity style={styles.closeButtonContainer3} onPress={toggleModal}>
              <Icon name="times" size={20} color="#fff" />
            </TouchableOpacity>
          )}
          renderFooter={() => null}
        />
      </Modal>
    </View>


        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Linking.openURL('https://www.chesterschicken.com/');
            }}
          >
             <Icon name="globe" size={20} color="white" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Sitio Web</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Linking.openURL('tel: +50427631716');
            }}
          >
             <Icon name="phone" size={20} color="white" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Contactar</Text>
          </TouchableOpacity>
        </View>
              
        <View style={styles.mapContainer}>
          <MapView ref={mapRef} style={styles.map} initialRegion={initialRegion} scrollEnabled={false}>
            {locationsData.map((location, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
                onPress={() =>
                  openGoogleMaps(location.latitude, location.longitude)
                }
              >
                <Callout>
                  <View>
                    <Text>{location.title}</Text>
                  </View>
                </Callout>
              </Marker>
            ))}
          </MapView>
          <View style={styles.buttonContainer2}>
            <TouchableOpacity style={styles.zoomButton} onPress={handleZoomIn}>
              <Text style={styles.zoomButtonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.zoomButton} onPress={handleZoomOut}>
              <Text style={styles.zoomButtonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}



// CODIGO DE ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 10,
  },
  mapContainer: {
    aspectRatio: 16 / 9,
    width: Dimensions.get('window').width * 0.8,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 40,
  },
  map: {
    flex: 1,
  },
  containerSwipers: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
  swiperContainer: {
    aspectRatio: 16 / 9,
    width: "95%",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: -45,
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(20, 20, 200, 0.3)",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#00BCE4',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIcon: {
    marginRight: 5,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }, 
  buttonContainer2: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  zoomButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  zoomButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },



  // Esttilos de menu y horarios
  container4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 40,
 
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 40,
  },
  buttonContainer3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagen: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  scheduleHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  scheduleContainer: {
    marginLeft: 10,
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  scheduleIcon: {
    marginRight: 5,
  },
  scheduleText: {
    color: '#000',
  },
  closeButtonContainer3: {
    position: 'absolute',
    top: 30,
    right: 30,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },

  //fin de estilos de menu y horarios


});
