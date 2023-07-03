import React, { useState, useRef } from 'react';
import { StyleSheet, View, Dimensions, Linking, Text, Alert, TouchableOpacity, ScrollView, Image , Modal} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Swiper from "react-native-web-swiper";
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageViewer from 'react-native-image-zoom-viewer';


// INICIO DE PARA PONER PINES DENTRO DEL MAPA 
const locationsData = [
  {
    title: "Baleadas Yuli #1",
    
    latitude:     14.03477976351113,     
    longitude:  -86.57476914910964,
  },
  {
    title: "Baleadas Yuli Caseta",
    
    latitude:     14.024988787152777,      
    longitude:  -86.58648741698906,
  },
  // Agrega más ubicaciones aquí si lo deseas
];
// FIN DE FUNCIO  DE PARA PONER PINES DENTRO DEL MAPA 




export default function BaleadasYuliDanli() {  // Este solo es el nomre que se usa para importar esta screen dentro de otro o mandar a llamar

  // INICIO DE CODIGO PARA AGREGAR BOTONCITO CON MENU 
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const images = [
    {
      url: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t1.6435-9/97994305_1191133107723725_7843507887711191040_n.jpg?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF1LIWWsDzbvsas7rJcGie5zGyzancrwfbMbLNqdyvB9vti-SeMdI7aGvAA2-iD2rb09046F5693sOFyl2uA84f&_nc_ohc=l4ahEcvGkd4AX-co0XN&_nc_ht=scontent.fsap8-1.fna&oh=00_AfCr7bHos8XkCE8qxgkwqRtLYWLK6so9_nbNnlvrxz1YBQ&oe=64CA63F9',
    },
  ];

   // FIN DE CODIGO PARA AGREGAR BOTONCITO CON MENU 




   // INICIO CODIGO PARA EL PUNNTO CENTRAL DEL MAPA DE LA UBICACION
  const mapRef = useRef(null);
  const initialRegion = {
    
    latitude:     14.029979924399997,      
    longitude: -86.57972150714144,
    latitudeDelta: 0.03,    //ENTRE NUMEROS MAS GRANDES MAS ZOOM DE LA VISTIA INICIAL DEL MAPA
    longitudeDelta: 0.03,  //ENTRE NUMEROS MAS GRANDES MAS ZOOM DE LA VISTIA INICIAL DEL MAPA
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
        <Text style={styles.title}>Baleadas Yuli</Text>
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
                <Image style={styles.image} source={{ uri: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t1.6435-9/41680107_781316628705377_6753595576266260480_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHmuWrMaeNdOse8yz1orJmu0m7dcrfTRv_Sbt1yt9NG_30tcr0DlVuLfbhAtWngPSuFMc6bVJe6ox6tQX9t_u-E&_nc_ohc=EOkdquY4n9gAX9nwFtM&_nc_oc=AQm3cZEPc7Vvh49Gi-qvDo7YWpoL7yW-8gloyKtOG1V1UAo99FIRNzhkfSc4e1CC_5s&_nc_ht=scontent.fsap8-1.fna&oh=00_AfBnKWid7xhDJRl_5jtFmS25z3s2jD6cK_VCVFQq3kLkiA&oe=64CA594E' }} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.image} source={{ uri: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t1.6435-9/41736271_781323558704684_6579566945996111872_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFLHiHK2psuslpPt9zmSK7Tg5cc_2Om0kyDlxz_Y6bSTKIw5IJbBvbIBWje7SWCtOZ4ryPHY-FJ-RGiqKzbzAqS&_nc_ohc=7-QMxIlYE_8AX-OukIz&_nc_ht=scontent.fsap8-1.fna&oh=00_AfDhBvBtByNC3BbAw_8xIORxixnfxOgw1sYIrrRyP5H7TQ&oe=64CA79E6' }} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.image} source={{ uri: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t1.6435-9/173992000_1439750342861999_3931780308938198230_n.jpg?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE2LojO2DPRfG_yvYhJskeZQf-OV434TDJB_45XjfhMMno_jJetBJLHbbAchZ-vtVmZqGNikM0LsChNtdk5x8ok&_nc_ohc=02zPSnCycFwAX-eVwOE&_nc_ht=scontent.fsap8-1.fna&oh=00_AfARQ8SgAav_cGyjOkuhAmVsmlnZ-pmAtF_8VTZ2kEHMkg&oe=64CA80CB' }} />
              </View>
  
            </Swiper>
          </View>
        </View>


                


<View style={styles.container}>
      <Text style={styles.menuText}>MENU</Text>

      <View style={styles.buttonContainer3}>
        <TouchableOpacity activeOpacity={1} onPress={toggleModal}>
          <Image
            source={{ uri: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t1.6435-9/97994305_1191133107723725_7843507887711191040_n.jpg?_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF1LIWWsDzbvsas7rJcGie5zGyzancrwfbMbLNqdyvB9vti-SeMdI7aGvAA2-iD2rb09046F5693sOFyl2uA84f&_nc_ohc=l4ahEcvGkd4AX-co0XN&_nc_ht=scontent.fsap8-1.fna&oh=00_AfCr7bHos8XkCE8qxgkwqRtLYWLK6so9_nbNnlvrxz1YBQ&oe=64CA63F9' }}
            style={styles.imagen}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.scheduleHeaderText}>HORARIOS DE ATENCION</Text>
      <View style={styles.scheduleContainer}>
      <View style={styles.scheduleItem}>
          <Icon name="clock-o" size={20} color="#000" style={styles.scheduleIcon} />
          <Text style={styles.scheduleText}>Lun-Sab: 7:00 AM - 9:00 PM</Text>
        </View>
        <View style={styles.scheduleItem}>
          <Icon name="clock-o" size={20} color="#000" style={styles.scheduleIcon} />
          <Text style={styles.scheduleText}>Dom: Cerrado</Text>
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
              Linking.openURL('https://api.whatsapp.com/send?phone=50494824421&text=Hola%2C%20quiero%20ver%20el%20men%C3%BA.%20');
            }}
          >
             <Icon name="globe" size={20} color="white" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Sitio Web</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Linking.openURL('tel: +50494824421');
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
    textAlign:'center',
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
