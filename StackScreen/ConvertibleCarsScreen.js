import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function Convertible({navigation}) {

  
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.space}>
       <View style={styles.groupCars}>

        <TouchableOpacity onPress={()=>navigation.navigate('Camaro ZL-1')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://media.fastestlaps.com/chevrolet-camaro-zl1-convertible.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Camaro ZL-1</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Ford Mustang')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://www.thecarmagazine.com/wp-content/uploads/2016/12/20161216092038475.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Ford Mustang</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Mazda MX-5')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://autosportmotor.com/wp-content/uploads/2019/08/2019-mazda-miata-mx-5-convertibl.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Mazda MX-5 Miata</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('AMG C63')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://images.drive.com.au/driveau/image/upload/c_fill,h_720,w_1280/q_auto:eco/f_auto/v1/cms/uploads/k3dd7jm4pkhmvcxt0kpq'}} style={styles.veh} />
        <Text style={styles.carModel}>AMG C63</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Porsche Boxster')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://images.drive.com.au/caradvice/image/private/c_fill,f_auto,g_auto,h_674,q_auto:eco,w_1200/icshp2hx5rhcaoyrlytg'}} style={styles.veh} />
        <Text style={styles.carModel}>Porsche Boxster</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Mini')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://motorillustrated.com/wp-content/uploads/2020/01/Salon-Auto-Montreal-2020-16939.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Mini</Text>
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
