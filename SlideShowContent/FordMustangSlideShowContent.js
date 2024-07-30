import React from "react";
import FordMustangSlideShow from "../SlideShow/FordMustangSlideShowScreen";
import FordMustangBeneathSlideShowScreen from "../BeneathSlideShowScreen/FordMustangBeneathSlideShowScreen";
import { View } from "react-native";

export default function FordMustangSlideShowContent() {
  return (
    <View>
       <FordMustangSlideShow/> 
       <FordMustangBeneathSlideShowScreen/>
    </View>
  )
}