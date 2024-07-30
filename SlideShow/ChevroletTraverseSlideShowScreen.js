import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function ChevroletTraverseSlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://img.sm360.ca/ir/w640h480/images/article/mazda220/117129/580880-chevrolet-traverse-2024-adieu-au-v6-et-bonjour-au-robuste-z711690292986215.jpeg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://cdn.carbuzz.com/gallery-images/2024-chevrolet-traverse-dashboard-carbuzz-1159583-900x600.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://images.cars.com/cldstatic/wp-content/uploads/chevrolet-traverse-z71-2024-33-interior-backseat-scaled.jpg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.elcarrocolombiano.com/wp-content/uploads/2023/07/20230717-CHEVROLET-TRAVERSE-2024-NUEVA-GENERACION-LANZAMIENTO-MUNDIAL-03.jpg'}}  style={styles.image} />
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
