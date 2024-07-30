import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function AudiTTSlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://i2.wp.com/avtomobile.cc/wp-content/uploads/15-audi-tt-rs-test-review-car-and-driver-2024-audi-tt-rs.jpg?fit=2182%2C1333&ssl=1'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://cwrcars.com/wp-content/uploads/2023/06/2024-Audi-TT-Interior.png'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-tt-road-test-2015-008.jpg?itok=k45UTZ0j'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://cimg3.ibsrv.net/ibimg/hgm/1920x1080-1/100/857/2023-audi-tt-rs-iconic-edition_100857971.jpg'}}  style={styles.image} />
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
