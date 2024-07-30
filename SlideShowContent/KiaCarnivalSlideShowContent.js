import React from "react";
import KiaCarnivalSlideShow from "../SlideShow/KiaCarnivalSlideShowScreen";
import KiaCarnivalBeneathSlideShowScreen from "../BeneathSlideShowScreen/KiaCarnivalBeneathSlideSHOWScreen";
import { View } from "react-native";

export default function KiaCarnivalSlideShowContent() {
  return (
    <View>
        <KiaCarnivalSlideShow/>
        <KiaCarnivalBeneathSlideShowScreen/>
    </View>
  )
}
