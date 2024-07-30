import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function KiaForteSlideShow() {
  
  
  return (
  <View style={styles.container}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://smart-phoneprice.com/wp-content/uploads/2022/07/Kia-Forte-2024-Images-768x511.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/2023/forte-sedan/new-forte-sedan/interior/kia_fortesd_auto_interior_2_w.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.mattblattkiatr.com/blogs/3073/wp-content/uploads/2018/09/2019-Kia-Forte_B-7_o.jpg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://www.kia.com/us/content/dam/kia/us/en/vehicles/forte/2023/mep/content-asset-list/exterior/kia_forte_2023_mep_asset-list_a-striking-back-end.jpg/_jcr_content/renditions/mobile.jpg'}}  style={styles.image} />
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
