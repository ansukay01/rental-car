import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function HatchBack({navigation}) {

  
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.space}>
       <View style={styles.groupCars}>

        <TouchableOpacity onPress={()=>navigation.navigate('Kia Ceed')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://autotijd.be/images/kia/2022/ceed/specs/kia-ceed-2022-specs-01.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Kia Ceed</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Audi Q8')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://www.westwoodmotorgroup.co.uk/wp-content/uploads/2020/08/BMW-1-Series-118i-M-SportAutomatic-e1596548079659.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>BMW 1 Series</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Dacia Sandero')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://i.ytimg.com/vi/aLdpKGlQ3HQ/maxresdefault.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Dacia Sandero</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Volkswagen Golf')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://performancedrive.com.au/wp-content/uploads/2017/04/2017-Volkswagen-Golf-R-1280x834.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Volkswagen Golf</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Seat Leon')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1580836363/autoexpress/2020/01/01_42.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Seat Leon</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Vauxhall Astra')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://images.honestjohn.co.uk/imagecache/file/crop/1200x800/media/9922746/Vauxhall~Astra~(4).jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Vauxhall Astra</Text>
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
