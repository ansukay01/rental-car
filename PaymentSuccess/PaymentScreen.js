import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput,Text,  View, TouchableOpacity, Image, ScrollView } from 'react-native';


export default function PaymentScreen() {
  
  return (
  <ScrollView>
  <View style={styles.container}>
   
  <Image source={{uri: 'https://www.kablooe.com/wp-content/uploads/2019/08/check_mark.png'}} style={styles.cardImage} />
  <Text style={styles.paymentFont}>Payment is Successful</Text>
  <Text style={styles.receiveFont}>The money has been received, enjoy your ride!</Text>


   </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 100
  },
  cardsFont: {
    color: 'black',
    fontSize: 12.2,
  },
  cardImage: {
    width: 90,
    height: 90, 
    borderRadius: 10,
    marginTop: 15.5,
    marginBottom: 1,
    marginTop: 140
  },
  fontCard: {
    color: '#1F51FF',
    fontSize: 12.2,
    marginLeft: 200,
    marginTop: -15,
  },
  input: {
    width: 310,
    height: 55,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'gray',
    height: 45,
    borderWidth: 1,
    backgroundColor: '#E1D9D1',
    borderRadius: 35,
    marginTop: 12
  },
  inpuT: {
    width: 150,
    height: 55,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'gray',
    height: 45,
    borderWidth: 1,
    backgroundColor: '#E1D9D1',
    borderRadius: 35,
    marginTop: 5
  },
  columnInput: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
    Bttn: {
      borderRadius: 35,
        backgroundColor: '#1F51FF',
        width: 250,
        height: 55,
        marginTop: 10,
        marginLeft: -10
  },
  BttnFOnt: {
    color: 'white',
    textAlign: 'center',
    marginTop: 18,
    fontSize: 15.2,
},
paymentFont: {
    fontSize: 20,
},
receiveFont: {
    fontSize: 13
},
receiveFont: {
    fontSize: 13,
    marginBottom: 12
}
      
});
