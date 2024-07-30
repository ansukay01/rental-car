import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function ToyotaTundraSlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.momentummotorcars.com/imagetag/2273/9/l/Used-2023-Toyota-Tundra-Limited-TRD-Off-Road-Package-1677624799.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://i0.wp.com/www.allcarstrucks.co/wp-content/uploads/2022/06/Toyota-Tundra-2024-i.jpg?resize=720%2C405&ssl=1'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://media.rti.toyota.com/config/pub/3d/toyota/1008125/1000868/Interior/4/1200_663_PNG/596d954b4bd4181d05802f1e05405f4ea268437e9d3f4c97d8c9a565935eb0b5.png'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://tfltruck.com/wp-content/uploads/2021/09/2022_Toyota_Tundra_Rear-Quarter_025.jpg'}}  style={styles.image} />
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
