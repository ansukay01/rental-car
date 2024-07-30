import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function PorscheBoxsterSlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://di-uploads-pod15.dealerinspire.com/sewickleyporsche/uploads/2020/10/718-Boxster-T.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://di-uploads-development.dealerinspire.com/sewickleyporsche/uploads/2018/06/X6PDho.png'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.newcarsfolk.com/wp-content/uploads/2022/06/Porsche-718-Boxster-GTS-2024-i.png'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://1.bp.blogspot.com/-YpEb8Q-r_OI/YLcMOlKAeAI/AAAAAAADA48/EDPP0kMboSwVFAfFUIB6t0eHJKRIYpODQCLcBGAsYHQ/w640-h390/Porsche%2B718%2BBoxster%2B11.jpg'}}  style={styles.image} />
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
