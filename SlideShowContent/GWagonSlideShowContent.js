import React from "react";
import GWagonSlideShow from "../SlideShow/GWagonSlideShowScreen";
import GWagonBeneathSlideShowScreen from "../BeneathSlideShowScreen/GWagonBeneathSlideShowScreen";
import { View } from "react-native";

export default function GWagonShowContent() {
  return (
    <View>
        <GWagonSlideShow/>
        <GWagonBeneathSlideShowScreen/>
    </View>
  )
}