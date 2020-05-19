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
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Pizzería El HORCON',
  },
  {
    id: '2',
    title: 'Pizzería EL HORNITO',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Pizzería ISRAEL',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571eE9d72',
    title: 'Pizzería QUE TE IMPORTA',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571eD9d72',
    title: 'Pizzería LORI',
  },
]

//COMPONENTE
const Product = ({ product }) => {
  return (
    <View style={[
      { borderRadius: wp(1), paddingTop: wp(6), paddingBottom: wp(2), paddingHorizontal: wp(2.4), backgroundColor: '#fff', marginBottom: wp(2), ...shadow, position: 'relative' }
      , product.id ===  '2' ? styles.productSelected : null // PARA CAMBIAR EL COLOR CUANDO SE SELECCIONA EL PRODUCT
    ]}>
      <Text style={{ position: 'absolute', backgroundColor: '#00a680', color: '#fff', paddingVertical: wp(.3), paddingHorizontal: wp(3) }}>Combo</Text>
      <View style={{ flexDirection: 'row', marginBottom: wp(1) }}>
        <View style={{ width: wp(25), }}>
          <Image style={{ height: wp(24), width: '100%' }} source={{ uri: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg' }} />
        </View>
        <View style={{ paddingLeft: wp(3.5), flexDirection: 'row' }}>
          <View style={{ width: wp(50) }}>
            <Text style={{ color: '#00a680', fontSize: hp(2.3), fontWeight: 'bold', marginBottom: wp(1.5) }}>Pizza Linda Andahuaylina</Text>
            <Text style={{ fontSize: hp(1.9)}}>Queso, Tomate, Brocoli y Jr se la comedsaaaaaaaaaaaaaaaaaaaa</Text>
          </View>
          {
            product.id === '2' // CAMBIO DE BOTONES
            ?
              <TouchableOpacity style={styles.button}> 
                <Icon name="check"style={{ fontSize: hp(2.2), color: '#fff' }} /> 
              </TouchableOpacity>
            :
              <TouchableOpacity style={styles.button}> 
                <Icon name="plus"style={{ fontSize: hp(2.2), color: '#fff' }} /> 
              </TouchableOpacity>
          }
          
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{ color: '#00a680', fontSize: hp(2), fontWeight: 'bold' }}>$/. 70.00</Text>
      </View>
    </View>
  )
}

const ProductsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
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
          <Text style={[{ paddingHorizontal: wp(3), fontSize: hp(2) }, item.id === '1' ? styles.linkActive : null]}>{ item.title }</Text>
        </TouchableOpacity>   
        }
      />
      <FlatList 
        style={{ paddingHorizontal: wp(3), marginTop: wp(3) }}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => 
          <Product product={item} />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  linkActive: {//COLOR PARA EL LINK DE CATEGORIAS
    color: '#00a680',
    fontWeight: 'bold'
  },
  productSelected: {
    backgroundColor: '#8fd9b4'
  },
  button: { backgroundColor: '#00a680', alignSelf: 'flex-start', paddingHorizontal: wp(2.9), paddingVertical: wp(2.6), borderRadius: wp(100), marginLeft: wp(2), marginTop: wp(-3) }
})

export default ProductsScreen