import React from "react";
import CamaroZL1SlideShow from "../SlideShow/CamaroZL1SlideShowScreen";
import CamaroZL1BeneathSlideShowScreen from "../BeneathSlideShowScreen/CamaroZL1BeneathSlideShowScreen";
import { View } from "react-native";

export default function CamaroZL1SlideShowContent() {
  return (
    <View>
        <CamaroZL1SlideShow/>
        <CamaroZL1BeneathSlideShowScreen/>
    </View>
  )
}
