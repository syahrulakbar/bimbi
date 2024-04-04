import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import bimbi from '../../assets/images/bimbi.png';
import musik from '../../assets/images/musik.png';
import memasak from '../../assets/images/memasak.png';
import fotografi from '../../assets/images/fotografi.png';
import fotografiImage from '../../assets/images/fotografi-image.jpeg';
import {Background} from '../../components';
import {normalize} from '../../utils/normalize';

export default function Lkpd7({navigation}) {
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
          source={fotografiImage}
          style={{
            width: normalize(200),
            height: normalize(150),
            resizeMode: 'cover',
          }}
        />
        <Text style={styles.text}>Apa nama hobi di atas?</Text>
        <Pressable
          onPress={() => navigation.navigate('InCorrect', {next: 'Lkpd8'})}>
          <Image source={musik} style={styles.imageButton} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('InCorrect', {next: 'Lkpd8'})}>
          <Image source={memasak} style={styles.imageButton} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Correct', {next: 'Lkpd8'})}>
          <Image source={fotografi} style={styles.imageButton} />
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
