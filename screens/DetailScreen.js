import React, { useState } from 'react'
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
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

const DetailScreen = () => {
 
   return (
    <ScrollView>
      <View style={{ borderRadius: wp(2), marginVertical: wp(5), backgroundColor: '#ECF8F5', ...shadow, width: wp(60), padding: wp(7), alignItems: 'center', alignSelf: 'center' }}>
        <Text style={{ color: '#00a680', fontWeight: 'bold', fontSize: hp(2) }}>PIZZERÍA - EL HORCON</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="clock" style={{ fontSize: hp(2), marginRight: wp(2) }}/>
          <Text style={{ fontWeight: 'bold', fontSize: hp(1.8)}}>10:00 a.m a 09.00 p.m</Text>
        </View>
      </View>
      <View style={styles.form}>
        <Text style={{ marginBottom: wp(3), color: '#00a680', fontSize: hp(1.8), fontWeight: 'bold' }} >DESCRIPCIÓN DE ENTREGA</Text>
        <TextInput
          style={[styles.input]}
          placeholder="Celular"
        />
        <TextInput
          style={[styles.input]}
          placeholder="Dirección"
        />
        <View style={styles.lineBlue}></View>
        <View style={styles.lineGreen}></View> 
      </View>
      <View style={[styles.form, { marginTop: wp(8) }]}>
        <Text style={{ marginBottom: wp(3), color: '#00a680', fontSize: hp(1.8), fontWeight: 'bold' }} >PAGO</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: wp(2) }}>
          <Text style={{ fontSize: hp(1.8) }}>Pedido: </Text>
          <Text style={{ fontSize: hp(1.8) }}>S/. 165</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: wp(2) }}>
          <Text style={{ fontSize: hp(1.8) }}>Delivery: </Text>
          <Text style={{ fontSize: hp(1.8) }}>S/. 5.5</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: wp(2) }}>
          <Text style={{ fontSize: hp(1.8), color: '#00a680', fontWeight: 'bold' }}>Total: </Text>
          <Text style={{ fontSize: hp(1.8), color: '#00a680' }}>S/. 170.5</Text>
        </View>
        <View style={styles.lineBlue}></View>
        <View style={styles.lineGreen}></View> 
      </View>
      <View style={{ marginTop: wp(8), flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(11) }}>
        <TouchableOpacity style={[styles.btn, { backgroundColor: '#1B5050' }]}>
          <Text style={{ color: '#fff' , fontSize: hp(1.8), fontWeight: 'bold' }}>CANCELAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: '#00a680' }]}>
          <Text style={{ color: '#fff' , fontSize: hp(1.8), fontWeight: 'bold' }}>CONTINUAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  //ESTILOS FORMULARIOS
  form: {
    backgroundColor: '#fff',
    width: wp(90),
    ...shadow,
    alignSelf: 'center',
    padding: wp(3),
    borderRadius: wp(1),
    position: 'relative'
  },
  input: {
    borderWidth: wp(.21),
    borderColor: '#d6ddf5',
    marginBottom: wp(2),
    paddingHorizontal: wp(2),
    paddingVertical: wp(1),
    fontSize: hp(1.8),
    borderRadius: wp(1)
  },
  lineBlue: { 
    position: 'absolute', width: wp(.4), backgroundColor: '#1B5050', height: wp(8),
    bottom: wp(-8),
    left: wp(18) 
  },
  lineGreen: { 
    position: 'absolute', width: wp(.4), backgroundColor: '#00a680', height: wp(8),
    bottom: wp(-8),
    left: wp(72) 
  },
  btn: { borderRadius: wp(1), width: wp(24), padding: wp(2), alignItems: 'center' }
})

export default DetailScreen