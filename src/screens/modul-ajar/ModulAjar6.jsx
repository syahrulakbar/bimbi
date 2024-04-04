import React from 'react';

import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import home from '../../assets/images/home.png';
import bimbi from '../../assets/images/bimbi.png';
import kiri from '../../assets/images/kiri.png';
import {Background} from '../../components';
import {normalize} from '../../utils/normalize';

export default function ModulAjar6({navigation}) {
  const bodyContent = (
    <View style={styles.container}>
      <Image
        source={bimbi}
        style={{
          width: 100,
          height: 100,
          position: 'absolute',
          right: -20,
          top: 50,
        }}
      />
      <View style={{display: 'flex', alignItems: 'center', gap: 15}}>
        <Text style={styles.text}>
          {`Berikut merupakan salah satu contoh tanya jawab tentang hobi:
Kinan : “Halo, Nara.”
Nara   :” Halo, Kinan.”
Kinan :”Apa hobi anda?”
Nara   : “Hobi saya membaca novel.”
	(Kalimat ini digunakan pada awal paragraf)
Kinan : “Kapan biasanya anda membaca novel?’
Nara   : “Saya membaca novel ketika ada waktu luang.”
	(Kalimat ini digunakan pada kalimat kedua dalam sebuah paragraf)
Kinan  : “Dimana anda membaca novel?”
Nara    : “Saya membaca novel di Kamar saya.”
	(Kalimat ini digunakan pada kalimat ketiga dalam sebuah paragraf)
Kinan  : “Dengan siapa anda membaca novel?”
Nara    : “Saya membaca novel bersama kakak.”
	(Kalimat ini digunakan pada kalimat keempat dalam sebuah paragraf)
Kinan  :” Terima kasih.”
Nara    : “Sama-sama.”

Bagaimana cara menjadikan hasil tanya jawab untuk dijadikan sebuah teks deskripsi?
Contoh :
Membaca Novel
	Nama saya Kinan, saya memiliki teman bernama Nara, hobinya membaca novel. Biasanya, Nara membaca novel ketika ada waktu luang. Nara membaca novel di kamar bersama Kakaknya`}
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
        <Pressable onPress={() => navigation.navigate('ModulAjar5')}>
          <Image source={kiri} style={styles.imageButton} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('MainMenu')}>
          <Image source={home} style={styles.imageButton} />
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
    margin: 10,
    gap: 5,
  },
  title: {
    fontSize: 30,
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
  text: {
    textAlign: 'justify',
    fontSize: normalize(13),
    marginRight: 10,
    marginLeft: 10,
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
