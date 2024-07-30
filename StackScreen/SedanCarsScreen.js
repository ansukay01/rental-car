import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function SedanCars({navigation}) {

  
  return (
    <ScrollView>
    <View style={styles.container}>
      
      <View style={styles.space}>
       <View style={styles.groupCars}>

        <TouchableOpacity onPress={()=>navigation.navigate('Honda Civic')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://hosteriadeinumeriprimi.com/wp-content/uploads/2021/10/2023-Honda-Civic-Si-release-msrp.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Honda Civic</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Kia Forte')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://tamautorumors.com/wp-content/uploads/2022/04/2024-Kia-Forte-Turbo-1024x547.png'}} style={styles.veh} />
        <Text style={styles.carModel}>Kia Forte</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Hyundai Elantra')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://blogs-images.forbes.com/danroth/files/2017/09/2017-hyundai-elantra-sport-01-1200x798.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Hyundai Elantra</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Toyota Corolla')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://2024toyota.com/wp-content/uploads/2022/04/2024-Toyota-Corolla-Fornt-View-1-1024x541.png'}} style={styles.veh} />
        <Text style={styles.carModel}>Toyota Corolla</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Nissan Sentra')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://www.planetcarsz.com/img/noticias/2023/06/nissan-sentra-2024-08-20230622134212-1280x925.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Nissan Sentra</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('BMW 2 Series Gran')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20201016093733_2020-BMW-2-series-gran-coupe-front-static.jpg&h=795&w=1200&c=1'}} style={styles.veh} />
        <Text style={styles.carModel}>BMW 2 Series Gran</Text>
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
