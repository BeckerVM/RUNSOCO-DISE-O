import React, { useState } from 'react'
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  Image,
  FlatList
} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

//SOMBRA DE LAS TARJETAS
const shadow = {
  shadowColor: "#000",
  shadowOffset: {
  	width: 0,
	  height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.00, 
  elevation: 1
}

const Card = ({ item }) => {
  return (
    <View style={{ borderRadius: wp(4), padding: wp(3), position: 'relative', backgroundColor: '#fff', ...shadow, marginTop: wp(10),width: wp(70), alignSelf: 'center' }}>
      <Image
        style={{ width: wp(30), height: wp(30), resizeMode: 'cover', position: 'absolute', top: wp(-8), right: wp(-12) }} 
        source={{ uri: item.imgUrl }} 
      />
      <Text style={{ color: '#00a680', fontSize: hp(2.5), marginBottom: wp(2) }}>{ item.title }</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: wp(5) }}>
        <Icon name="star" style={{ color: 'yellow', fontSize: hp(2.4), marginRight: wp(2) }} />
        <Text style={{ fontSize: hp(2.2)}}>Necesitas 100 puntos</Text>
      </View>
      <TouchableOpacity style={{ borderRadius: wp(2), padding: wp(2),backgroundColor: '#00a680', width: wp(40), alignSelf: 'center' }}>
        <Text style={{ fontSize: hp(2.2), color: '#fff', fontWeight: 'bold', alignSelf: 'center' }}>Canjear :)</Text>
      </TouchableOpacity>
    </View>
  )
}

const ConfirmacionScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: '#00a680', marginTop: wp(4), fontSize: hp(2.8), alignSelf: 'center' }}>Ingrese sus datos</Text>  
      <View style={styles.form}>
        <Image
          style={{ width: wp(30), height: wp(30), resizeMode: 'cover', alignSelf: 'center', marginTop: wp(-18) }} 
          source={{ uri: 'https://images.emojiterra.com/google/android-10/512px/1f354.png' }} 
        />
        <Text style={{ color: '#00a680', fontSize: hp(2.5), alignSelf: 'center' }}>1 Hamburguesa</Text>
        <Text style={{ fontSize: hp(2.2), paddingHorizontal: wp(2), textAlign: 'center', paddingVertical: wp(3) }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </Text>
        <TextInput
          style={[styles.input]}
          placeholder="Celular"
        />
        <TextInput
          style={[styles.input]}
          placeholder="Dirección"
        />
        <View style={styles.lineGreen}></View> 
      </View>
      <View style={{ marginTop: wp(15) }}>
        <TouchableOpacity style={[styles.btn, { backgroundColor: '#00a680' }]}>
          <Text style={{ color: '#fff' , fontSize: hp(2.2), fontWeight: 'bold' }}>Canjear :(</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   //ESTILOS FORMULARIOS
   form: {
    backgroundColor: '#fff',
    width: wp(80),
    ...shadow,
    alignSelf: 'center',
    padding: wp(3),
    borderRadius: wp(4),
    position: 'relative',
    marginTop: wp(20),
  },
  input: {
    borderWidth: wp(.21),
    borderColor: '#d6ddf5',
    marginBottom: wp(2),
    paddingHorizontal: wp(2),
    paddingVertical: wp(1),
    fontSize: hp(1.8),
    borderRadius: wp(1),
    width: wp(60),
    alignSelf: 'center',
    fontSize: hp(2.2)
  },
  lineGreen: { 
    position: 'absolute', width: wp(.9), backgroundColor: '#00a680', height: wp(15),
    bottom: wp(-15),
    left: wp(41),
  },
  btn: { borderRadius: wp(1), width: wp(40), padding: wp(2), alignItems: 'center', alignSelf: 'center'  }
})

export default ConfirmacionScreen