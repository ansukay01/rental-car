import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function Wagon({navigation}) {

  
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.space}>
       <View style={styles.groupCars}>

        <TouchableOpacity onPress={()=>navigation.navigate('Audi A6')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://www.allcarz.ru/wp-content/uploads/2019/06/foto-a6-allroad-c8_04.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Audi A6</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Subaru Outback')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://conduciendo.com/wp-content/uploads/Subaru-Outback-Wilderness-310321-07.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Subaru Outback</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Volvo V60')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://s1.cdn.autoevolution.com/images/gallery/VOLVO-V60-Polestar-6175_5.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Volvo V60</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Audi RS6')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://media.techeblog.com/images/2020-audi-rs6-avant.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Audi RS6 Avant</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Volvo V90')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://img-ik.cars.co.za/news-site-za/images/2017/08/Volvo-V90-CCT6-1.jpg?tr=w-1200,h-800'}} style={styles.veh} />
        <Text style={styles.carModel}>Volvo V90</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('E-Class Wagon')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/6f420182dbc9e2b80956b6c62d9d9bc4.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>E-Class Wagon</Text>
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
