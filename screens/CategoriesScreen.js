import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'

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

const CategoriesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.logo}></Text>
      </View>
  
      <TouchableOpacity style={styles.containerBtn}>
        <Text style={{ fontSize: hp(2.2), color: '#00a680' }}>Elije una categoría</Text>
      </TouchableOpacity>
     
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
  containerBtn: {
    backgroundColor: '#fff',
    width: wp(70),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp(.8),
    paddingHorizontal: wp(2),
    marginBottom: hp(20),
    padding: wp(2.5), 
    paddingVertical: wp(3),
    justifyContent: 'center'
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
    ...shadow,
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