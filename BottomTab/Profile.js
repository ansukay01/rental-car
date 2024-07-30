import React, { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput,Text,  View, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function ProfileScreen(){

    return(
        <ScrollView>
        <View style={styles.container}>
        <Image source={{uri: 'https://www.bluelife.mu/wp-content/uploads/2016/07/Empty-profile-photo-1024x1024.png'}} style={styles.profilePicture} /> 
        <Text style={styles.nameFont}>Ansu Kamara</Text>

        <View style={styles.profileContainer}>
        <Image source={{uri: 'https://www.bluelife.mu/wp-content/uploads/2016/07/Empty-profile-photo-1024x1024.png'}} style={styles.subProfile} /> 
        <Text style={styles.suubFont}>Edit Profile</Text>
        <Image source={{uri: 'https://static.vecteezy.com/system/resources/previews/000/437/945/original/vector-settings-icon.jpg'}} style={styles.subProfile} /> 
        <Text style={styles.suubFont}>Setting</Text>
        <Image source={{uri: 'https://cdn.onlinewebfonts.com/svg/img_300628.png'}} style={styles.subProfile} /> 
        <Text style={styles.suubFont}>Invite a friend</Text>
        <Image source={{uri: 'https://icon-library.com/images/help-icon-png/help-icon-png-25.jpg'}} style={styles.subProfile} /> 
        <Text style={styles.suubFont}>Help</Text>
        </View>
        </View>
        </ScrollView>
             
       
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: "#e2e2e2",
    borderRadius: 40
  },
  
  profilePicture: {
    width: 140,
    height: 143,
    borderRadius: 15,
    marginTop: -30
  },
  nameFont: {
    fontSize: 15,
    marginLeft: -8,
    marginTop: 10 
  },
  profileContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 90,
    width: 360, 
    height: 450,
    borderRadius: 50
  },
  subProfile: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginTop: 25
  },
  subFont: {
    marginLeft: 200,
    marginBottom: 40
  },
  suubFont: {
    marginLeft: 195,
    marginBottom: 40,
    marginTop: -40,
    fontSize: 12,
    color: "#00308F"
  }

})
