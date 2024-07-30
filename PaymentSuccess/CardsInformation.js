import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput,Text,  View, TouchableOpacity, Image, ScrollView } from 'react-native';



export default function CardsInformation({navigation}) {
  const [fullName, setFullName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');

  return (
  <View style={styles.container}>
  <Text style={styles.cardsFont}>We accept the following</Text>
   <Text style={styles.fontCard}>Cards</Text>
  <Image source={{uri: 'http://www.newdesignfile.com/postpic/2009/03/visa-mastercard-discover-credit-card-logos_271167.jpg'}} style={styles.cardImage} />
  <TextInput 
    style={styles.input}
    placeholder="                          Full Name"
    placeholderTextColor="black"
    onChangeText={text => setFullName(text)}
    value={fullName} />
    <TextInput 
    style={styles.input}
    placeholder="                        Card Number"
    placeholderTextColor="black"
  onChangeText={text => setCardNumber(text)}
    value={cardNumber} />
    <View style={styles.columnInput}>
    <TextInput 
    style={styles.inpuT}
    placeholder="        Expiry Date"
    placeholderTextColor="black"
    onChangeText={text => setExpiryDate(text)}
    value={expiryDate} />
    <TextInput 
    style={styles.inpuT}
    placeholder="            CVV"
    placeholderTextColor="black"
    onChangeText={text => setCvv(text)}
    value={cvv} />
    </View>
    <TextInput 
    style={styles.input}
    placeholder="                       Street Address"
    placeholderTextColor="black"
    onChangeText={text => setStreetAddress(text)}
    value={streetAddress} />
    <TextInput 
    style={styles.input}
    placeholder="                         Postal Code"
    placeholderTextColor="black"
    onChangeText={text => setPostalCode(text)}
    value={postalCode} />

<TouchableOpacity style={styles.Bttn} onPress={()=>navigation.navigate('Payment Result')}>
        <Text style={styles.BttnFOnt}>Pay Now</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />       
   </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 1
  },
  cardsFont: {
    color: 'black',
    fontSize: 12.2,
  },
  cardImage: {
    width: 200,
    height: 35, 
    borderRadius: 1,
    marginTop: 15.5,
    marginBottom: 14,
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
        width: 310,
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
      
});
