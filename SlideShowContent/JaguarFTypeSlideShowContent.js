import React from "react";
import JaguarFTypeSlideShow from "../SlideShow/JaguarFTypeSlideShowScreen";
import JaguarFTypeBeneathSlideShowScreen from "../BeneathSlideShowScreen/JaguarFTypeBeneathSlideShowScreen";
import { View } from "react-native";

export default function JaguarFTypeShowContent() {
  return (
    <View>
        <JaguarFTypeSlideShow/>
        <JaguarFTypeBeneathSlideShowScreen/>
    </View>
  )
}