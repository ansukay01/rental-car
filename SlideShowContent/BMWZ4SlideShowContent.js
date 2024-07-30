import React from "react";
import BMWZ4SlideShow from "../SlideShow/BMWZ4SlideShowScreen";
import BMWZ4sBeneathSlideShowScreen from "../BeneathSlideShowScreen/BMWZ4BeneathSlideShowScreen";
import { View } from "react-native";

export default function BMWZ4SlideShowContent() {
  return (
    <View>
        <BMWZ4SlideShow/>
        <BMWZ4sBeneathSlideShowScreen/>
    </View>
  )
}
