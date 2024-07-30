import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function ElectricCarsScreen({navigation}) {

  
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.space}>
       <View style={styles.groupCars}>

        <TouchableOpacity onPress={()=>navigation.navigate('Hyundai Ioniq 6')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://images.cars.com/cldstatic/wp-content/uploads/hyundai-ioniq-6-2023-01-exterior-rear-angle.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Hyundai Ioniq 6</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('BMW i4')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https:%2F%2Fcdni.autocarindia.com%2FExtraImages%2F20200303032237_31-bmw-i4-concept-2020-stationary-rear.jpg&h=795&w=1200&c=1'}} style={styles.veh} />
        <Text style={styles.carModel}>BMW i4</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Polestar 2')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://cdn.jdpower.com/JDP_2024%20Polestar%202%20Rear%20Quarter%20Aerial%20View.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Polestar 2</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Telsa Model 3')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://cdn.shopify.com/s/files/1/0610/8443/4668/articles/2024_tesla_model_3_Facelift_1200x1200.png?v=1682363144'}} style={styles.veh} />
        <Text style={styles.carModel}>Telsa Model 3</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Volkswagen ID.7')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://www.webtekno.com/images/editor/default/0003/97/c2a5c1e77b1c84afabc8f2ad5b0f440d7cbbc270.jpeg'}} style={styles.veh} />
        <Text style={styles.carModel}>Volkswagen ID.7</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Nissan Leaf')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://davidsonian.com/wp-content/uploads/2024/03/W3-F6.webp'}} style={styles.veh} />
        <Text style={styles.carModel}>Nissan Leaf</Text>
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
