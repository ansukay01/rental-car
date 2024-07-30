import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function AvailableCars({navigation}) {

  
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.cars}>Available Cars</Text>
      <View style={styles.space}>
       <View style={styles.groupCars}>

        <TouchableOpacity onPress={()=>navigation.navigate('SUV')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/subaru-ascent-suv-concept.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>SUV</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Coupe')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://www.miamilusso.com/wp-content/uploads/2019/03/mercedes-amg-s63-coupe-becomes-sinister-brabus-800-with-400000-price-125886_1.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Coupe</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Wagon')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://s1.cdn.autoevolution.com/images/gallery/FIAT-Tipo-Station-Wagon-5591_1.jpeg'}} style={styles.veh} />
        <Text style={styles.carModel}>Wagon</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Sedan')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'http://www.extravaganzi.com/wp-content/uploads/2012/11/2013-Maserati-Quattrporte-4.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Sedan</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('HatchBack')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://car-images.bauersecure.com/pagefiles/90476/toyota_yaris_101.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>HatchBack</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('PickUp')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://consumerguide.com/wp-content/uploads/bfi_thumb/2021-chevrolet-colorado-zr2-001-oxzdapcch0dqn1tolnewt20z9q782n88wvncnxe5eo.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>PickUp</Text>
        </View> 
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Sport')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://images.hdqwalls.com/wallpapers/bugatti-sport-car-77.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Sport</Text> 
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('CrossOver')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://www.hyundaicanada.com/-/media/hyundai/showroom/2019/kona/featuregrid/exterior/desktop/kona_exterior_f1.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>CrossOver</Text> 
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Van')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://www.moonrentacar.com/dosya/2691/blog/33-2-what-does-a-minivan-class-vehicle-mean_276.jpeg'}} style={styles.veh} />
        <Text style={styles.carModel}>Van</Text> 
        </View> 
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Electric')} >
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://www.discoverev.co.uk/images/comparison/top-5-used-electric-cars-under-10k/smart/smart_4_1600px.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Electric</Text>
        </View> 
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Convertible')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://cdn.carbuzz.com/gallery-images/1600/712000/700/712785.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Convertible</Text>
        </View> 
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('ATV')} >
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://i.pinimg.com/originals/7d/dc/90/7ddc9096d3f32da4804192dc2a32439d.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>ATV</Text> 
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
    marginTop: 5,
    color: '#1F51FF',
    marginBottom: -20,
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
    marginTop: 20
  }
   
});
