import React from 'react';

import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import home from '../../assets/images/home.png';
import bimbi from '../../assets/images/bimbi.png';
import kanan from '../../assets/images/kanan.png';
import {Background} from '../../components';

export default function ModulAjar1({navigation}) {
  const bodyContent = (
    <View style={styles.container}>
      <Image
        source={bimbi}
        style={{
          width: 250,
          height: 250,
          position: 'absolute',
          right: -70,
          bottom: 70,
        }}
      />
      <View style={{height: '70%'}}>
        <Text style={styles.title}>Definisi Hobi</Text>
        <Text
          style={
            styles.text
          }>{`    Definisi hobi menurut Kamus Besar Bahasa Indonesia adalah kegemaran, kesenangan istimewa pada waktu luang, bukan pekerjaan utama. Hobi bisa juga diartikan dengan kegiatan rekreasi yang dilakukan pada waktu luang untuk menenangkan pikiran seseorang. Jadi, benar-benar hanya untuk kesenangan saja.`}</Text>
        <Text style={styles.title}>Manfaat Hobi</Text>
        <Text style={styles.text}>
          • Mengurangi rasa lelah{'\n'}• Memperoleh kepuasan batin{'\n'}•
          Memperoleh hiburan{'\n'}• Mengisi waktu luang
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          position: 'absolute',
          bottom: -10,
        }}>
        <Pressable onPress={() => navigation.navigate('MainMenu')}>
          <Image source={home} style={styles.imageButton} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('ModulAjar2')}>
          <Image source={kanan} style={styles.imageButton} />
        </Pressable>
      </View>
    </View>
  );
  return <Background bodyContent={bodyContent} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    gap: 5,
  },
  title: {
    fontSize: 35,
    color: '#BDE2EB',
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    fontFamily: 'Blueberry',
    textAlign: 'left',
  },
  abs: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  text: {
    textAlign: 'justify',
    fontSize: 20,
    color: 'black',
    fontFamily: 'Handineat',
  },
  imageButton: {
    width: 250,
    height: 100,
    resizeMode: 'contain',
  },
  button: {
    position: 'absolute',
    bottom: 0,
  },
});
