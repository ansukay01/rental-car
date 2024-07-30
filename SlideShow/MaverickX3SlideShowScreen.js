import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function MaverickX3SlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://cdn.dealeraccelerate.com/adrenalin/1/1414/37566/1920x1440/2018-can-am-maverick-x3-xrc-turbo'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://storage.googleapis.com/stateless-dev-hostsites-cloud/2020/02/5c899efc-e-afb-cd-a-b-adcbd-c-d-mv--1200x800.jpg'}} style={styles.image} />
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
