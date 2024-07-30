import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function PickUpCars({navigation}) {

  
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.space}>
       <View style={styles.groupCars}>

        <TouchableOpacity onPress={()=>navigation.navigate('GMC Canyon')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://www.siamcar.com/uploads/images/content/2023/08/09-d0cqf6.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>GMC Canyon</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Jeep Gladiator')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://spirotours.com/wp-content/uploads/2022/04/2024-Jeep-Gladiator-electric-exterior-hybrid.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Jeep Gladiator</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Honda Rigeline')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://www.autobics.com/wp-content/uploads/2023/11/2024-Honda-Ridgeline-TrailSport-High-Speed.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Honda Ridgeline</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Ford Ranger')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://fordbelt.com/wp-content/uploads/2023/04/12.png'}} style={styles.veh} />
        <Text style={styles.carModel}>Ford Ranger</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Nissan Titan')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://www.pickuptruck2021.com/wp-content/uploads/2020/10/2023-Nissan-Titan-Warrior-Exterior.png'}} style={styles.veh} />
        <Text style={styles.carModel}>Nissan Titan</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Toyota Tundra')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://2024toyota.com/wp-content/uploads/2022/06/2024-Toyota-Tundra-Redesign-2.png'}} style={styles.veh} />
        <Text style={styles.carModel}>Toyota Tundra</Text>
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
