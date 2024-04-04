import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import kiri from '../../assets/images/kiri.png';
import bimbi from '../../assets/images/bimbi.png';
import kanan from '../../assets/images/kanan.png';
import {Background} from '../../components';
import {normalize} from '../../utils/normalize';

export default function Lkpd2({navigation}) {
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
      <View style={{display: 'flex', gap: 15, height: '70%'}}>
        <Text style={styles.title}>
          LKPD II {'\n'}Praktik Menyampaikan Hobi Teman
        </Text>
        <Text style={styles.text}>
          {`Nama Peserta Didik:
1. …………………………………
2. …………………………………
`}
        </Text>
        <Text style={[styles.text, {textAlign: 'center'}]}>Berenang</Text>
        <Text style={styles.text}>
          {`Nama saya Dita. Saya memiliki seorang teman bernama Rani. Dia mempunyai hobi berenang. Dia selalu berenang di hari sabtu dan minggu. Dia sering berenang di kolam renang dekat rumahnya.

Petunjuk Penugasan!
1. Buatlah paragraf singkat seperti contoh di atas!
2. Sampaikan hasil deskripsi tanya jawab tentang hobi teman di depan kelas!!`}
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
        <Pressable onPress={() => navigation.navigate('Lkpd1')}>
          <Image source={kiri} style={styles.imageButton} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Lkpd3')}>
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
    textAlign: 'left',
    fontSize: normalize(15),
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
