import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function FirstScreen({navigation}) {
  
  return (
    <View style={styles.container}>
      <Image source={{uri: "https://image.tienphong.vn/w1000/Uploaded/2020/cvjntckxtiwdpcv/2019_10_16/toyota_rise_kuqv.jpg"}} style={styles.carRentImage} />
      <Text style={styles.firstFont}>Your Ultimate</Text>
      <Text style={styles.secondFont}>Car Rental</Text>
      <Text style={styles.thirdFont}>Experience</Text>
      <Text style={styles.mission}>We provide the greatest nationwide automobile rental services.
      <Text></Text> Hire any vehicle from us to enjoy the journey, feel safe, and get the best deal.</Text>
      <TouchableOpacity style={styles.Btn}>
        <Text style={styles.btnFont}>Let's Get Started</Text>
      </TouchableOpacity>
      <Text style={styles.haveAccount}>Already have an account?</Text>
       <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text style={styles.signIn}>Sign In</Text>
      </TouchableOpacity> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  carRentImage: {
    width: 370,
    height: 200,
    borderRadius: 10,
    marginTop: 160
  },
  firstFont: {
     fontSize: 20,
     marginEnd: 160,
     marginTop: 20
  },
  secondFont: {
    color: '#1F51FF',
    fontSize: 20,
    marginTop: -23,
    marginLeft: 110

  },
      thirdFont: {
      fontSize: 25
      },
      mission: {
        fontSize: 13,
        marginTop: 5,
        color: '#696969'
      },
      Btn: {
        borderRadius: 35,
        backgroundColor: '#1F51FF',
        marginTop: 17,
        width: 310,
        height: 55,
      },
      btnFont:{
        color: 'white',
        textAlign: 'center',
        marginTop: 18
      },
      haveAccount: {
        marginTop: 28,
        marginEnd: 100,
        color: '#696969'
      },
      signIn: {
        color: '#1F51FF',
        textDecorationLine: 'underline',
        marginLeft: 145,
        marginTop: -18,
      }
});
