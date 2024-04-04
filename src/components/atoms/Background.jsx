import React from 'react';
import {ImageBackground} from 'react-native';
import background from '../../assets/images/background.jpeg';

export default function Background({...rest}) {
  const {bodyContent} = rest;
  return (
    <ImageBackground
      source={background}
      style={{width: '100%', height: '100%'}}>
      {bodyContent}
    </ImageBackground>
  );
}
