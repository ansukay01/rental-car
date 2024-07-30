import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function ToyotaGT86SlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://2024toyota.net/wp-content/uploads/2023/02/2024-Toyota-GR86-Exterior-1024x668.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.thedrive.com/content-b/message-editor/1622741280803-my22_gr86_009.jpg?quality=60'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://performancedrive.com.au/wp-content/uploads/2017/03/2017-Toyota-86-GTS-rear-seats.jpg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://i1.wp.com/newcarscomeout.com/wp-content/uploads/2019/03/2020-toyota-gt-86-redesign.jpg?w=1024&ssl=1'}}  style={styles.image} />
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
