import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function AMGC63SlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://robbreport.com/wp-content/uploads/2022/12/20-2.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.cnet.com/a/img/resize/936b36dc8294f82e19e4f1728d1264eead8af651/hub/2022/12/09/157575c5-247f-41a0-b8ce-364f79b4823b/2024-mercedes-amg-c63-021.jpg?auto=webp&width=1200'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://gossipvehiculo.com/wp-content/uploads/2023/04/Mercedes-AMG-C63-2024-14-1024x682.jpg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://cdn.carbuzz.com/gallery-images/2023-mercedes-amg-c63-coupe-rear-angle-view-carbuzz-509495-1600.jpg'}}  style={styles.image} />
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
