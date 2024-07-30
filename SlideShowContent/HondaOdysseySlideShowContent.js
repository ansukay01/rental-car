import React from "react";
import HondaOdysseySlideShow from "../SlideShow/HondaOdysseySlideShowScreen";
import HondaOdysseyBeneathSlideShowScreen from "../BeneathSlideShowScreen/HondaOdysseyBeneathSlideShowScreen";
import { View } from "react-native";

export default function HondaOdysseyShowContent() {
  return (
    <View>
        <HondaOdysseySlideShow/>
        <HondaOdysseyBeneathSlideShowScreen/>
    </View>
  )
}