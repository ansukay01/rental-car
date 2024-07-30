import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function BMW2SeriesSlideShow() {
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https:%2F%2Fcdni.autocarindia.com%2FExtraImages%2F20201006041619_BMW-2-GC-static.jpg&h=795&w=1200&c=0'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.auto360.fr/wp-content/uploads/2021/05/bmw-2-series-gran-coupe-interior-dashboard-infotainment-1.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://s3-eu-west-1.amazonaws.com/eurekar-v2/uploads/images/original/bgtseats.jpg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://i1.wp.com/www.wheels-alive.co.uk/wp-content/uploads/2020/03/BMW-2-Series-Gran-Coupe-side-rear-static-view.jpg?ssl=1'}}  style={styles.image} />
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
