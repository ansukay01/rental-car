import React from "react";
import MiniSlideShow from "../SlideShow/MiniSlideShowScreen";
import Mini5BeneathSlideShowScreen from "../BeneathSlideShowScreen/MiniBeneathSlideShowScreen";
import { View } from "react-native";

export default function MiniSlideShowContent() {
  return (
    <View>
        <MiniSlideShow/>
        <Mini5BeneathSlideShowScreen/>
    </View>
  )
}