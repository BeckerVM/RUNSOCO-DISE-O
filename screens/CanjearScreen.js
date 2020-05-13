import React, { useState } from 'react'
import { 
  View, 
  Text, 
  ScrollView, 
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

const CanjearScreen = () => {
  return (
    <View style={{ flex: 1 }}>
    <Text style={{ color: '#00a680', marginTop: wp(4), fontSize: hp(2.8), alignSelf: 'center' }}>Canjea uno de estos productos</Text>
      <Text style={{ marginTop: wp(2), fontSize: hp(2.5), alignSelf: 'center' }}>Tienes 0 puntos</Text>
      <FlatList
        style={{ marginTop: hp(3) }}
        data={[
          { id: '1', title: '1 Hamburguesa', points: '100', imgUrl: 'https://images.emojiterra.com/google/android-10/512px/1f354.png' },
          { id: '2', title: '1 Pizza', points: '100', imgUrl: 'https://images.vexels.com/media/users/3/157222/isolated/preview/53798bcd7054e4feaef568a5cf49574b-etiqueta-de-pizza-by-vexels.png' },
          { id: '3', title: '1 Papas', points: '100', imgUrl: 'https://i.pinimg.com/originals/89/5d/e1/895de17e7a4902306e7fae661f32155b.png' }
        ]} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => 
          <Card item={item} />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
 
})

export default CanjearScreen