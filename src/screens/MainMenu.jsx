import React from 'react';
import {Background, Title} from '../components';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import beranda from '../assets/images/beranda.png';
import rpp from '../assets/images/rpp.png';
import modul from '../assets/images/modul.png';
import fakta from '../assets/images/fakta.png';
import lkpd from '../assets/images/lkpd.png';
import dapus from '../assets/images/dapus.png';
import bimbi from '../assets/images/bimbi.png';

export default function MainMenu({navigation}) {
  const bodyContent = (
    <View style={styles.container}>
      <Image
        source={bimbi}
        style={{
          width: 200,
          height: 200,
          position: 'absolute',
          left: -50,
          bottom: 20,
          transform: [{scaleX: -1}],
        }}
      />
      <Title />
      <Pressable onPress={() => navigation.navigate('Welcome')}>
        <Image source={beranda} style={styles.imageButton} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Rpp')}>
        <Image source={rpp} style={styles.imageButton} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('ModulAjar1')}>
        <Image source={modul} style={styles.imageButton} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Fakta1')}>
        <Image source={fakta} style={styles.imageButton} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Lkpd1')}>
        <Image source={lkpd} style={styles.imageButton} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Dapus')}>
        <Image source={dapus} style={styles.imageButton} />
      </Pressable>
    </View>
  );
  return <Background bodyContent={bodyContent} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  imageButton: {
    width: 250,
    height: 70,
    resizeMode: 'contain',
  },
});
