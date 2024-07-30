import React from "react";
import JeepGladiatorSlideShow from "../SlideShow/JeepGladiatorSlideShowScreen";
import JeepGladiatorBeneathSlideShowScreen from "../BeneathSlideShowScreen/JeepGladiatorBeneathSlideShowScreen";
import { View } from "react-native";

export default function JeepGladiatorShowContent() {
  return (
    <View>
        <JeepGladiatorSlideShow/>
        <JeepGladiatorBeneathSlideShowScreen/>
    </View>
  )
}