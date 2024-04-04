import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import bimbi from '../assets/images/bimbi.png';
import correct from '../assets/images/correct.png';
import win from '../assets/images/next-win.png';
import {Background} from '../components';

export default function Correct({route, navigation}) {
  const {next} = route.params;
  const bodyContent = (
    <View style={styles.container}>
      <Image
        source={bimbi}
        style={{
          width: 200,
          height: 200,
          position: 'absolute',
          top: 50,
          right: 10,
          zIndex: 1,
        }}
      />
      <View style={{display: 'flex', alignItems: 'center', gap: 15}}>
        <Image
          source={correct}
          style={{width: 200, height: 200, resizeMode: 'contain'}}
        />
        <Text style={styles.title}>Benar</Text>
        <Text style={styles.text}>Selamat, kamu mendapatkan 20 poin</Text>
        <Pressable onPress={() => navigation.navigate(next)}>
          <Image source={win} style={styles.imageButton} />
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
    fontSize: 40,
    color: 'green',
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
    fontSize: 20,
    marginRight: 10,
    marginLeft: 10,
    color: 'green',
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
