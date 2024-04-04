import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import bimbi from '../../assets/images/bimbi.png';
import memancing from '../../assets/images/memancing-biru.png';
import menulis from '../../assets/images/menulis.png';
import menari from '../../assets/images/menari.png';
import menariImage from '../../assets/images/menari-2.jpeg';
import {Background} from '../../components';
import {normalize} from '../../utils/normalize';

export default function Lkpd6({navigation}) {
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
          source={menariImage}
          style={{
            width: normalize(200),
            height: normalize(150),
            resizeMode: 'cover',
          }}
        />
        <Text style={styles.text}>Apa nama hobi di atas?</Text>
        <Pressable
          onPress={() => navigation.navigate('Correct', {next: 'Lkpd7'})}>
          <Image source={menari} style={styles.imageButton} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('InCorrect', {next: 'Lkpd7'})}>
          <Image source={menulis} style={styles.imageButton} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('InCorrect', {next: 'Lkpd7'})}>
          <Image source={memancing} style={styles.imageButton} />
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
