import React, { useState } from 'react';
import { View, Text,  StyleSheet, TouchableOpacity, Image } from 'react-native';
import WeatherScreen from './screens/WeatherScreen';
import ClothScreen from './screens/ClothScreen';

 const App = () => {
  const [activeScreen, setActiveScreen] = useState('weather');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'Weather':
        return <WeatherScreen />;
      case 'Cloth':
        return <ClothScreen />;
      default:
        return <WeatherScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu2}>
        <Image style={styles.ImageSize} source={require('C:/Users/user/reactNative/Weather/screens/img/logo4.png')}/>
      </View>
      {renderScreen()}
      <View style={styles.menu1}>
        <TouchableOpacity onPress={() => setActiveScreen('Weather')}>
          <Image style={styles.iconsize} source={require('C:/Users/user/reactNative/Weather/screens/img/weatherbtn.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveScreen('Cloth')}>
          <Image style={styles.iconsize} source={require('C:/Users/user/reactNative/Weather/screens/img/clothbtn.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#5C6E91',
    paddingVertical: 10,
  },
  menu2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#5C6E91',
    paddingVertical: 10,
  },
  menuItem: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ImageSize: {
    width: 120,
    height: 40,
  },
  iconsize:{
    width: 60,
    height: 60,
  },
});

export default App;
