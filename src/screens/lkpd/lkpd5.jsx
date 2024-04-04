import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import bimbi from '../../assets/images/bimbi.png';
import membaca from '../../assets/images/membaca-ungu.png';
import bersepeda from '../../assets/images/bersepeda-ungu.png';
import menggambar from '../../assets/images/menggambar-ungu.png';
import menggambarImage from '../../assets/images/menggambar-image.jpeg';
import {Background} from '../../components';
import {normalize} from '../../utils/normalize';

export default function Lkpd5({navigation}) {
  const bodyContent = (
    <View style={styles.container}>
      <Image
        source={bimbi}
        style={{
          width: 150,
          height: 150,
          position: 'absolute',
          left: -60,
          top: 10,
          transform: [{scaleX: -1}],
        }}
      />
      <View style={{display: 'flex', alignItems: 'center'}}>
        <Image
          source={menggambarImage}
          style={{
            width: normalize(200),
            height: normalize(150),
            resizeMode: 'cover',
          }}
        />
        <Text style={styles.text}>Apa nama hobi di atas?</Text>
        <Pressable
          onPress={() => navigation.navigate('InCorrect', {next: 'Lkpd6'})}>
          <Image source={membaca} style={styles.imageButton} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('InCorrect', {next: 'Lkpd6'})}>
          <Image source={bersepeda} style={styles.imageButton} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Correct', {next: 'Lkpd6'})}>
          <Image source={menggambar} style={styles.imageButton} />
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
    fontSize: 25,
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
