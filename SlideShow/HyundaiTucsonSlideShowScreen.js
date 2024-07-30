import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function HyundaiTucsonSlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://hyundainewspecs.com/wp-content/uploads/2021/02/2022-Hyundai-Tucson-Exterior.png'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://topelectricsuv.com/wp-content/uploads/2020/11/2022-Hyundai-Tucson-interior-dashboard-1.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://cars.usnews.com/static/images/Auto/izmo/i159615061/2022_hyundai_tucson_rearseat.jpg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://images.carexpert.com.au/resize/3000/-/app/uploads/2022/11/Hyundai-Tucson-Highlander-2.0D-AWD_Hyundai-Tucson-Highlander-9.jpg'}}  style={styles.image} />
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
