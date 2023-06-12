import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, Text, View, Dimensions, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {WeatherMap} from './WeatherMap';

const WEATHER_KEY = `KEY 입력`;
const GOOGLE_KEY = `KEY 입력`;
const {width: SCREEN_WIDTH} = Dimensions.get('window');

const GetLocation = async () => {
  Geolocation.getCurrentPosition(
    position => {
      const {
        coords: {latitude, longitude},
      } = position;
  
      GetWeater(latitude, longitude);
    },
    error => {
      console.log(error);
    },
    {
      accuracy: {
        android: 'high',
        ios: 'best',
      },
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
    },
  );
};

const GetWeater = async (latitude: number, longitude: number) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${WEATHER_KEY}&lang=kr&units=metric`,
  );
  const {daily} = await res.json();
  if (daily === undefined) {
    throw new Error('openweathermap ERR: result not Found');
    const googleResult = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_KEY}&language=ko`,
    );
      const {results} = await googleResult.json();
      setCity(results[0].address_components[0].long_name);
    
      setDays(daily);
  };
};

const RunLocationFunction = async (
  Func: (lat: number, lon: number) => void,
) => {
  return Geolocation.getCurrentPosition(
    position => {
      const {
        coords: {latitude, longitude},
      } = position;
      Func(latitude, longitude);
    },
    error => {
      throw new Error('Geolocation ERR:' + error);
    },
    {
      accuracy: {
        android: 'high',
        ios: 'best',
      },
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
    },
  );
};


const App = () => {
  const [days, setDays] = useState<WeatherMap[]>();
  const [city, setCity] = useState<string>();

  const GetWeater = async (latitude: number, longitude: number) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${WEATHER_KEY}&lang=kr&units=metric`,
    );
    const {daily} = await res.json();
    if (daily === undefined) {
      throw new Error('openweathermap ERR: result not Found');
    }
    setDays(daily);
  };

  const CheckPermission = async () => {
    try {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      console.log(result);
      if (result === 'granted') {
        RunLocationFunction(GetWeater);
      }
    } catch (e) {
      console.log(e);
    }
  };
    
  useEffect(() => {
    CheckPermission();
  }, []);
    

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>도시명</Text>
      </View>
      <ScrollView
        style={styles.weather}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        {!days || days.length == 0 ? (
          <></>
        ) : (
          days.map((day, i) => {
            return (
              <View key={i} style={styles.day}>
                <Text style={styles.desc}>{GetDate(day.dt)}</Text>
                <Text style={styles.temp}>{day.temp.day.toFixed(1)}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.desc}>{day.weather[0].description}</Text>
                </View>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEDED',
  },
  city: {
    flex: 0.5,
    flexDirection: 'row',
    marginHorizontal: '10%',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',

    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  cityName: {
    color: 'black',
    fontSize: 38,
    fontWeight: '500',
  },
  weather: {flexGrow: 1, marginBottom: '15%', color: 'black'},
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    fontWeight: '600',
    fontSize: 120,
    color: 'black',
  },
  desc: {
    fontSize: 60,
    color: 'black',
  },
});

export default App;