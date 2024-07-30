import React from "react";
import FordFiestaSlideShow from "../SlideShow/FordFiestaSlideShowScreen";
import FordFiestaBeneathSlideShowScreen from "../BeneathSlideShowScreen/FordFiestaBeneathSlideShowScreen";
import { View } from "react-native";

export default function FordFiestaSlideShowContent() {
  return (
    <View>
        <FordFiestaSlideShow/>
        <FordFiestaBeneathSlideShowScreen/>
    </View>
  )
}
