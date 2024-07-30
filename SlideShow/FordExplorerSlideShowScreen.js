import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function FordExplorerSlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://hosteriadeinumeriprimi.com/wp-content/uploads/2022/12/2024-ford-explorer-configurations-black.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.motorbiscuit.com/wp-content/uploads/2022/08/Ford-Explorer-Facelift-China-5.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/explorer/2023/collections/equipments/3-2/2021_explorer_Interior-Ebony_32.jpg/jcr:content/renditions/cq5dam.web.768.768.jpeg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://i0.wp.com/suvbazar.com/wp-content/uploads/2022/11/Ford-Explorer-2023-Photos-1.webp?resize=840%2C560&ssl=1'}}  style={styles.image} />
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
