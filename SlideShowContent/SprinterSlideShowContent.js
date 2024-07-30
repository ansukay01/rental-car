import React from "react";
import SprinterSlideShow from "../SlideShow/SprinterSlideShowScreen";
import SprinterBeneathSlideShowScreen from "../BeneathSlideShowScreen/SprinterBeneathSlideShowScreen";
import { View } from "react-native";

export default function SprinterSlideShowContent() {
  return (
    <View>
        <SprinterSlideShow/>
        <SprinterBeneathSlideShowScreen/>
    </View>
  )
}