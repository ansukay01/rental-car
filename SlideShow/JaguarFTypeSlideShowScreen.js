import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function JaguarFTypeSlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.slashgear.com/img/gallery/final-drive-the-2024-f-type-75-gives-old-school-jaguar-one-last-time-to-shine/l-intro-1681317503.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://media.whatcar.com/wc-image/2020-02/jaguar-f-type-coupe-2970.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://img.sm360.ca/images/newcar/ca/2024/jaguar/f-type/75/coupe/interiorColors/2024_jaguar_f-type-coupe_r-dynamic_tan-windsor-leather-performance-seats-tan-interior-300uv-_tableau-de-bord_003.jpg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.completecar.ie/img/galleries/10735/jaguar_f_type_p300_coupe_green_2020_1.jpg'}}  style={styles.image} />
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
