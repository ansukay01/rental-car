import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function CoupeCarss({navigation}) {

  
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.space}>
       <View style={styles.groupCars}>

        <TouchableOpacity onPress={()=>navigation.navigate('Bentley GT')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://conduciendo.com/wp-content/uploads/Bentley-Continental-GT-Speed-240321-07.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Bentley GT</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Audi TT')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://st.motortrend.com/uploads/sites/10/2017/04/2018-Audi-TT-RS-Coupe-front-to-view.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Audi TT</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Toyota GT86')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://www.automobilesreview.com/gallery/aerotechnik-toyota-gt86/aerotechnik-toyota-gt86-02.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Toyota GT86</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Subaru BRZ')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://img-ik.cars.co.za/legacy/gallery/subaru-brz/tr:n-news_1200x/subaru-brz-review-5.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Subaru BRZd</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Chevy')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://spirotours.com/wp-content/uploads/2022/05/2024-Chevy-Corvette-release-date-engine-options.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Chevy Corvette</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('BMW 8 Series')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://images.autofun.co.th/file1/785fd03c6bf84730b0d794c92fbc31ad_1125x630.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>BMW 8 Series </Text>
        </View> 
        </TouchableOpacity> 
        </View>
       </View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  cars: {
    fontSize: 16.8,
    marginTop: 55,
    color: '#1F51FF',
  },
  veh: {
     width: 155,
     height: 150,
     borderRadius: 10,
  },
  carModel: {
     color: 'white',
  },
  groupCars: {
    flex: 1,
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  },
  carsCard: {
    backgroundColor: '#1F51FF',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#696969',
    shadowOffset: { width: 150, height: 160 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  space: {
    marginTop: -10
  }
   
});
