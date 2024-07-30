import React from "react";
import DefenderSlideShow from "../SlideShow/DefenderSlideShowScreen";
import DefenderBeneathSlideShowScreen from "../BeneathSlideShowScreen/DefenderSlideShowScreen";
import { View } from "react-native";

export default function DefenderSlideShowContent() {
  return (
    <View>
        <DefenderSlideShow/>
        <DefenderBeneathSlideShowScreen/>
    </View>
  )
}
