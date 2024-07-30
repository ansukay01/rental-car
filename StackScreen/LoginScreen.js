import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    // Add logic to authenticate user
    console.log('Logging in with username: ', email, ' and password: ', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signIn}>Already a member? Sign In</Text> 
      <TextInput
        style={styles.inpuT}
        placeholder="                             Email"
        placeholderTextColor="black"
        onChangeText={text => setEmail(text)}
        value={email}/>
     <TextInput
        style={styles.input}
        placeholder="                          Password"
        placeholderTextColor="black"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
        />
        <TouchableOpacity style={styles.LogIn} onPress={()=>navigation.navigate('Home')}>
        <Text style={styles.logInFont}>Sign In</Text>
      </TouchableOpacity> 
      <Text style={styles.notMember}>If you're not a member</Text> 
      <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
        <Text style={styles.member}>Sign Up</Text>
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
  },
  signIn: {
    fontSize: 20,
    marginTop: 290,
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
  notMember: {
    color: '#696969',
    marginEnd: 90,
    marginTop: 12.5
  },
  member: {
    color: '#1F51FF',
    textDecorationLine: 'underline',
    marginLeft: 145,
    marginTop: -18, 
  },
  loginImage: {
    width: 370,
    height: 200,
    borderRadius: 10,
    marginTop: 180
  }
  
    
});
