import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import home from '../../assets/images/home.png';
import bimbi from '../../assets/images/bimbi.png';
import kanan from '../../assets/images/kanan.png';
import {Background} from '../../components';
import {normalize} from '../../utils/normalize';

export default function Lkpd1({navigation}) {
  const bodyContent = (
    <View style={styles.container}>
      <Image
        source={bimbi}
        style={{
          width: 100,
          height: 100,
          position: 'absolute',
          right: -30,
          top: 80,
        }}
      />
      <View
        style={{display: 'flex', alignItems: 'center', gap: 15, height: '70%'}}>
        <Text style={styles.title}>
          LKPD I {'\n'}Praktik Tanya Jawab dengan Teman
        </Text>
        <Text style={styles.text}>
          {`Nama Peserta Didik:
1. …………………………………
2. …………………………………
Perhatikan contoh dialog berikut ini!
Dita: “Halo,Rani.”
Rani: “Hai, Dita.”
Dita: “Apa hobi kamu?”
Rani: “Hobi saya berenang.”
Dita: “Kapan biasanya kamu berenang?”
Rani: “Aku berenang setiap hari sabtu dan minggu.”
Dita: “Dimana kamu berenang?”
Rani: “Aku berenang di kolam renang dekat rumah.”
Dita: “Terimakasih.”
Rani: “Sama-sama.”

PETUNJUK PENUGASAN!
1. Buatlah kelompok beranggotakan 2 orang!
2. Lakukan tanya jawab seperti contoh di atas sesuai dengan hobi kalian!`}
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
        <Pressable onPress={() => navigation.navigate('Lkpd2')}>
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
    margin: 10,
    gap: 5,
  },
  title: {
    fontSize: 20,
    color: '#BDE2EB',
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    fontFamily: 'Blueberry',
    textAlign: 'center',
  },
  text: {
    fontSize: normalize(15),
    marginRight: 10,
    marginLeft: 10,
    color: 'black',
    textAlign: 'justify',
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
