import React, { useState, useRef } from 'react';
import { StyleSheet, View, Dimensions, Linking, Text, Alert, TouchableOpacity, ScrollView, Image , Modal} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Swiper from "react-native-web-swiper";
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageViewer from 'react-native-image-zoom-viewer';


// INICIO DE PARA PONER PINES DENTRO DEL MAPA 
const locationsData = [
  {
    title: "Jam's",
    
    latitude:     14.02818564105173,     
    longitude:  -86.5793573765547,
  },

  // Agrega más ubicaciones aquí si lo deseas
];
// FIN DE FUNCIO  DE PARA PONER PINES DENTRO DEL MAPA 




export default function JamsDanli() {  // Este solo es el nomre que se usa para importar esta screen dentro de otro o mandar a llamar

  // INICIO DE CODIGO PARA AGREGAR BOTONCITO CON MENU 
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const images = [
    {
      url: 'https://scontent.ftgu3-3.fna.fbcdn.net/v/t39.30808-6/325489464_912645923062525_3302857705633244128_n.jpg?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=LscLhagsXYoAX8UKSxA&_nc_oc=AQlyfomNoHphlZ8xLAHRaKBWZFqAEr8A-HC3VH-IhYLtpsyA8sstC6uUpR7MTSBbbJc&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfAkIr5HeR4q2dDa7eGlhO4nFN1AW9chUXmUiRfwucvUeg&oe=64A067B3',
    },
  ];

   // FIN DE CODIGO PARA AGREGAR BOTONCITO CON MENU 




   // INICIO CODIGO PARA EL PUNNTO CENTRAL DEL MAPA DE LA UBICACION
  const mapRef = useRef(null);
  const initialRegion = {
    
    latitude:     14.02818564105173,     
    longitude:  -86.5793573765547,
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
        <Text style={styles.title}>Jam's</Text>
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
                <Image style={styles.image} source={{ uri: 'https://scontent.ftgu3-3.fna.fbcdn.net/v/t39.30808-6/316036190_107054995563206_7852821314239240557_n.jpg?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=19026a&_nc_ohc=yWnYzUtE42sAX8OU0WH&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfDsg-zYQOWMaofr78U8jtEeg1mRXzXy6ssugrkMHD74Pw&oe=64A0D09E' }} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.image} source={{ uri: 'https://scontent.ftgu3-4.fna.fbcdn.net/v/t39.30808-6/341717412_606948524668305_631871127364554029_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=uEVcgqIQZ6YAX_26as4&_nc_ht=scontent.ftgu3-4.fna&oh=00_AfDMiVhtYNKW6WNZleuZXvqOpQJKCubG4wo1ba98ZIaw5g&oe=64A07F46' }} />
              </View>
             
  
            </Swiper>
          </View>
        </View>


                


<View style={styles.container}>
      <Text style={styles.menuText}>MENU</Text>

      <View style={styles.buttonContainer3}>
        <TouchableOpacity activeOpacity={1} onPress={toggleModal}>
          <Image
            source={{ uri: 'https://scontent.ftgu3-3.fna.fbcdn.net/v/t39.30808-6/325489464_912645923062525_3302857705633244128_n.jpg?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=LscLhagsXYoAX8UKSxA&_nc_oc=AQlyfomNoHphlZ8xLAHRaKBWZFqAEr8A-HC3VH-IhYLtpsyA8sstC6uUpR7MTSBbbJc&_nc_ht=scontent.ftgu3-3.fna&oh=00_AfAkIr5HeR4q2dDa7eGlhO4nFN1AW9chUXmUiRfwucvUeg&oe=64A067B3' }}
            style={styles.imagen}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.scheduleHeaderText}>HORARIOS DE ATENCION</Text>
      <View style={styles.scheduleContainer}>
        <View style={styles.scheduleItem}>
          <Icon name="clock-o" size={20} color="#000" style={styles.scheduleIcon} />
          <Text style={styles.scheduleText}>Dom-Vie: 11:00 AM - 9:00 PM</Text>
        </View>
        <View style={styles.scheduleItem}>
          <Icon name="clock-o" size={20} color="#000" style={styles.scheduleIcon} />
          <Text style={styles.scheduleText}>Sab: 11:00 AM - 9:30 PM</Text>
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
              Linking.openURL('https://www.facebook.com/profile.php?id=100087761167451&locale=es_LA');
            }}
          >
             <Icon name="globe" size={20} color="white" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Sitio Web</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Linking.openURL('tel: +50498147574');
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
