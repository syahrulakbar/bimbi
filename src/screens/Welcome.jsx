import React, {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import icon from '../assets/images/icon.png';
import start from '../assets/images/mulai.png';
import soundOn from '../assets/images/sound-on.png';
import soundOff from '../assets/images/sound-off.png';
import Sound from 'react-native-sound';
import {Background, Title} from '../components';

export default function Welcome({navigation}) {
  const [isPlaying, setIsPlaying] = useState(true);
  Sound.setCategory('Playback');
  const [sound, setSound] = useState(null);

  useEffect(() => {
    let soundObject = new Sound('sound.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // Autoplay the music when component mounts
      soundObject.play();
      setIsPlaying(true);
    });

    setSound(soundObject);

    // Cleanup function to stop and release the sound
    return () => {
      if (soundObject) {
        soundObject.stop();
        soundObject.release();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  const bodyContent = (
    <View style={styles.imageContainer}>
      <View style={styles.button}>
        <Pressable onPress={toggleMusic}>
          <Image
            source={isPlaying ? soundOff : soundOn}
            style={styles.soundButton}
          />
        </Pressable>
      </View>
      <Image source={icon} style={styles.icon} />
      <Title />
      <Pressable onPress={() => navigation.navigate('MainMenu')}>
        <Image source={start} style={styles.imageButton} />
      </Pressable>
    </View>
  );
  return <Background bodyContent={bodyContent} />;
}

const styles = StyleSheet.create({
  icon: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageButton: {
    width: 250,
    height: 100,
    resizeMode: 'contain',
  },
  soundButton: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  button: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
  },
});
