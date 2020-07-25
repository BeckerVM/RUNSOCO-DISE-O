import React from 'react'
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const FormRegister = () => (
  <View style={styles.form}>
    <View style={styles.containerInput}>
      <Text style={styles.textForm}>Nombre</Text>
      <TextInput  style={styles.input}/>
    </View>
    <View style={styles.containerInput}>
      <Text style={styles.textForm}>Correo electrónico</Text>
      <TextInput  style={styles.input}/>
    </View>
    <View style={styles.containerInput}>
      <Text style={styles.textForm}>Contraseña</Text>
      <TextInput  style={styles.input}/>
    </View>
    <TouchableOpacity style={styles.btnForm}>
      <Text style={styles.textBtnForm}>Registrarse</Text>
    </TouchableOpacity>
  </View>
)

const AutenticationScreen = () => {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.containerTop}>
        <Image style={[styles.image, { top: wp(6), left: wp(7) }]} source={require('../images/pizza2.png')}/>
        <Image style={[styles.image, { top: wp(20), left: wp(15) }]} source={require('../images/pollo1.png')}/>
        <Image style={[styles.image, { top: wp(42), left: wp(6) }]} source={require('../images/farmacia.png')} />
        <Image style={[styles.image, { top: wp(6), right: wp(7) }]} source={require('../images/plato.png')} />
        <Image style={[styles.image, { top: wp(20), right: wp(17) }]} source={require('../images/torta.png')}/>
        <Image style={[styles.image, { top: wp(42), right: wp(10) }]} source={require('../images/ensalada.png')} />
        <Image style={[styles.image, { top: wp(19), left: wp(40)}, { width: wp(15), height: wp(15) }]} source={require('../images/wpp.png')} />
        <Image  style={styles.logo} source={require('../images/runsoco.png')} />
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.menu}>
          <TouchableOpacity style={[styles.link]}><Text style={styles.textLink}>Login</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.link, { borderBottomWidth: wp(.5), borderColor: '#fff'}]}><Text style={styles.textLink}>Registro</Text></TouchableOpacity>
        </View>
        <FormRegister />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#daf2ec'
  },
  containerTop: {
    backgroundColor: '#fff',
    height: hp(48),
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative'
  },
  logo: {
    height: wp(55),
    width: wp(55),
    resizeMode: 'contain',
    marginBottom: wp(-2.9),
    marginLeft: wp(3)
  },
  image: {
    width: wp(13),
    height: wp(13),
    position: 'absolute',
    resizeMode: 'contain'
  },
  menu: {
    backgroundColor: '#00a680',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  link: {
    padding: wp(4),
    width: wp(27),
    alignItems: 'center'
  },
  textLink: {
    color: '#fff',
    fontSize: hp(2.2)
  },
  //ESTILOS FORMULARIOS
  textForm: {
    color: '#0b2856',
    fontSize: hp(2.2),
    marginBottom: wp(1)
  },
  input: {
    borderBottomWidth: wp(.3),
    borderBottomColor: '#a8c0ba',
    height: wp(8),
    color: '#0b2856',
    fontSize: hp(2.2)

  },
  containerInput: {
    marginBottom: wp(2)
  },
  form: {
    padding: wp(6),
    paddingHorizontal: wp(10)
  },
  btnForm: {
    backgroundColor: '#00a680',
    alignSelf: 'center',
    width: wp(50),
    alignItems: 'center',
    marginTop: wp(4),
    borderRadius: wp(1),
    padding: wp(2),
  },
  textBtnForm: {
    color: '#fff',
    fontSize: hp(2.2)
  }
})

export default AutenticationScreen