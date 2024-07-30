import React from "react";
import ToyotaSiennaSlideShow from "../SlideShow/ToyotaSiennaSlideShowScreen";
import ToyotaSiennaBeneathSlideShowScreen from "../BeneathSlideShowScreen/ToyoytaSiennaBeneathSlideShowScreen";
import { View } from "react-native";

export default function ToyotaSiennaSlideShowContent() {
  return (
    <View>
        <ToyotaSiennaSlideShow/>
        <ToyotaSiennaBeneathSlideShowScreen/>
    </View>
  )
}