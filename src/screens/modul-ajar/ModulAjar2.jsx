import React from 'react';

import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import kiri from '../../assets/images/kiri.png';
import bimbi from '../../assets/images/bimbi.png';
import kanan from '../../assets/images/kanan.png';
import renang from '../../assets/images/renang.jpeg';
import mancing from '../../assets/images/mancing.jpeg';
import bersepeda from '../../assets/images/bersepeda.jpeg';
import {Background} from '../../components';
import {normalize} from '../../utils/normalize';

export default function ModulAjar2({navigation}) {
  const bodyContent = (
    <View style={styles.container}>
      <Image
        source={bimbi}
        style={{
          width: 200,
          height: 200,
          position: 'absolute',
          left: -70,
          bottom: 50,
          transform: [{scaleX: -1}],
        }}
      />
      <View
        style={{display: 'flex', alignItems: 'center', gap: 15, height: '70%'}}>
        <Text style={styles.title}>Macam-macam Hobi</Text>
        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'flex-start',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={renang}
              style={{
                width: 150,
                height: 100,
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
            <Text style={styles.text}>Berenang</Text>
          </View>
          <Text
            style={{
              width: '55%',
              textAlign: 'justify',
              fontSize: normalize(12),
              color: 'black',
              fontFamily: 'Handineat',
            }}>
            Hobi berenang adalah kegiatan seseorang dalam aktivitas renang di
            air, baik di kolam renang, sungai, danau, atau laut.
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'flex-start',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={mancing}
              style={{
                width: 150,
                height: 100,
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
            <Text style={styles.text}>Memancing</Text>
          </View>
          <Text
            style={{
              width: '55%',
              textAlign: 'justify',
              fontSize: normalize(12),
              color: 'black',
              fontFamily: 'Handineat',
            }}>
            Hobi memancing adalah kegiatan seseorang dalam menangkap ikan
            menggunakan alat pancing seperti joran, kail, dan umpan.
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'flex-start',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={bersepeda}
              style={{
                width: 150,
                height: 100,
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
            <Text style={styles.text}>Bersepeda</Text>
          </View>
          <Text
            style={{
              width: '55%',
              textAlign: 'justify',
              fontSize: normalize(12),
              color: 'black',
              fontFamily: 'Handineat',
            }}>
            Hobi bersepeda adalah kegiatan seseorang dalam mengendarai sepeda di
            berbagai medan, mulai dari jalanan perkotaan hingga pegunungan.
          </Text>
        </View>
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
        <Pressable onPress={() => navigation.navigate('ModulAjar1')}>
          <Image source={kiri} style={styles.imageButton} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('ModulAjar3')}>
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
    alignItems: 'flex-start',
    margin: 10,
    gap: 5,
  },
  title: {
    fontSize: normalize(30),
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
    fontSize: normalize(20),
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
