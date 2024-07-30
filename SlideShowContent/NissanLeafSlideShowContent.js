import React from "react";
import NissanLeafSlideShow from "../SlideShow/NissanLeafSlideShowScreen";
import NissanLeafBeneathSlideShowScreen from "../BeneathSlideShowScreen/NissanLeafSlideShowScreen";
import { View } from "react-native";

export default function NissanLeafSlideShowContent() {
  return (
    <View>
        <NissanLeafSlideShow/>
        <NissanLeafBeneathSlideShowScreen/>
    </View>
  )
}