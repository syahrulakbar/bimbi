import React from 'react';

import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import home from '../../assets/images/home.png';
import bimbi from '../../assets/images/bimbi.png';
import kiri from '../../assets/images/kiri.png';
import {Background} from '../../components';
import {normalize} from '../../utils/normalize';

export default function Fakta3({navigation}) {
  const bodyContent = (
    <View style={styles.container}>
      <Image
        source={bimbi}
        style={{
          width: 100,
          height: 100,
          position: 'absolute',
          right: -30,
          top: 100,
        }}
      />
      <View style={{display: 'flex', alignItems: 'flex-start'}}>
        <Text style={styles.text}>
          {`3. Ferry Unardi – Traveloka 
Hampir Seperti Zaky, Ferry Unardi juga seorang yang hobi mengulik dunia teknik informatika. Apalagi ia pernah bekerja di perusahaan sekelas Microsoft selama beberapa tahun. Ketika mendirikan Traveloka, ia memiliki kisah yang menarik.

Siapa sangka, Traveloka ternyata berangkat dari kekesalan Ferry yang kesulitan untuk memesan tiket dari Boston, ke Seattle, lalu ke Padang. memuaskan ini ia rasakan karena dirinya harus memikirkan dulu rute yang dilalui.

Dari sana, ia berkeinginan membuat suatu platform yang bisa membuat pemesanan tiket pesawat menjadi lebih ringkas dan praktis. Berbekal dengan hobinya, ia lalu fokus untuk mengembangkan Traveloka meski harus membiayai kuliahnya di Harvard.

Pengorbanan Ferry terbayar. Karena, kini Traveloka berhasil menjadi salah satu e-commerce travel raksasa, baik untuk di Indonesia, ataupun di Asia Tenggara.`}
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
        <Pressable onPress={() => navigation.navigate('Fakta2')}>
          <Image source={kiri} style={styles.imageButton} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('MainMenu')}>
          <Image source={home} style={styles.imageButton} />
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
    color: '#BDE2EB',
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: {
      width: 5,
      height: 5,
    },
    fontFamily: 'Blueberry',
    textAlign: 'left',
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
