import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function CrossOverScreen({navigation}) {

  
  return (
    <ScrollView>
    <View style={styles.container}>
      
      <View style={styles.space}>
       <View style={styles.groupCars}>

        <TouchableOpacity onPress={()=>navigation.navigate('Kia Soul')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://spirotours.com/wp-content/uploads/2022/04/2024-Kia-Soul-accessories-awd-cost-updates.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Kia Soul</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Mazda CX-5')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://teamspeed.com/wp-content/uploads/2021/06/IMG_6228.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Mazda CX-5</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Hyundai Tucson')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://newcarbike.com/wp-content/uploads/2022/06/tucson-1280.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Hyundai Tucson</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Chevrolet Traverse')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://s.hdnux.com/photos/01/33/65/76/24076203/3/1200x0.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Chevrolet Traverse</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Buick Enclave')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://spirotours.com/wp-content/uploads/2022/06/2024-Buick-Enclave-Avenir-cruise-control-all-wheel-drive-review.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Buick Enclave</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Ford Bronco')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://i0.wp.com/fordusacars.com/wp-content/uploads/2022/03/2024-Ford-Bronco-3.jpg?resize=1140%2C665&is-pending-load=1#038;ssl=1'}} style={styles.veh} />
        <Text style={styles.carModel}>Ford Bronco</Text>
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
