import React from "react";
import HyundaiIoniq6SlideShow from "../SlideShow/HyundaiIoniqShowScreen";
import HyundaiIoniq6BeneathSlideShowScreen from "../BeneathSlideShowScreen/HyundaiIoniq6BeneathSlideShowScreen";
import { View } from "react-native";

export default function HyundaiIoniq6ShowContent() {
  return (
    <View>
        <HyundaiIoniq6SlideShow/>
        <HyundaiIoniq6BeneathSlideShowScreen/>
    </View>
  )
}