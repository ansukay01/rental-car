import React from "react";
import WolkwagenID7SlideShow from "../SlideShow/WolkwagenID7SlideShowScreen";
import WolkwagenID7BeneathSlideShowScreen from "../BeneathSlideShowScreen/WolkwagenBeneathSlideShowScreen";
import { View } from "react-native";

export default function WolkwagenID7SlideShowContent() {
  return (
    <View>
        <WolkwagenID7SlideShow/>
        <WolkwagenID7BeneathSlideShowScreen/>
    </View>
  )
}