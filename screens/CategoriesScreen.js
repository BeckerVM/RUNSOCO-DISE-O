import React from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

const CategoriesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.logo}></Text>
      </View>
      <View style={styles.containerSearch}>
        <Icon
          style={styles.iconSearch}
          name="search" 
        />
        <TextInput
          style={styles.inputSearch}
          placeholder="Buscar lo que necesitas"
          placeholderTextColor='#999'
        />
      </View>
      <View style={styles.containerMenu}>
        <View style={styles.containerMenuGrid}>
          <TouchableOpacity style={[styles.btnCategory, { marginTop: hp(1)}]}>
            <Image style={styles.imageMenu} source={{ uri: 'https://github.com/ciriusblb/runsocoAdmin/blob/master/img/logo-menu/checklist.png?raw=true' }} />
            <Text style={styles.textMenu}>PIZZERÍA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnCategory, { marginTop: hp(-10)}]}>
            <Image style={styles.imageMenu} source={{ uri: 'https://github.com/ciriusblb/runsocoAdmin/blob/master/img/logo-menu/checklist.png?raw=true' }} />
            <Text style={styles.textMenu}>POLLERÍA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnCategory, { marginTop: hp(1)}]}>
            <Image style={styles.imageMenu} source={{ uri: 'https://github.com/ciriusblb/runsocoAdmin/blob/master/img/logo-menu/checklist.png?raw=true' }} />
            <Text style={styles.textMenu}>FARMACIA</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerMenuGrid}>
          <TouchableOpacity style={[styles.btnCategory, { marginTop: hp(-5), width: wp(30), height: hp(16) }]}>
            <Image style={styles.imageMenu} source={{ uri: 'https://github.com/ciriusblb/runsocoAdmin/blob/master/img/logo-menu/delivery-man.png?raw=true' }} />
            <Text>ELIJA</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerMenuGrid}>
          <TouchableOpacity style={[styles.btnCategory, { marginTop: hp(-6)}]}>
            <Image style={styles.imageMenu} source={{ uri: 'https://github.com/ciriusblb/runsocoAdmin/blob/master/img/logo-menu/checklist.png?raw=true' }} />
            <Text style={styles.textMenu}>RESTAURANTS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnCategory, { marginTop: hp(5)}]}>
            <Image style={styles.imageMenu} source={{ uri: 'https://github.com/ciriusblb/runsocoAdmin/blob/master/img/logo-menu/checklist.png?raw=true' }} />
            <Text style={styles.textMenu}>LICORERÍAS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnCategory, { marginTop: hp(-6)}]}>
            <Image style={styles.imageMenu} source={{ uri: 'https://github.com/ciriusblb/runsocoAdmin/blob/master/img/logo-menu/checklist.png?raw=true' }} />
            <Text style={styles.textMenu}>PASTELERIA</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerFooter}>
        <Image style={styles.iconFooter} source={{ uri: 'https://github.com/thesevencode/Runsoco/blob/master/runsocoApp/assets/icon.png?raw=true' }} />   
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00a680'
  },
  containerHeader: {
    alignItems: 'center',
    paddingBottom: hp(2.2),
    paddingTop: hp(2.2)
  },
  logo: {
    fontSize: hp(2.8),
    fontWeight: 'bold',
    color: '#fff'
  },//BUSCADOR
  containerSearch: {
    backgroundColor: '#fff',
    width: wp(90),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp(2),
    paddingHorizontal: wp(2),
    marginBottom: hp(20)
  },
  inputSearch: {
    width: wp(80),
    paddingHorizontal: wp(2),
    fontSize: hp(2),
    paddingVertical: hp(1.5)
  },
  iconSearch: {
    fontSize: hp(1.8),
    color: '#999'
  },//MENU
  containerMenu: {
    paddingHorizontal: wp(2),
    marginBottom: hp(12)
  },
  containerMenuBottom: {
    marginTop: hp(-10)
  },
  containerMenuGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  btnCategory: {
    backgroundColor: '#fff', width: wp(23), height: hp(13), borderRadius: wp(80), alignItems: 'center', justifyContent: 'center' 
  },
  imageMenu: {
    width: wp(10),
    height: hp(6)
  },
  textMenu: {
    fontWeight: 'bold',
    fontSize: hp(1.4)
  },//FOOTER
  containerFooter: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: hp(1)
  },
  iconFooter: {
    height: hp(6),
    width: wp(6),
    resizeMode: 'contain'
  }
})

export default CategoriesScreen