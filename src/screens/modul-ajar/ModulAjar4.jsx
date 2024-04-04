import React from 'react';

import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import kiri from '../../assets/images/kiri.png';
import bimbi from '../../assets/images/bimbi.png';
import kanan from '../../assets/images/kanan.png';
import {Background} from '../../components';
import {normalize} from '../../utils/normalize';

export default function ModulAjar4({navigation}) {
  const bodyContent = (
    <View style={styles.container}>
      <Image
        source={bimbi}
        style={{
          width: 200,
          height: 200,
          position: 'absolute',
          right: -50,
          bottom: 50,
        }}
      />
      <View
        style={{display: 'flex', alignItems: 'center', gap: 15, height: '70%'}}>
        <Text style={styles.title}>Cara Menyebutkan Hobi</Text>
        <Text style={styles.text}>
          {` Untuk menyebutkan hobi kita bisa menggunakan kata-kata dibawah ini :
a) Saya suka…………
b) Hobi saya………….
Contoh :
1. Saya suka mendengarkan musik
Dalam menyebutkan hobi pada contoh di atas kata “dengar” terdapat kata imbuhan me(N)-kan yang melekat pada predikat fungsinya untuk memperlihatkan objek.
me(N) + dengar + kan = mendengarkan

2. Hobi saya melukis
Dalam menyebutkan hobi pada contoh di atas kata “lukis” terdapat kata imbuhan me- yang merupakan awalan membentuk kata dasar menjadi kata kerja.`}
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
        <Pressable onPress={() => navigation.navigate('ModulAjar3')}>
          <Image source={kiri} style={styles.imageButton} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('ModulAjar5')}>
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
    fontSize: normalize(27),
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
    fontSize: normalize(17),
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
