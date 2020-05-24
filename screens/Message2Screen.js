import React, { useState } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Modal,
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

const Modal1 = ({ modalOpen, setModalOpen }) => {

  const [changeContent, setChangeContent] = useState(false)// solo es para cambiar el contenido del modal

  return (
    <Modal transparent animationType="fade" visible={modalOpen}>
      <View style={{ backgroundColor: 'rgba(0, 0, 0, .4)', width: wp(100), height: hp(100), justifyContent: 'center' }}>
        <View style={{ backgroundColor: '#fff', alignSelf: 'center', borderWidth: wp(1), borderColor: '#00a680', width: wp(80), padding: wp(4), borderRadius: wp(2) }}>
          { /* ESTE ES EL CONTENIDO 1 CON DOS BOTONES*/
          changeContent === false && (
              <View>
                <Text style={{ fontSize: hp(2), marginBottom: wp(8), alignSelf: 'center' }}>Haz recibido tu producto?</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  <TouchableOpacity style={[{ width: wp(30), padding: wp(1), alignItems: 'center', borderRadius: wp(1) }, { backgroundColor: '#768092' }]}>
                    <Text style={{ fontSize: hp(2), color: '#fff' }}>No</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => setChangeContent(true) }
                    style={[{ width: wp(30), padding: wp(1), alignItems: 'center', borderRadius: wp(1) }, { backgroundColor: '#22b56e' }]}>
                    <Text style={{ fontSize: hp(2), color: '#fff' }}>Si</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          }

          { /* ESTE ES EL CONTENIDO 2 CON UN BOTON PARA CONFIRMAR*/
            changeContent === true && (
              <View>
                <Text style={{ fontSize: hp(2), marginBottom: wp(8), alignSelf: 'center' }}>Gracias por tu preferencia</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                  <TouchableOpacity 
                    onPress={() => setModalOpen(!modalOpen) }
                    style={[{ width: '100%', padding: wp(1), alignItems: 'center', borderRadius: wp(1) }, { backgroundColor: '#22b56e' }]}>
                    <Text style={{ fontSize: hp(2), color: '#fff' }}>Ok</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          }

        </View>
      </View>
    </Modal>
  )
}

//COMPONENTE PEDIDO - LA TERJETA
const Card = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <View MENSAJE="ESTA ES UN CARD">
        <View style={{ marginTop: wp(6), flexDirection: 'row', justifyContent: 'center', width: wp(95), alignSelf: 'center' }}>
          <View style={[styles.btn, { backgroundColor: '#00a680', marginRight: wp(5), borderRadius: 0 }]}>
            <Text style={{ color: '#fff' , fontSize: hp(2.2) }}>Mensaje</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{ alignItems: 'center' }}>
            <View style={{ backgroundColor: '#fff', borderRadius: wp(100), width: wp(30), height: wp(30), marginBottom: wp(8) }}>
              <Image 
                source={{ uri: 'https://in.godaddy.com/blog/wp-content/uploads//add-location-on-google-map-red-location-indicator-min.png' }}
                style={{ resizeMode: 'contain', width: '100%', height: '100%', borderRadius: wp(100) }}  
              />
            </View>
            <View style={{ width: wp(80), backgroundColor: '#ecf8f5', padding: wp(3), borderRadius: wp(2) }}>
              <Text style={{ fontSize: hp(2), textAlign: 'center', marginBottom: wp(2) }}>
                Estamos verificando su pedido esto puede tardar unos minutos
              </Text>
              <Text style={{ fontSize: hp(2), textAlign: 'center', marginBottom: wp(5) }}>
                Una vez verificado el runsoquer se comunicara cin usted llamandole o enviandole un mensaje de wpp.
              </Text> 
              <TouchableOpacity style={styles.btn} onPress={() => setModalOpen(!modalOpen)}>
                <Text style={styles.text}>Cerrar compra</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Modal1 
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
          <View style={styles.lineGreen}></View> 
        </View>
    </View>
  )
}


const Message2Screen = () => {
   return (
    <View style={{ position: 'relative', flex: 1, paddingVertical: wp(1) }}>
      <Card />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#b2b2b2',
    width: wp(90),
    ...shadow,
    paddingHorizontal: wp(3),
    borderRadius: wp(.5),
    position: 'relative',
    alignSelf: 'center',
    marginTop: wp(6),
    height: hp(80), justifyContent: 'center'
  },
  lineGreen: { 
    width: wp(.4), backgroundColor: '#00a680', height: wp(6),
    position: 'absolute',
    top: wp(-6),
    left: wp(43) 
  },
  btn: { paddingVertical: wp(2), paddingHorizontal: wp(10), alignItems: 'center', backgroundColor: '#00a680' },
  text: {
    fontSize: hp(2),
    color: '#fff'
  }
})

export default Message2Screen