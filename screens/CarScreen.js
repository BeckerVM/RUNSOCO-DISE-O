import React, { useState } from 'react'
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

const CarScreen = () => {
  /*const [tableHead, setTableHead] = useState([
    'Producto', 'Precio', 'Cantidad', 'Subtotal'
  ])
  const [tableData, setTableData] = useState([
    ['Pizza grande', '50.00', '1', '50.00'],
    ['Pizza mediana', '50.00', '1', '50.00'],
    ['Pizza pequeña', '50.00', '1', '50.00'],
    ['Pizza que te importa', '50.00', '1', '50.00']
  ])*/

  return (
    <View>
      <View style={{ marginVertical: wp(5), backgroundColor: '#ECF8F5', ...shadow, width: wp(60), padding: wp(7), alignItems: 'center', alignSelf: 'center' }}>
        <Text style={{ color: '#00a680', fontWeight: 'bold', fontSize: hp(2) }}>PIZZERÍA - EL HORCON</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="clock" style={{ fontSize: hp(2), marginRight: wp(2) }}/>
          <Text style={{ fontWeight: 'bold', fontSize: hp(1.8)}}>10:00 a.m a 09.00 p.m</Text>
        </View>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[
          { id: '1', title: 'Familiar' },
          { id: '2', title: 'Individual' },
          { id: '3', title: 'Especial' },
        ]}
        keyExtractor={item => item.id}
        renderItem={({ item }) => 
        <TouchableOpacity>
          <Text style={[{ paddingHorizontal: wp(3), fontSize: hp(1.8) }, item.id === '1' ? styles.linkActive : null]}>{ item.title }</Text>
        </TouchableOpacity>   
        }
      />
      <View style={{ marginBottom: wp(8), position: 'relative', padding: wp(3), paddingBottom: wp(10), backgroundColor: '#fff', ...shadow, marginTop: wp(3), width: wp(95), alignSelf: 'center' }}>
        <View MENSAJE="COMIENZA LA TABLA, ESTO SOLO ES UN MENSAJE">
          <View style={{ flexDirection: 'row', backgroundColor: '#00a680' }}>
            <Text style={styles.headCol}>PRODUCTO</Text>
            <Text style={styles.headCol}>PRECIO</Text>
            <Text style={styles.headCol}>CANTIDAD</Text>
            <Text style={styles.headCol}>SUBTOTAL</Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.bodyCol}>Pizza grande</Text>
              <Text style={styles.bodyCol}>70.00</Text>
              <View style={[styles.bodyCol, { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around' }]}>
                <TouchableOpacity
                  style={{ backgroundColor: '#00a680', width: wp(5), alignItems: 'center' }}
                >
                  <Text style={{ fontSize: hp(2.2), color: '#fff' }}>-</Text>
                </TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity
                  style={{ backgroundColor: '#00a680', width: wp(5), alignItems: 'center' }}
                >
                  <Text style={{ fontSize: hp(2.2), color: '#fff' }}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.bodyCol, { flexDirection: 'row', alignItems: 'flex-start'}]}>
                <Text style={{ marginRight: wp(2)}}>70.00</Text>
                <TouchableOpacity
                  style={{ backgroundColor: '#00a680', width: wp(8), alignItems: 'center', paddingVertical: wp(.9)  }}
                >
                  <Icon name="trash" style={{ fontSize: hp(1.8), color: '#fff' }}/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.bodyCol}>Pizza grande</Text>
              <Text style={styles.bodyCol}>70.00</Text>
              <Text style={styles.bodyCol}>1</Text>
              <Text style={styles.bodyCol}>70.00</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.bodyCol}>Pizza grande</Text>
              <Text style={styles.bodyCol}>70.00</Text>
              <Text style={styles.bodyCol}>1</Text>
              <Text style={styles.bodyCol}>70.00</Text>
            </View>
          </View>
        </View>
        <View 
          style={{ 
            position: 'absolute', width: wp(.4), backgroundColor: '#1B5050', height: wp(8),
            bottom: wp(-8),
            left: wp(12) 
          }}
          ></View>
        <View 
          style={{ 
            position: 'absolute', width: wp(.4), backgroundColor: '#00a680', height: wp(8),
            bottom: wp(-8),
            left: wp(82) 
          }}
          ></View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(5) }}>
        <TouchableOpacity style={{ backgroundColor: '#1B5050', padding: wp(2) }}>
          <Text style={{ color: '#fff' , fontSize: hp(1.8), fontWeight: 'bold' }}>CANCELAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#00a680', padding: wp(2) }}>
          <Text style={{ color: '#fff' , fontSize: hp(1.8), fontWeight: 'bold' }}>CONTINUAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  linkActive: {//COLOR PARA EL LINK DE CATEGORIAS
    color: '#00a680',
    fontWeight: 'bold',
  }, // LOS ESTILOS DE LAS COULUMNAS DE LAS TABLAS
  headCol: {
    flex: 1,
    padding: wp(2),
    fontWeight: 'bold',
    color: '#fff',
    fontSize: hp(1.8)
  },
  bodyCol: {
    flex: 1,
    padding: wp(2),
    fontSize: hp(1.8),
    borderBottomWidth: wp(.2),
    borderColor: '#ccc'
  }
})

export default CarScreen