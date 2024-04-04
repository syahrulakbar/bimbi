import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import home from '../../assets/images/home.png';
import bimbi from '../../assets/images/bimbi.png';
import kanan from '../../assets/images/kanan.png';
import {Background} from '../../components';
import {normalize} from '../../utils/normalize';

export default function Fakta1({navigation}) {
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
        <Text style={styles.title}>Fakta Menarik</Text>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'left',
            fontSize: 25,
          }}>{`Tokoh Wirausaha yang Sukses
Karena Hobi`}</Text>
        <Text style={{color: '#474747'}}>Sumber: ajaib.co.id</Text>
        <Text style={styles.text}>
          {`1. Nadiem Makarim – Gojek
Bukan, Nadiem Makarim bukan hobi jadi tukang ojek, melainkan dia hobi memanfaatkan layanan ojek konvensional sebagai alat transportasi dirinya. Dari hobinya ini, Nadiem mendapatkan banyak wawasan-wawasan menarik yang menjadi cikal bakal lahirnya ojek online.

Karena seringnya bertukar cerita dengan sopir ojek yang ia tumpangi, Nadiem Makarim mendapatkan pangkal masalah yang dirasakan oleh ojek pangkalan, yakni kesulitan mendapatkan penumpang. Oleh karena itu, para ojek pangkalan ini hanya bisa menunggu penumpang datang ke pangkalan, selain itu juga harus mengantre dengan ojek-ojek pangkalan yang lain.

Dari sanalah, Nadiem memikirkan bagaimana caranya penumpang bisa lebih mudah mendapatkan ojek, begitupun driver lebih mudah dan lebih banyak mendapatkan penumpang. Setelahnya, tercetuslah ide ojek online bernama Gojek yang ternyata menjadi solusi paling efektif.

Namun, untuk membuka usahanya ini, Nadiem tidak langsung sukses. Bahkan, anak muda ini mengaku ikut turun ke jalan untuk mengajak pengemudi ojek konvensional untuk beralih menjadi ojek online. Perjuangan Nadiem akhirnya terbayarkan.

Dimulai dari hanya memiliki 20 pengemudi, Gojek sekarang ini bahkan sudah berekspansi ke luar negeri. Jika dihitung-hitung, sudah ada ratusan ribu driver yang tergabung di perusahaan ini.`}
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
        <Pressable onPress={() => navigation.navigate('MainMenu')}>
          <Image source={home} style={styles.imageButton} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Fakta2')}>
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
    fontSize: normalize(35),
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
    textAlign: 'justify',
    fontSize: normalize(13),
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
