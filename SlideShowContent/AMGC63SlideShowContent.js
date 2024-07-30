import React from "react";
import AMGC63SlideShow from "../SlideShow/AMGC63SlideShowScreen";
import AMGC63BeneathSlideShowScreen from "../BeneathSlideShowScreen/AMGC63BeneathSlideShowScreen";
import { View } from "react-native";

export default function AMGC63SlideShowContent() {
  return (
    <View>
        <AMGC63SlideShow/>
        <AMGC63BeneathSlideShowScreen/>
    </View>
  )
}
