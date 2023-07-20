import { View, Text, Pressable, Image } from 'react-native';  //Importamos todo lo quee necesitemos
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import Registro from './Registro';

const Welcome = () => {
  const navigation = useNavigation();  //Esta funcion sirve para poder navegar 


  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.secondary, COLORS.primary]}>
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={require('../../assets/Dinero.png')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: 'absolute',
              top: 10,
              transform: [
                { translateX: 20 },
                { translateY: 50 },
                { rotate: '-15deg' },
              ],
            }}
          />

          <Image
            source={require('../../assets/Medicamento.png')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 20,
              position: 'absolute',
              top: -30,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: '-5deg' },
              ],
            }}
          />

          <Image
            source={require('../../assets/Gasolinera.png')}
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              position: 'absolute',
              top: 130,
              left: -50,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: '15deg' },
              ],
            }}
          />

          <Image
            source={require('../../assets/hero2.png')}
            style={{
              height: 200,
              width: 200,
              borderRadius: 20,
              position: 'absolute',
              top: 110,
              left: 100,
              transform: [
                { translateX: 50 },
                { translateY: 50 },
                { rotate: '-15deg' },
              ],
            }}
          />
        </View>

        {/* content  */}

        <View
          style={{
            paddingHorizontal: 22,
            position: 'absolute',
            top: 400,
            width: '100%',
          }}>
          <Text
            style={{
              fontSize: 50,
              fontWeight: 800,
              color: COLORS.white,
            }}>
            Hondu-Tips
          </Text>


          <View style={{ marginVertical: 22 }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                marginVertical: 4,
              }}>
              Directorio de negocios, ubicaciones
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}>
              y entretenimiento.
            </Text>
          </View>

          <Button
            title="HonduTips"
            onPress={() => navigation.navigate("HomeScreen")}
            style={{
              marginTop: 22,
              width: '100%',
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              marginTop: 12,
              justifyContent: 'center',
            }}>
            <Pressable onPress={() => navigation.navigate('HomeScreen')}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  fontWeight: 'bold',
                  textAlign: 'center', // Agregamos esta propiedad para centrar el texto
                }}
              >
                ¡Si quieres registrar tu negocio, haz click aquí!
              </Text>

            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
