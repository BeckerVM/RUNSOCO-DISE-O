import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//<Image  source={require('../images/runsoco.png')} />

const HomeScreen = () => {
  return (
    <LinearGradient colors={['#0ba280', '#066952', '#012d24']} style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.circle}></View>
        <View style={styles.oval}></View>
        <Image  style={styles.logo} source={require('../images/runsoco.png')} />
        <View style={styles.card}>
          <Text style={{ fontSize: hp(2.2), paddingHorizontal: wp(5), textAlign: 'center', marginBottom: wp(4) }}>Pide lo que quieras desde la comodidad de tu casa.</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  circle: {
    backgroundColor: '#037369',
    width: wp(68),
    height: wp(68),
    borderRadius: wp(100),
    alignSelf: 'center',
    marginTop: wp(30)
  },
  oval: {
    alignSelf: 'center',
    width: wp(17),
    height: hp(5),
    backgroundColor: '#111f48',
    borderRadius: 100,
    transform: [
      { scaleX: 5 }
    ]
  },
  logo: {
    width: wp(85),
    height: wp(85),
    position: 'absolute',
    resizeMode: 'center',
    top: wp(29),
    left: wp(5)
  },
  card: {
    backgroundColor: '#fff',
    width: wp(90),
    alignSelf: 'center',
    marginTop: wp(15),
    paddingTop: wp(4),
    paddingHorizontal: wp(3),
    alignItems: 'center',
    borderRadius: wp(1)
  },
  btn: {
    backgroundColor: '#00a680',
    padding: wp(2),
    width: wp(35),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1),
    marginBottom: wp(3)
  },
  btnText: {
    color: '#fff',
    fontSize: hp(2.2)
  }
});


export default HomeScreen