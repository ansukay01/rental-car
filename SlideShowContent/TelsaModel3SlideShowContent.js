import React from "react";
import TelsaModel3SlideShow from "../SlideShow/TelsaModel3SlideShowScreen";
import TelsaModel3BeneathSlideShowScreen from "../BeneathSlideShowScreen/TelsaModel3BeneathSlideShowScreen";
import { View } from "react-native";

export default function TelsaModel3SlideShowContent() {
  return (
    <View>
        <TelsaModel3SlideShow/>
        <TelsaModel3BeneathSlideShowScreen/>
    </View>
  )
}