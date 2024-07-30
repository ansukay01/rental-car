import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function ToyotaSiennaSlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://2024toyota.net/wp-content/uploads/2023/02/2024-Toyota-Sienna-Exterior.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://spirotours.com/wp-content/uploads/2022/04/2024-Toyota-Sienna-availability-price-available-768x512.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://i.pinimg.com/originals/47/eb/d1/47ebd100e844cf4ea89b97f50ea800da.jpg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://topelectricsuv.com/wp-content/uploads/2023/04/Toyota-Sienna-Platinum-rear-three-quarter-768x512.jpg'}}  style={styles.image} />
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
