import React from "react";
import FordTransitSlideShow from "../SlideShow/FordTransitSlideShowScreen";
import FordTransitBeneathSlideShowScreen from "../BeneathSlideShowScreen/FordTransitBeneathSlideShowScreen";
import { View } from "react-native";

export default function FordTransitSlideShowContent() {
  return (
    <View>
        <FordTransitSlideShow/>
        <FordTransitBeneathSlideShowScreen/>
    </View>
  )
}
