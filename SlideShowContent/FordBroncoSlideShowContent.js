import React from "react";
import FordBroncoSlideShow from "../SlideShow/FordBroncoSlideShowScreen";
import FordBroncoBeneathSlideShowScreen from "../BeneathSlideShowScreen/FordBroncoBeneathSlideShowScreen";
import { View } from "react-native";

export default function FordBroncoSlideShowContent() {
  return (
    <View>
        <FordBroncoSlideShow/>
        <FordBroncoBeneathSlideShowScreen/>
    </View>
  )
}
