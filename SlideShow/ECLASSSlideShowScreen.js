import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function ECLASSSlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://uncrate.com/assets_c/2023/06/mercedes-e-class-wagon-1-thumb-960xauto-161999.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://images.hgmsites.net/med/2024-mercedes-benz-e-class-interior_100875322_m.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://cdn.jdpower.com/ChromeImageGallery/Expanded/White/640/2016MBC680002_640/2016MBC680002_640_28.jpg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://s.yimg.com/ny/api/res/1.2/rW8hFweZGEF_Uge7s3IxTw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTQ3OQ--/https://media.zenfs.com/en/car_and_driver_581/ecf79bc401485ff43926cb99cc6c1be6'}}  style={styles.image} />
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
