import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function BMW1SeriesSlideShow() {
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.topgear.com/sites/default/files/cars-car/image/2022/03/P90366835_highRes_the-bmw-118i-m-sport.jpg?w=1280&h=720'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://images.motor.es/galerias/coches-nuevos/bmw-serie-1/bmw-serie-1-16076-1627571012_60.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://media.torque.com.sg/public/2018/07/bmw-1-series-backseat.jpg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.largus.fr/images/2023-07/BMW-Serie-1-2024-kolesa-bd-2_0.jpg'}}  style={styles.image} />
      </View>
    </Swiper>
    <Text style={styles.on}/>
    
  <StatusBar style="auto" />      
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 75
  },
 
  slide: {
    alignItems: 'center',
  },
  image: {
    width: 370,
    height: 260,
    borderRadius: 5,
  }, 
 
  on: {
    marginBottom: -600

  }  
});
