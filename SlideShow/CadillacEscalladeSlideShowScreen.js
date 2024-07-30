import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function CadillacEscalladeSlideShow() {
  
  
  return (
  <View style={styles.container}>
    
      <View style={styles.slide}>
        <Image source={{uri: 'https://ilovethecars.com/wp-content/uploads/2022/08/2023-cadillac-escalade-v-102-1660134617.jpg'}} style={styles.image} />
      </View>
    
  <StatusBar style="auto" />      
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 1
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
