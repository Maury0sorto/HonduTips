import React, { useState, useRef } from 'react';
import { StyleSheet, View, Dimensions, Linking, Text, Alert, TouchableOpacity, ScrollView, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Swiper from "react-native-web-swiper";

const locationsData = [
  {
    title: 'Banco de Occidente Centro',
 
    latitude:    14.032949438071917, 
    longitude:  -86.5703632738162,
  },

  {
    title: 'Banco de Occidente ',
 
    latitude:    14.028905703143225, 
    longitude:  -86.57113915197448,
  },
  
  // Agrega más ubicaciones aquí si lo deseas
];

export default function BancoProamericaDanli() {
  const mapRef = useRef(null);
  const initialRegion = {
    latitude:    14.030717912457645, 
    longitude: -86.57116334667776,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
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
        <Text style={styles.title}>Banco Proamerica</Text>
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
                <Image style={styles.image} source={{ uri: 'https://www.promerica.fi.cr/media/548874/banco-promerica-logo.jpg' }} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.image} source={{ uri: 'https://www.bancopromerica.com/noticias/media/1181/foto_720x455.jpg?mode=crop&anchor=center' }} />
              </View>
             
             
            </Swiper>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Linking.openURL('https://www.bancodeoccidente.hn/');
            }}
          >
            <Text style={styles.buttonText}>Visitar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Linking.openURL('tel: 22904100');
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
    marginTop: 80,
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
    marginTop: 50,
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
});
