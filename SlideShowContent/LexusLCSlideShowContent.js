import React from "react";
import LexusLCSlideShow from "../SlideShow/LexusLCSlideShowScreen";
import LexusLCBeneathSlideShowScreen from "../BeneathSlideShowScreen/LexusLCBeneathSlideShowScreen";
import { View } from "react-native";

export default function LexusLCSlideShowContent() {
  return (
    <View>
        <LexusLCSlideShow/>
        <LexusLCBeneathSlideShowScreen/>
    </View>
  )
}