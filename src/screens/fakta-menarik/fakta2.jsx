import React from 'react';

import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import kiri from '../../assets/images/kiri.png';
import bimbi from '../../assets/images/bimbi.png';
import kanan from '../../assets/images/kanan.png';
import {Background} from '../../components';
import {normalize} from '../../utils/normalize';

export default function Fakta2({navigation}) {
  const bodyContent = (
    <View style={styles.container}>
      <Image
        source={bimbi}
        style={{
          width: 100,
          height: 100,
          position: 'absolute',
          right: -30,
          top: 50,
        }}
      />
      <View style={{display: 'flex', alignItems: 'flex-start'}}>
        <Text style={styles.text}>
          {`2. Ahmad Zaky – Bukalapak
Saat kuliah di Institut Teknologi Bandung (ITB) jurusan Teknik Informatika, Ahmad Zaky memang hobi mengulik hal-hal yang berbau teknologi, termasuk web. Dikabarkan, Ahmad Zaky memang sudah memiliki ketertarikan pada bidang ini dari mulai bangkut sekolah.

Hobinya tersebut lalu berbuah menjadi sebuah situs jual beli online yang diberi nama Bukalapak. Keberadaan Bukalapak di Indonesia bisa disebut sebagai salah satu penanda berkembangnya industri digital di Indonesia.

Untuk membangun platform jual beli online ini juga tidak mudah. Beragam cara telah ia tempuh untuk bisa memperbesar nama Bukalapak. Selain itu, sebagai e-commerce, Bukalapak juga harus bersaing dengan banyak saingan berat seperti Tokopedia yang sudah terlebih dahulu menyandang status Unicorn atau Lazada yang berafiliasi dengan marketplace paling raksasa di China, Alibaba.

Namun perjuangan Zaky tidak berhasil. Pada awal Januari 2018, Bukalpak sukses menjadi perusahaan unicorn ke-4 di Indonesia.`}
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
        <Pressable onPress={() => navigation.navigate('Fakta1')}>
          <Image source={kiri} style={styles.imageButton} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Fakta3')}>
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
