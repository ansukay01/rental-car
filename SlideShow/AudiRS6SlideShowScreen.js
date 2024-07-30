import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function AudiRS6SlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://imgproxy.newswav.com/1000x0,q50=/https://www.thedrive.com/uploads/2023/06/26/L1840687.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.thedrive.com/uploads/2023/06/26/AudiRS6Avant-performance_Mythosblack036.jpg?auto=webp&optimize=high&quality=70&width=1440'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://assets.newatlas.com/dims4/default/9990fc4/2147483647/strip/true/crop/1600x1080+0+0/resize/1422x960!/quality/90/?url=https:%2F%2Fassets.newatlas.com%2Farchive%2Faudi-rs6-rs7-performance-1.jpg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://cdn.carbuzz.com/gallery-images/2023-audi-rs6-avant-rear-view-driving-carbuzz-1069543-1600.jpg'}}  style={styles.image} />
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
