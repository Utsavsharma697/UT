import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home';
import Login from './Components/Home';
import container from './Components/Home';
import Addlocation from './Components/AddLocations';
import Plan from './Components/plan';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  

    return (
      <Plan />
    );
  }




  
  
