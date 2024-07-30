import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function Polestar2SlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://cdn.vox-cdn.com/thumbor/sceFTqrdKV-urS8IBBtHEAsR45Y=/0x0:2672x1781/1200x628/filters:focal(1336x891:1337x892)/cdn.vox-cdn.com/uploads/chorus_asset/file/24380674/Polestar_2_MY24__2_.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.wardsauto.com/sites/wardsauto.com/files/EMBED2%20Volvo%20Polestar%202%20cockpit.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://media.whatcar.com/wc-image/2022-08/polestar_2_interior_rear_seats.jpg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.carscoops.com/wp-content/uploads/2022/08/Polestar-2-Review-25.jpg'}}  style={styles.image} />
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
