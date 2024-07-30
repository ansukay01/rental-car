import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function KiaCarnivalSlideShow() {
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.cnet.com/a/img/resize/eaef5f261e6044d97c8013af714f4f5d8ce25890/hub/2021/04/05/ecfe1d4a-6162-4842-a5d4-ecd5c4c0ca70/kia-carnival-sx-2022-730607.jpg?auto=webp&fit=crop&height=675&width=1200'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.motorbiscuit.com/wp-content/uploads/2022/06/Dashboard-and-front-seats-in-2023-Kia-Carnival-highlighting-its-release-date-and-price.jpg?w=925'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/RJDTSbcUsUo3Pr37R8wgfZasQVVAZkyZa0yMpgXl.jpg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://blog.consumerguide.com/wp-content/uploads/sites/2/2021/08/20210628_151326-1024x644.jpg'}}  style={styles.image} />
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
