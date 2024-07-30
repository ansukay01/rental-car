import React from "react";
import CadillacEscalladeSlideShow from "../SlideShow/CadillacEscalladeSlideShowScreen";
import CadillacEscaladeBeneathSlideShowScreen from "../BeneathSlideShowScreen/CadillacEscalladeSlideShowScreen";
import { View } from "react-native";

export default function CadillacEscaladeSlideShowContent() {
  return (
    <View>
        <CadillacEscalladeSlideShow />
        <CadillacEscaladeBeneathSlideShowScreen/>
    </View>
  )
}
