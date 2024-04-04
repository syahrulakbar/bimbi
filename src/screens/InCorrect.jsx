import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import bimbi from '../assets/images/bimbi.png';
import incorrect from '../assets/images/incorrect.png';
import lose from '../assets/images/next-lose.png';
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
          left: 10,
          zIndex: 1,
          transform: [{scaleX: -1}],
        }}
      />
      <View style={{display: 'flex', alignItems: 'center', gap: 15}}>
        <Image
          source={incorrect}
          style={{width: 200, height: 200, resizeMode: 'contain'}}
        />
        <Text style={styles.title}>Salah</Text>
        <Text style={styles.text}>
          Sayang sekali, kamu mendapat 0 poin. Tetap semangat
        </Text>
        <Pressable onPress={() => navigation.navigate(next)}>
          <Image source={lose} style={styles.imageButton} />
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
    color: 'red',
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
    color: 'red',
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
