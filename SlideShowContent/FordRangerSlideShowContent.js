import React from "react";
import FordRangerSlideShow from "../SlideShow/FordRangerSlideShowScreen";
import FordRangerBeneathSlideShowScreen from "../BeneathSlideShowScreen/FordRangerBeneathSlideShowScreen";
import { View } from "react-native";

export default function FordRangerSlideShowContent() {
  return (
    <View>
        <FordRangerSlideShow/>
        <FordRangerBeneathSlideShowScreen/>
    </View>
  )
}
