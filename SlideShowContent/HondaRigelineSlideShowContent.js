import React from "react";
import HondaRigelineSlideShow from "../SlideShow/HondaRigelineSlideShowScreen";
import HondaRigelineBeneathSlideShowScreen from "../BeneathSlideShowScreen/HondaRigelineBeneathSlideShowScreen";
import { View } from "react-native";

export default function HondaRigelineShowContent() {
  return (
    <View>
        <HondaRigelineSlideShow/>
        <HondaRigelineBeneathSlideShowScreen/>
    </View>
  )
}