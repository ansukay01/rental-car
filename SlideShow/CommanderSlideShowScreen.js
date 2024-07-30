import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function CommanderSlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://image.atvtrades.com/atv-Used-2014-Can-Am-Commander-XT-1000-Camo-ATVs-For-Sale-in-Arizona-120288869-5836a289549a3c13fb548bc5.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://image.atvtrades.com/atv-Used-2013-Can-Am-Commander-XT-1000-ATVs-For-Sale-in-Oklahoma-120320599-583d8aa7332c99479b19bf4a.jpg'}} style={styles.image} />
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
