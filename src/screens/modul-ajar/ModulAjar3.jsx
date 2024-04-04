import React from 'react';

import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import kiri from '../../assets/images/kiri.png';
import bimbi from '../../assets/images/bimbi.png';
import kanan from '../../assets/images/kanan.png';
import membaca from '../../assets/images/membaca.jpeg';
import menulis from '../../assets/images/menulis-image.jpeg';
import menari from '../../assets/images/menari-image.jpeg';
import {Background} from '../../components';
import {normalize} from '../../utils/normalize';

export default function ModulAjar3({navigation}) {
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
        style={{display: 'flex', alignItems: 'center', gap: 15, height: '60%'}}>
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
              source={membaca}
              style={{
                width: 150,
                height: 100,
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
            <Text style={styles.text}>Membaca</Text>
          </View>
          <Text
            style={{
              width: '55%',
              textAlign: 'justify',
              fontSize: normalize(12),
              color: 'black',
              fontFamily: 'Handineat',
            }}>
            Hobi membaca adalah kegiatan seseorang dalam menyerap informasi atau
            hiburan melalui teks yang terdapat dalam buku, majalah, artikel,
            atau berbagai media cetak maupun digital lainnya.
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
              source={menulis}
              style={{
                width: 150,
                height: 100,
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
            <Text style={styles.text}>Menulis</Text>
          </View>
          <Text
            style={{
              width: '55%',
              textAlign: 'justify',
              fontSize: normalize(12),
              color: 'black',
              fontFamily: 'Handineat',
            }}>
            Hobi menulis adalah kegiatan di mana seseorang mengekspresikan
            pikiran, ide, perasaan, atau pengalaman mereka melalui kata-kata
            yang tertulis.
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
              source={menari}
              style={{
                width: 150,
                height: 100,
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
            <Text style={styles.text}>Menari</Text>
          </View>
          <Text
            style={{
              width: '55%',
              textAlign: 'justify',
              fontSize: normalize(12),
              color: 'black',
              fontFamily: 'Handineat',
            }}>
            Hobi menari adalah ekspresi seni gerak tubuh yang diiringi oleh
            musik atau ritme tertentu.
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
        <Pressable onPress={() => navigation.navigate('ModulAjar2')}>
          <Image source={kiri} style={styles.imageButton} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('ModulAjar4')}>
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
