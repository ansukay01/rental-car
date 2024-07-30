import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function VauxhallAstraSlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://i1.wp.com/avtomobile.cc/wp-content/uploads/here-s-everything-you-need-to-know-about-the-new-opel-astra-2024-new-astra.jpg?fit=1649%2C873&ssl=1'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://car-images.bauersecure.com/wp-images/13318/vauxhall_astra_099.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://media.whatcar.com/wc-image/2022-08/vauxhall_astra_interior_rear_seats.jpg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://res.cloudinary.com/ho5waxsnl/image/upload/c_fill,f_auto,h_540,q_auto,w_960/t55cww4hg2v23b5tkerno0haw9qd'}}  style={styles.image} />
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
