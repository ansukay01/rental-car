import React from "react";
import VauxhallAstraSlideShow from "../SlideShow/VauxhallAstraSlideShowScreen";
import VauxhallAstraBeneathSlideShowScreen from "../BeneathSlideShowScreen/VauxhallAstraBeneathSlideShowScreen";
import { View } from "react-native";

export default function VauxhallAstraSlideShowContent() {
  return (
    <View>
        <VauxhallAstraSlideShow/>
        <VauxhallAstraBeneathSlideShowScreen/>
    </View>
  )
}