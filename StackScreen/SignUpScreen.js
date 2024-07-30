import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function SignUpScreen({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
   
  
  return (
    <View style={styles.container}>
      <Text style={styles.signIn}>Not yet a Member? Sign Up</Text> 
      <TextInput
        style={styles.inpuT}
        placeholder="                         First Name"
        placeholderTextColor="black"
        onChangeText={text => setFirstName(text)}
        value={firstName}/>
     <TextInput
        style={styles.input}
        placeholder="                         Last Name"
        placeholderTextColor="black"
        onChangeText={text => setLastName(text)}
        value={lastName}
        />
      <TextInput
        style={styles.input}
        placeholder="                            Email"
        placeholderTextColor="black"
        onChangeText={text => setEmail(text)}
        value={email}/>  
      <TextInput
        style={styles.input}
        placeholder="                        Password"
        placeholderTextColor="black"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}/>    
        <TouchableOpacity style={styles.LogIn} onPress={()=>navigation.navigate('Home')}>
        <Text style={styles.logInFont}>Sign Up</Text>
         </TouchableOpacity>
      <Text style={styles.customer}>Become one of our members, and enjoy our </Text> 
      
        <Text style={styles.services}>SERVICES</Text>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  signIn: {
    fontSize: 20,
    marginTop: 160,
    color: '#1F51FF',
  },
  input: {
    width: 310,
    height: 55, 
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    height: 45,
    borderWidth: 1,
    backgroundColor: '#E1D9D1',
    borderRadius: 35,
  },
  inpuT: {
    width: 310,
    height: 55,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    height: 45,
    borderWidth: 1,
    backgroundColor: '#E1D9D1',
    borderRadius: 35,
    marginTop: 13
  },
  LogIn: {
    borderRadius: 35,
        backgroundColor: '#1F51FF',
        marginTop: 3,
        width: 310,
        height: 55,
  },
  logInFont: {
    color: 'white',
        textAlign: 'center',
        marginTop: 18
  }, 
  customer: {
    color: '#696969',
    marginEnd: 10,
    marginTop: 12.5,
    fontSize: 10
  },
  services: {
    color: '#1F51FF',
    marginEnd: 20,
    marginTop: 10, 
    fontSize: 10.5
  },
  loginImage: {
    width: 370,
    height: 200,
    borderRadius: 10,
    marginTop: 180
  }
  
    
});
