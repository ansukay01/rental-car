import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function SportCars({navigation}) {

  
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.space}>
       <View style={styles.groupCars}>

        <TouchableOpacity onPress={()=>navigation.navigate('Porsche 911')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://i0.wp.com/porschereview.com/wp-content/uploads/2022/04/2024-Porsche-911-Turbo-S.webp'}} style={styles.veh} />
        <Text style={styles.carModel}>Porsche 911</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Ferrari F8')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://www.thedetroitbureau.com/wp-content/uploads/2019/03/Ferrari-F8-Tributo-rear-3-4.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Ferrari F8</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Audi R8')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://motorbash.com/wp-content/uploads/2015/02/Audi-R8-rear-1024x683.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Audi R8</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('BMW Z4')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://i.pinimg.com/originals/6e/0d/0e/6e0d0e4d7b5942183d16df66d3f1a8ec.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>BMW Z4</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Jaguar F-Type')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://www.telegraph.co.uk/content/dam/motoring2/2015/12/01/1-Jaguar-F-type-Coupe-main-image-xlarge-xlarge_trans_NvBQzQNjv4BqrWYeUU_H0zBKyvljOo6zlkYMapKPjdhyLnv9ax6_too.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Jaguar F-Type</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Lexus LC')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://www.tflcar.com/wp-content/uploads/2016/01/2017_lexus_lc500_06.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Lexus LC</Text>
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
