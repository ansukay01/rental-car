import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function ATVCars({navigation}) {

  
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.space}>
       <View style={styles.groupCars}>

        <TouchableOpacity onPress={()=>navigation.navigate('Commander')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://cdn.shopify.com/s/files/1/0273/2834/8258/collections/Commander_Product_003_1200x630.jpg?v=1591643065'}} style={styles.veh} />
        <Text style={styles.carModel}>Commander</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Defender')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://dirtwheelsmag.com/wp-content/uploads/2019/11/CAN-AM_DEFENDER_SPRD-1.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Defender</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Maverick Sport')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://www.elpasoautodeals.com/MILLENIUM%20CAR%20CENTER/INVENTORY/2020%20MAVERICK%20SPORT%20ATV/20220621_161035.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Maverick Sport</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Maverick X3')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://dirtwheelsmag.com/wp-content/uploads/2019/03/X3-DS-1-Spread.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Maverick X3</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Maverick Trail')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://dirtwheelsmag.com/wp-content/uploads/2017/12/Maverick-Trail-1-new.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Maverick Trail</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Maverick R')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://atvillustrated.com/files/2022-can-am-maverick_x3_rs-utv-b.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Maverick R</Text>
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
