import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function VansCars({navigation}) {

  
  return (
    <ScrollView>
    <View style={styles.container}>
      
      <View style={styles.space}>
       <View style={styles.groupCars}>

        <TouchableOpacity onPress={()=>navigation.navigate('Toyota Sienna')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://2024toyota.net/wp-content/uploads/2023/02/2024-Toyota-Sienna-Exterior.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Toyota Sienna</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Ford Transit')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://images.drive.com.au/driveau/image/upload/c_fill,h_720,w_1280/q_auto:eco/f_auto/v1/cms/uploads/ppeq2ffbc2qppz9w2qsm'}} style={styles.veh} />
        <Text style={styles.carModel}>Ford Transit</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Kia Carnival')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_674,q_auto:eco,w_1200/v1/cms/uploads/baduy8tz5fqnegdzu7nt'}} style={styles.veh} />
        <Text style={styles.carModel}>Kia Carnival</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Honda Odyssey')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://spirotours.com/wp-content/uploads/2022/06/2024-Honda-Odyssey-redesign-issues-review.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Honda Odyssey</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Ford Fiesta')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://spirotours.com/wp-content/uploads/2022/02/2023-Ford-Fiesta-mpg-se-gas-mileage.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Ford Fiesta</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Sprinter')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://img.rezdy.com/PRODUCT_IMAGE/55443/SPRINTER_VAN_SMALLER_lg.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Sprinter</Text>
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
