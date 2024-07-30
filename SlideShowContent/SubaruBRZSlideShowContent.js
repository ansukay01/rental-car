import React from "react";
import SubaruBRZSlideShow from "../SlideShow/SubaruBRZSlideShowScreen";
import SubaruBRZBeneathSlideShowScreen from "../BeneathSlideShowScreen/SubaruBRZBeneathSlideShowScreen";
import { View } from "react-native";

export default function SubaruBRZSlideShowContent() {
  return (
    <View>
        <SubaruBRZSlideShow/>
        <SubaruBRZBeneathSlideShowScreen/>
    </View>
  )
}