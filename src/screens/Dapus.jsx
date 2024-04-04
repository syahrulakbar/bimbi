import React from 'react';
import {Background} from '../components';
import {Image, Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import home from '../assets/images/home.png';
import bimbi from '../assets/images/bimbi.png';

export default function Dapus({navigation}) {
  const bodyContent = (
    <View style={styles.container}>
      <Image
        source={bimbi}
        style={{
          width: 150,
          height: 150,
          position: 'absolute',
          right: -20,
          top: 20,
        }}
      />
      <View style={{height: '70%'}}>
        <Text style={styles.title}>Daftar Pustaka</Text>
        <Text
          style={styles.text}
          onPress={() =>
            Linking.openURL(
              'https://bipa.kemdikbud.go.id/filebelajar/124Sahabatku_Indonesia_untuk_Anak_Sekolah_Tingkat_B-1.pd',
            )
          }>
          https://bipa.kemdikbud.go.id/filebelajar/124Sahabatku_Indonesia_untuk_Anak_Sekolah_Tingkat_B-1.pdf
        </Text>
        <Text
          style={styles.text}
          onPress={() =>
            Linking.openURL(
              'https://ajaib.co.id/tokoh-wirausaha-yang-sukses-karena-hobi-ini-daftarnya',
            )
          }>
          https://ajaib.co.id/tokoh-wirausaha-yang-sukses-karena-hobi-ini-daftarnya
        </Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate('MainMenu')}
        style={styles.button}>
        <Image source={home} style={styles.imageButton} />
      </Pressable>
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
    gap: 5,
  },
  title: {
    fontSize: 45,
    color: '#BDE2EB',
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    fontFamily: 'Blueberry',
    textAlign: 'center',
  },
  text: {
    textAlign: 'justify',
    fontSize: 20,
    color: 'blue',
    margin: 10,
    fontFamily: 'Handineat',
  },
  imageButton: {
    width: 250,
    height: 100,
    resizeMode: 'contain',
  },
  button: {
    position: 'absolute',
    bottom: 20,
  },
});
