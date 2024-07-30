import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import ProfileScreen from './BottomTab/Profile';
import MyStack from './CombinedStackScreen/Stack';


const Tab = createBottomTabNavigator();
export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MyStack} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"#00308F"} size={40} />
            ),
          }}
        /> 
      
        <Tab.Screen name="Profile" component={ProfileScreen} 
       options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={'#00308F'} size={40} />
        ),
      }}
    /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
};
 
   
