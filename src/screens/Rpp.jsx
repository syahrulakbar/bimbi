import React from 'react';
import {Background} from '../components';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import home from '../assets/images/home.png';
import {normalize} from '../utils/normalize';

export default function Rpp({navigation}) {
  const bodyContent = (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            fontSize: normalize(22),
            fontFamily: 'Handineat',
          }}>
          {`RENCANA PELAKSANAAN PEMBELAJARAN BAHASA INDONESIA UNTUK PENUTUR ASING`}
        </Text>
        <Text style={styles.text}>
          {`Program	: Bahasa Indonesia untuk Penutur Asing
Tingkat	: B1
Kompetensi	: Berbicara
Materi		: Hobi
Waktu		: 120 menit

A.	Standar Kompetensi
Dapat berpartisipasi secara langsung dalam diskusi tentang hobi atau kegiatan sehari-hari.
B.	Kompetensi Dasar
-	Dapat melakukan tanya jawab mengenai hobi teman
-	Dapat mempresentasikan hasil tanya jawab mengenai hobi teman di depan kelas
C.	Indikator
Setelah mengikuti pembelajaran ini, diharapkan pemelajar dapat:
-	Memiliki kemampuan tanya jawab tentang hobi teman
-	Memiliki kemampuan untuk menyampaikan hasil tanya jawab yang telah dilakukan
`}
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 10,
        }}>
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
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  text: {
    textAlign: 'justify',
    fontSize: normalize(15),
    color: 'black',
    margin: 12,
    fontFamily: 'Handineat',
  },
  imageButton: {
    width: 250,
    height: 100,
    resizeMode: 'contain',
  },
  button: {
    position: 'absolute',
    bottom: -10,
  },
});
