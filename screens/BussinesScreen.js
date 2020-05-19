import React from 'react'
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  TextInput, 
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

//data
const data = [
  {
    id: '1',
    title: 'Pizzería El HORCON',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Pizzería EL HORNITO',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Pizzería ISRAEL',
  },
]

//COMPONENTE
const Bussine = ({ bussine }) => {
  return (
    <View style={{ backgroundColor: '#fff', marginBottom: wp(2), ...shadow, height: wp(60), position: 'relative' }}>
      {
        // FONDO TRANSPARENTE QUE SE ACTIVA AL ESTAR BLOQUEDO EL NEGOCIO
        bussine.id === '1' ? 
          <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: 999 }}></View>
        :
          null
      }
      <Image
        style={{ height: '70%', resizeMode: 'cover' }}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNk7BKyAVFtcsnP7ykx1xECUQ2v0-kJ3sNK2HLbIQl4LHtBxoB&usqp=CAU' }} 
      />
      <View style={{ padding: wp(2), height: '50%', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <View>
          <Text style={{ fontSize: hp(2), color: '#1B5050', fontWeight: 'bold', marginBottom: wp(1) }}>{ bussine.title }</Text>  
          <View style={{ flexDirection: 'row', marginBottom: wp(1) }}>
            <Icon name="star"  style={{ color: '#FFDC69', marginRight: wp(1)}}/>
            <Icon name="star"  style={{ color: '#FFDC69', marginRight: wp(1)}}/>
            <Icon name="star"  style={{ color: '#FFDC69', marginRight: wp(1)}}/>
            <Icon name="star"  style={{ color: '#FFDC69', marginRight: wp(1)}}/>
            <Icon name="star"  style={{ color: '#FFDC69', marginRight: wp(1)}}/>
          </View>
          <Text style={{ fontSize: hp(1.8), color: '#999'}}>10:00 a.m a 09:00 p.m</Text>
        </View>
        <TouchableOpacity style={{ padding: wp(2) }} onPress={() => alert('JR SE LA COME ENTERA')}>
          {
            bussine.id === '1' ?
              <Icon style={{ fontSize: hp(4), color: '#1B5050'}} name="lock"/>
            :
              <Icon style={{ fontSize: hp(4), color: '#1B5050'}} name="door-open"/>
          }
        </TouchableOpacity>
      </View> 
    </View>
  )
}

const BussinesScreen = () => {
  return (
    <View style={{ flex: 1}}>
      <View style={styles.containerSearch}>
        <Text style={{ color: '#1B5050', fontWeight: 'bold', fontSize: hp(2), marginBottom: wp(2) }}>PIZZERÍA</Text>
        <View style={{ borderRadius: wp(1), borderWidth: wp(.3), borderColor: '#ddd', width: wp(90), flexDirection: 'row', alignItems: 'center' }}>
          <TextInput 
            style={{ width: wp(85), paddingVertical: wp(2), paddingHorizontal: wp(3), fontSize: hp(2)}} 
            placeholder="Buscar"
          />
          <Icon 
            style={{ color: '#ddd', fontSize: hp(2), marginLeft: wp(-2) }}
            name="search"
          />
        </View>
      </View>
    
        <FlatList 
          style={{paddingHorizontal: wp(3) }}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => 
            <Bussine bussine={item} />
          }
        />
      
    </View>
  )
}

const styles = StyleSheet.create({
  containerSearch: {
    backgroundColor: '#fff',
    marginTop: hp(2),
    width: wp(96),
    alignSelf: 'center',
    ...shadow,
    alignItems: 'center',
    padding: wp(3),
    borderRadius: wp(2),
    marginBottom: wp(2)
  }
})

export default BussinesScreen