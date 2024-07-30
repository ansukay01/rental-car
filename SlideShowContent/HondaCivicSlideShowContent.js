import React from "react";
import HondaCivicSlideShow from "../SlideShow/HondaCivicSlideShowScreen";
import HondaCivicBeneathSlideShowScreen from "../BeneathSlideShowScreen/HondaCivicBeneathSlideShowScreen";
import { View } from "react-native";

export default function HondaCivicShowContent() {
  return (
    <View>
        <HondaCivicSlideShow/>
        <HondaCivicBeneathSlideShowScreen/>
    </View>
  )
}