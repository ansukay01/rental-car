import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function WolkwagenID7SlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://cdn-images.fleetnews.co.uk/thumbs/1200x900/web-clean/1/electric-car-galleries/electric-fleet/electric-car-and-van-data/volkswagen/id7-tourer-2158/volkswagen-id7-tourer-gtx-042x.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: "https://www.electrifying.com/files/O2o3qv9PFpmygZWA/VW%20ID7%20interior.jpg"}} style={styles.image} />
      </View>
        <View style={styles.slide}>
        <Image source={{uri: 'https://images.squarespace-cdn.com/content/v1/5390ffd3e4b0097a84e19b14/1568083429591-E3J341Y20DJIGSTGQ7ZZ/ke17ZwdGBToddI8pDm48kKtijf5x5S0rIV7X_qDH3dB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UaZbTVdO5VSPAOxIcVIbmIFLIFeVDbQiz7iBIgNCzklBDD2o6CESiqIlH5ssNFrtmA/id3+roomy+rear+seating'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://cdn-images.fleetnews.co.uk/thumbs/1200x900/web-clean/1/electric-car-galleries/electric-fleet/electric-car-and-van-data/volkswagen/id7-tourer-2158/volkswagen-id7-tourer-gtx-022x.jpg'}}  style={styles.image} />
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
