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
            <Text style={{ color: '#fff' , fontSize: hp(2.2) }}>Mi pedido</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View>
            <View style={{ paddingVertical: wp(2), flexDirection: 'row', alignItems: 'center', borderBottomWidth: wp(.2), borderBottomColor: '#999'}}>
              <Text style={{ color: '#00a680', fontSize: hp(2.3), marginRight: wp(2) }}>
                CODIGO
              </Text>
              <Text style={{ fontSize: hp(2.2) }}>1</Text>
            </View>
            <View MENSAJE="COMIENZA LA TABLA, ESTO SOLO ES UN MENSAJE">
              <View MENSAJE="EL HEAD" style={{ flexDirection: 'row' }}>
                <Text style={[styles.headCol, { flex: 4}]}>Producto</Text>
                <Text style={styles.headCol}>Cantidad</Text>
                <Text style={styles.headCol}>Precio</Text>
              </View>
              <View MENSAJE="LA FILA SIN BODY :v" style={{ flexDirection: 'row', alignItems: 'center', marginBottom: wp(1) }}>
                <Image
                  style={{ width: wp(8), height: wp(8), resizeMode: 'cover', marginHorizontal: wp(1)}}
                  source={{ uri: 'https://elcomercio.pe/resizer/nIcDyuvfXa_Lh73jiU-sP_bLbFI=/980x528/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/3UCDCXD2CZCCLKHP6P57GPTAIY.jpg' }}
                />
                <Text style={[styles.bodyCol, { flex: 4}]}>Pizza grande $./45.00</Text>
                <Text style={styles.bodyCol}>1</Text>
                <Text style={styles.bodyCol}>70.00</Text>
              </View>
            </View>
            <View MENSAJE="DETALLE DE PEDIDO">
              <Text style={{ color: '#00a680', marginBottom: wp(1), fontSize: hp(1.9) }}>Detalle de Pago</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: wp(1) }}>
                <Text style={styles.text}>Pedido</Text> 
                <Text style={styles.text}>S./ 165</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: wp(1) }}>
                <Text style={styles.text}>Delivery</Text> 
                <Text>S./ 5</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: wp(1) }}>
                <Text style={styles.text}>Total a pagar</Text> 
                <Text style={styles.text}>S./ 175</Text>
              </View>
            </View>
            <View MENSAJE="INFORMACION DE PEDIDO">
              <Text style={{ color: '#00a680', marginBottom: wp(1), fontSize: hp(1.9) }}>Información del pedido</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: wp(1) }}>
                <Text style={styles.text}>Lugar</Text> 
                <Text style={styles.text}>Pizzeria EL HORCON</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: wp(1) }}>
                <Text style={styles.text}>Av. que te importa ctm</Text> 
                <Text style={styles.text}>S./ 5</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: wp(1) }}>
                <Text style={styles.text}>Estador</Text> 
                <Text style={styles.text}>No cancelado</Text>
              </View>
            </View>
          </View>
          <View style={styles.lineGreen}></View> 
          <View style={styles.lineBlue}></View> 
        </View>
        <View style={{ marginTop: wp(6), flexDirection: 'row', justifyContent: 'center', width: wp(95), alignSelf: 'center' }}>
          <TouchableOpacity style={[styles.btn, { backgroundColor: '#00a680', marginRight: wp(5) }]}>
            <Text style={{ color: '#fff' , fontSize: hp(2.2) }}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}


const PedidoScreen = () => {
   return (
    <View style={{ position: 'relative', flex: 1, paddingVertical: wp(1) }}>
      <FlatList 
        data={[
          { id: '1', title: 'Pedido 1' }
        ]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => 
          <Pedido />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: wp(95),
    ...shadow,
    padding: wp(3),
    borderRadius: wp(.5),
    position: 'relative',
    alignSelf: 'center',
    marginTop: wp(6)
  },
  lineBlue: { 
    width: wp(.4), backgroundColor: '#1B5050', height: wp(6),
    position: 'absolute',
    top: wp(-6),
    left: wp(45) 
  },
  lineGreen: { 
    position: 'absolute',
    width: wp(.4), backgroundColor: '#00a680', height: wp(6),
    bottom: wp(-6),
    left: wp(45) 
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

export default PedidoScreen