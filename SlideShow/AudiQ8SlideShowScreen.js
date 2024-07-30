import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function AudiQ8SlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://audimodels.net/wp-content/uploads/2022/04/2024-Audi-Q8-Premium-Exterior.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://carwow-uk-wp-3.imgix.net/audi-q8-interior-dashboard-virtual-cockpit-1-1.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=1366'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://s3-eu-west-1.amazonaws.com/eurekar-v2/uploads/images/original/q8rearseats.jpg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.theautoblogs.com/wp-content/uploads/2023/04/2024-audi-q8-e-tron-grey-rear-right.jpg'}}  style={styles.image} />
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
    marginBottom: 10
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
