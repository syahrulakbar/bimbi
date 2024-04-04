import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import kiri from '../../assets/images/kiri.png';
import bimbi from '../../assets/images/bimbi.png';
import berkebun from '../../assets/images/berkebun-pink.png';
import berenang from '../../assets/images/berenang-pink.png';
import menari from '../../assets/images/menari-pink.png';
import berkebunImage from '../../assets/images/berkebun.jpeg';
import {Background} from '../../components';
import {normalize} from '../../utils/normalize';

export default function Lkpd4({navigation}) {
  const bodyContent = (
    <View style={styles.container}>
      <Image
        source={bimbi}
        style={{
          width: 200,
          height: 200,
          position: 'absolute',
          left: -60,
          top: 10,
          transform: [{scaleX: -1}],
        }}
      />
      <View style={{display: 'flex', alignItems: 'center'}}>
        <Text style={styles.title}>LKPD IV {'\n'}Latihan Menjawab Soal</Text>
        <Image
          source={berkebunImage}
          style={{
            width: normalize(200),
            height: normalize(150),
            resizeMode: 'cover',
          }}
        />
        <Text style={styles.text}>Apa nama hobi di atas?</Text>
        <Pressable
          onPress={() => navigation.navigate('InCorrect', {next: 'Lkpd5'})}>
          <Image source={berenang} style={styles.imageButton} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Correct', {next: 'Lkpd5'})}>
          <Image source={berkebun} style={styles.imageButton} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('InCorrect', {next: 'Lkpd5'})}>
          <Image source={menari} style={styles.imageButton} />
        </Pressable>
      </View>
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          position: 'absolute',
          bottom: -10,
        }}>
        <Pressable onPress={() => navigation.navigate('Lkpd3')}>
          <Image source={kiri} style={styles.imageButton} />
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
    fontSize: 25,
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
    textAlign: 'center',
    fontSize: normalize(20),
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
