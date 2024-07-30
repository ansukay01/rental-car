import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function LexusLCSlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://cdn.jdpower.com/JDP_2022%20Lexus%20LC%20500h%20Ultra%20White%20Front%20Quarter%20View.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://cdn.carbuzz.com/gallery-images/2024-lexus-nx-hybrid-dashboard-carbuzz-991885-1600.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://thesun.my/binrepository/dark-rose_3104907_20230411175012.jpg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://autogaleria.pl/content/uploads/2023/04/2024-lexus-lc-ultimate-edition-europe-2-1024x576.jpeg'}}  style={styles.image} />
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
