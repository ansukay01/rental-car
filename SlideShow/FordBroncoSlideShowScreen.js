import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function FordBroncoSlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://i.cenyavto.com/2022/07/lUWz.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.exoticcarlist.com/blog/wp-content/uploads/2020/07/New-Ford-Bronco-Interior.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://assets.newatlas.com/dims4/default/3860896/2147483647/strip/true/crop/8688x5792+0+0/resize/1440x960!/quality/90/?url=http:%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fc5%2F13%2Fef6a157c463c9fa58bfd9dc749a9%2Fbronco-4dr-interior-02.jpg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.autopareri.com/uploads/monthly_2022_07/Ford-Bronco-for-Europe-00013.thumb.jpg.51bc5490e38830d4fcf7ca665153a940.jpg'}}  style={styles.image} />
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
