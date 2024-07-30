import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function MiniSlideShow() {
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://static.cargurus.com/images/forsale/2023/04/28/22/01/2024_mini_cooper_clubman-pic-5406838092596832989-1024x768.jpeg?io=true&width=640&height=480&fit=bounds&format=jpg&auto=webp'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://cdn.jdpower.com/JDP_2024%20Mini%20Countryman%20Iconic%20Trim%20Interior%20Dashboard.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://images.lian-car.com/files/lian-car/1050317%E8%BF%B7%E4%BD%A0%E5%BB%A0%E6%A3%9A/Melting_Silver_118.jpg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://cdn.bmwblog.com/wp-content/uploads/2022/02/mini-countryman-untamed-edition-05.jpg'}}  style={styles.image} />
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
