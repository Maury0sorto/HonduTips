import React, { useState, useRef } from 'react';
import { StyleSheet, View, Dimensions, Linking, Text, Alert, TouchableOpacity, ScrollView, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Swiper from "react-native-web-swiper";

const locationsData = [
  {
    title: "Me Late Boutique",
 
    latitude:      14.0249585452758, 
    longitude:  -86.56558869538962,
  },

  // Agrega más ubicaciones aquí si lo deseas
];

export default function HotelMeLateBoutiqueDanli() {
  const mapRef = useRef(null);
  const initialRegion = {
    latitude:      14.0249585452758, 
    longitude:  -86.56558869538962,
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
        <Text style={styles.title}>Hotel Me Late Boutique</Text>
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
                <Image style={styles.image} source={{ uri: 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/184599458.jpg?k=054c46ad8f255480130bc581414dd42a6d60268bf0bb5503f991bca07c37195c&o=' }} />
              </View>
              <View style={styles.slide}>
                <Image style={styles.image} source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/94/cf/20/20200105-223127-largejpg.jpg' }} />
              </View>
             
             
            </Swiper>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Linking.openURL('https://www.facebook.com/people/Me-Late-Boutique-Hotel/100077196074867/');
            }}
          >
            <Text style={styles.buttonText}>Visitar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Linking.openURL('tel: 8846-8790');
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
