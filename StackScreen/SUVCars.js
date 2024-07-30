import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function SUVCars({navigation}) {

  
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.space}>
       <View style={styles.groupCars}>

        <TouchableOpacity onPress={()=>navigation.navigate('Audi Q8')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://i.gaw.to/vehicles/photos/40/30/403078-2023-audi-q8.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Audi Q8</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Cadillac Escalade')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://image.cnbcfm.com/api/v1/image/107004543-1642773943000-ES_V_3.jpg?v=1642774064'}} style={styles.veh} />
        <Text style={styles.carModel}>Cadillac Escalade</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Jeep Wrangler')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://images.summitmedia-digital.com/topgear/images/2019/12/16/2017-custom-jeep-wrangler-auction-01-1576506356.jpg'}} style={styles.veh} />
        <Text style={styles.carModel}>Jeep Wrangler</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('G Wagon')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://3.bp.blogspot.com/-nMy-_rgHJW0/UCLyRFdHUNI/AAAAAAAABBg/ObrwibGuaOc/s1600/white+mercedes+G+wagon+steel+rims.JPG'}} style={styles.veh} />
        <Text style={styles.carModel}>G Wagon</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Porsche Cayenne')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:eco,w_1200/v1/cms/uploads/fkapxxpdvx14fmfozyaa'}} style={styles.veh} />
        <Text style={styles.carModel}>Porsche Cayenne</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Ford Explorer')}>
        <View style={styles.carsCard}>
        <Image source={{uri: 'https://i0.wp.com/motorallyreview.com/wp-content/uploads/2021/06/2023-Ford-Explorer.jpg?w=1200&ssl=1'}} style={styles.veh} />
        <Text style={styles.carModel}>Ford Explorer</Text>
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
    marginTop: -3
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
