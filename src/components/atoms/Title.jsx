import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {normalize} from '../../utils/normalize';

export default function Title() {
  return (
    <View>
      <Text style={styles.title}>Bimbi</Text>
      <Text style={styles.desc}>Belajar Interaktif Mahasiswa Bipa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: normalize(50),
    color: '#F5D572',
    textShadowColor: '#79621E',
    textShadowRadius: 5,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    fontFamily: 'Blueberry',
    textAlign: 'center',
  },
  desc: {
    fontSize: normalize(20),
    color: '#79621E',
    textShadowColor: '#F5D572',
    textShadowRadius: 5,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    fontFamily: 'Handineat',
    textAlign: 'center',
  },
});
