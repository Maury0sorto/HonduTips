import React, { useState, useRef } from 'react';
import { StyleSheet, View, Dimensions, Linking, Text, Alert, TouchableOpacity, ScrollView, Image , Modal} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from "react-native-web-swiper";

const locationsData = [
    {
        title: "Evo Auto Spa #1",
        
        latitude:     14.03876515936268,   
        longitude:   -86.57607767970704,
      },
    {
    title: "Evo Auto Spa #2",
    
    latitude:     14.021091061055728,  
    longitude:   -86.57314140179405,
  },
 
  
   

  // Agrega más ubicaciones aquí si lo deseas
];

export default function EvoAutoSpaDanli() {
  const mapRef = useRef(null);
  const initialRegion = {
    latitude:     14.033795401709169,   
    longitude:   -86.57475286113117, 
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
  };

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

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Evo Auto Spa</Text>
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
                <Image style={styles.image} source={{ uri: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t1.6435-9/52344228_375592846553542_2811642719045156864_n.png?_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGmJ-ukmntVMxMc1teCrzbHvSnV3UB-HIq9KdXdQH4cirtAyYBVxwP6KxhW2ydIFER-l7__ZlPrf-NZoFe7zxMK&_nc_ohc=kNRZorqXKREAX8NsS4S&_nc_ht=scontent.fsap8-1.fna&oh=00_AfAdVehBScleEIb7gjluqdcgp8QRoCzF8IdctjE3zWU4QA&oe=64CD4DF7' }} />
              </View>
                 <View style={styles.slide}>
                <Image style={styles.image} source={{ uri: 'https://scontent.fsap8-1.fna.fbcdn.net/v/t1.6435-9/87373050_622334405212717_8801836458634641408_n.png?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEFmq1rKGDFmBPx-nIVnKqTwGWqUDVupVjAZapQNW6lWKbIp-fmQsZAenSRZhUQt0qxKeY88ynAjB1J35ysnqPv&_nc_ohc=rBFSMfidSxkAX9rb6TG&_nc_ht=scontent.fsap8-1.fna&oh=00_AfD_sP2xqtrrORkIk2lvaJ_Femr-g4xifl01bw-Rm5SNog&oe=64CD3E49' }} />
              </View>
              
             
             
            </Swiper>
          </View>
        </View>


        <Text style={styles.scheduleHeaderText}>HORARIOS DE ATENCION</Text>
      <View style={styles.scheduleContainer}>
        <View style={styles.scheduleItem}>
          <Icon name="clock-o" size={20} color="#000" style={styles.scheduleIcon} />
          <Text style={styles.scheduleText}>Dom-Vie: 7:00 AM - 5:00 PM</Text>
        </View>
        <View style={styles.scheduleItem}>
          <Icon name="clock-o" size={20} color="#000" style={styles.scheduleIcon} />
          <Text style={styles.scheduleText}>Sab: Cerrado</Text>
        </View>
      </View>
                

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Linking.openURL('https://www.facebook.com/profile.php?id=100063007192381');
            }}
          >
            <Text style={styles.buttonText}>Visitar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Linking.openURL('tel: +50496244320');
            }}
          >
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
