// ProfileScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions} from 'react-native';
import logo from 'C:/Users/user/reactNative/Weather/screens/img/logo1.png';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const ClothScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.weather}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true}>
        <View style={styles.day}>
          <Text style={styles.temp}>4도 이하 옷차림</Text>
          <Image style={styles.ImageSize} source={require('C:/Users/user/reactNative/Weather/screens/img/4c.png')}/>
          <Text style={styles.cloth}>패딩, 두꺼운 코트, 목도리,</Text>
          <Text style={styles.cloth}>기모 제품</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>5도 ~ 8도 옷차림</Text>
          <Image style={styles.ImageSize} source={require('C:/Users/user/reactNative/Weather/screens/img/5~8c.png')}/>
          <Text style={styles.cloth}>코트, 가죽자켓, 니트+플리스</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>9도 ~ 11도 옷차림</Text>
          <Image style={styles.ImageSize} source={require('C:/Users/user/reactNative/Weather/screens/img/9~11c.png')}/>
          <Text style={styles.cloth}>트렌치코트, 야상, 자켓</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>12도 ~ 16도 옷차림</Text>
          <Image style={styles.ImageSize} source={require('C:/Users/user/reactNative/Weather/screens/img/12~16c.png')}/>
          <Text style={styles.cloth}>기모후드티, 가디건, 니트/맨투맨</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>17도 ~ 19도 옷차림</Text>
          <Image style={styles.ImageSize} source={require('C:/Users/user/reactNative/Weather/screens/img/17~19c.png')}/>
          <Text style={styles.cloth}>후드티, 바람막이, 슬랙스</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>20도 ~ 22도 옷차림</Text>
          <Image style={styles.ImageSize} source={require('C:/Users/user/reactNative/Weather/screens/img/20~22c.png')}/>
          <Text style={styles.cloth}>셔츠, 7부바지, 면바지</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>23도 ~ 27도 옷차림</Text>
          <Image style={styles.ImageSize} source={require('C:/Users/user/reactNative/Weather/screens/img/23~27c.png')}/>
          <Text style={styles.cloth}>셔츠, 7부바지, 면바지</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>28도 이상 옷차림</Text>
          <Image style={styles.ImageSize} source={require('C:/Users/user/reactNative/Weather/screens/img/28c.png')}/>
          <Text style={styles.cloth}>민소매, 숏팬츠</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  city: {
    flex: 0.5,
    flexDirection: 'row',
    marginHorizontal: '10%',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
  },
  cityName: {
    color: 'black',
    fontSize: 38,
    fontWeight: '500',
  },
  weather: {flexGrow: 1, marginBottom: '1%'},
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    fontWeight: '600',
    fontSize: 40,
    color: '#424242',
  },
  desc: {
    fontSize: 60,
    color: 'black',
  },
  daytext: {
    fontSize: 50,
    color: 'black',
  },
  ImageSize: {
    margin: 20,
    width: 200,
    height: 200,
  },
  cloth: {
    marginHorizontal: 30,
    fontWeight: '600',
    fontSize: 25,
    color: 'gray',
    textAlign: 'center',
  }
});
export default ClothScreen; 