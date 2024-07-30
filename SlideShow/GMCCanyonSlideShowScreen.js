import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function GMCCanyonSlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://thecarsmagz.com/wp-content/uploads/2023/01/2024-GMC-Canyon-redesign.png'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/08/2023-gmc-canyon-at4x-edition1-pkg-045.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://autotrends.org/images/gmc-canyon-2021-07.jpg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://cdntdreditorials2.azureedge.net/cache/b/6/0/9/1/5/b609156c8c3fb10c967ddf8b39f100b6372f66da.jpg'}}  style={styles.image} />
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
