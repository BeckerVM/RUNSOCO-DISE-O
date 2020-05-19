import React, { useState } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList,
  Image
} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

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

//COMPONENTE PEDIDO - LA TERJETA
const Pedido = () => {
  return (
    <View MENSAJE="ESTA ES UN CARD">
        <View style={{ marginTop: wp(6), flexDirection: 'row', justifyContent: 'center', width: wp(95), alignSelf: 'center' }}>
          <TouchableOpacity style={[styles.btn, { backgroundColor: '#00a680', marginRight: wp(5), borderRadius: 0 }]}>
            <Text style={{ color: '#fff' , fontSize: hp(2.2) }}>Pizzerías</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={{ alignItems: 'center', paddingBottom: wp(4), borderBottomColor: '#ccc', borderBottomWidth: wp(.1) }}>
            <Image 
              style={{ width: wp(50), height: wp(50), resizeMode: 'cover' }}
              source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5163018a-0966-493b-89f5-726cf8b37425/d2oynvl-6af63d90-c6d3-4416-9f94-94084dbc0f71.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNTE2MzAxOGEtMDk2Ni00OTNiLTg5ZjUtNzI2Y2Y4YjM3NDI1XC9kMm95bnZsLTZhZjYzZDkwLWM2ZDMtNDQxNi05Zjk0LTk0MDg0ZGJjMGY3MS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Hgly8kvIZ163lX-mDswzSo9umk0XH41yiJh7-jm7X-Q' }}
            />
          </View>
          <Text style={{ paddingVertical: wp(6), paddingHorizontal: wp(2), fontSize: hp(2), textAlign: 'center' }}>
            Esta vista la reutilizas para otra que igual, lalalalalalalalalalalallalalalalalalalalalalalalallalalalalalalalalalalalala
          </Text>
          <View style={styles.lineGreen}></View> 
          <View style={styles.lineBlue}></View> 
        </View>
        <View style={{ marginTop: wp(6), flexDirection: 'row', justifyContent: 'center', width: wp(85), alignSelf: 'center' }}>
          <TouchableOpacity style={[styles.btn, { backgroundColor: '#00a680', marginRight: wp(5) }]}>
            <Text style={{ color: '#fff' , fontSize: hp(2.2) }}>Pide lo que quieras</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}


const MessageScreen = () => {
   return (
    <View style={{ position: 'relative', flex: 1, paddingVertical: wp(1) }}>
      <Pedido />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: wp(85),
    ...shadow,
    borderRadius: wp(.5),
    position: 'relative',
    alignSelf: 'center',
    marginTop: wp(6)
  },
  lineBlue: { 
    width: wp(.4), backgroundColor: '#1B5050', height: wp(6),
    position: 'absolute',
    top: wp(-6),
    left: wp(41) 
  },
  lineGreen: { 
    position: 'absolute',
    width: wp(.4), backgroundColor: '#00a680', height: wp(6),
    bottom: wp(-6),
    left: wp(41) 
  },
  btn: { paddingVertical: wp(2), paddingHorizontal: wp(10), alignItems: 'center' },
  headCol: {
    flex: 1,
    padding: wp(1),
    fontSize: hp(1.9),
    color: '#00a680',
  },
  bodyCol: {
    flex: 1,
    fontSize: hp(1.9),
  },
  text: {
    fontSize: hp(1.9)
  }
})

export default MessageScreen