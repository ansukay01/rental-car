import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function FordTransitSlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://images.drive.com.au/driveau/image/upload/c_fill,h_720,w_1280/q_auto:eco/f_auto/v1/cms/uploads/ppeq2ffbc2qppz9w2qsm'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.fr.ford.be/content/dam/guxeu/rhd/central/cvs/2022-e-transit-custom/launch/features/ford-transitcustom-eu-V710i_MEDIA-LIMITED_IAA-04-16x9-2160x1215.jpg.renditions.original.png'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/f108690065e76d6733c96dbccf5a414d/83adea30-71de-4787-b46f-e7b2cc20a860.jpg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://images.carexpert.com.au/resize/3000/-/app/uploads/2022/05/2022_FORD_E-TRANSIT_CUSTOM_14.jpeg'}}  style={styles.image} />
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
