import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function FordRangerBeneathSlideShowScreen({navigation}) {
  
  
  return (
    <View style={styles.cont}>
    <Swiper style={styles.wrapper}>
      <View style={styles.slide}>
        <Image source={{uri: 'https://cdn.jdpower.com/JDP_2024%20Ford%20Ranger%20Raptor%20Front%20Quarter%20View.jpg'}} style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://cdn.carbuzz.com/gallery-images/2024-ford-ranger-raptor-dashboard-carbuzz-1135310-1600.jpg'}} style={styles.image} />
      </View>
      
      <View style={styles.slide}>
        <Image source={{uri: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/4x4/2017/06/27/Misc/Ford-Ranger-interior-back-seats.jpg'}}  style={styles.image} />
      </View>
      <View style={styles.slide}>
        <Image source={{uri: 'https://cdn.carbuzz.com/gallery-images/2024-ford-ranger-view-out-back-carbuzz-922791-1600.jpg'}}  style={styles.image} />
      </View>
    </Swiper>
    <Text style={styles.on}/>
    <View style={styles.cardsGroup}>
      <View style={styles.boxCard}>
        <Text style={styles.frontFont}>Power</Text>
        <Text style={styles.lastFonT}>300HP</Text>
      </View>
      <View style={styles.boxCard}>
        <Text style={styles.frontFont}>Seats</Text>
        <Text style={styles.lastFonT}>5 Seats</Text>
      </View> 
      <View style={styles.boxCard}>
        <Text style={styles.frontFont}>Gear</Text>
        <Text style={styles.lastFont}>Automatic</Text>
      </View> 
      <View style={styles.boxCard}>
        <Text style={styles.frontFont}>Price</Text>
        <Text style={styles.lastFont}>$100/Day</Text>
      </View> 
    </View>
    
    <TouchableOpacity style={styles.bTn}  onPress={()=>navigation.navigate('Payment')}> 
        <Text style={styles.btnFOnt}>RENT NOW</Text>
    </TouchableOpacity>
       
  <StatusBar style="auto" />      
   </View>
  );
}

const styles = StyleSheet.create({
  swipe: {
    color: '#696969',
    marginTop: -23,
    fontSize: 6.99  
  },
  carName: {
    color: '#696969',
    marginTop: 15
  },
  boxCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#696969',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 130,
    height: 90,
    borderWidth: 1,
    color: '#696969'
  },
  frontFont: {
    color: '#696969',
    marginLeft: 30,
    fontSize: 12.5
  },
  lastFont: {
    marginTop: 38,
    fontSize: 10.7,
    marginLeft: 20
  },
  cardsGroup: {
    flex: 1,
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  marginLeft: 40,
  marginTop: 540
  },
  lastFonT: {
    marginTop: 38,
    fontSize: 10.7,
    marginLeft: 32
  },
  bTn: {
    borderRadius: 20,
        backgroundColor: '#1F51FF',
        width: 285,
        height: 57,
        marginBottom: 180,
        marginLeft: -10

  },
  btnFOnt: {
    color: 'white',
    textAlign: 'center',
    marginTop: 18,
    fontSize: 17.2,
},
  motivateFont: {
    marginTop: 60,
    fontSize: 9,
    color: '#696969',
    marginLeft: -12,
},


  cont: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: -1
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
    marginBottom: -540

  }    

  
});
