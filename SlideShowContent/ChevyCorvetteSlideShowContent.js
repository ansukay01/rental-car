import React from "react";
import ChevyCorvetteSlideShow from "../SlideShow/ChevyCorvetteSlideShowScreen";
import ChevyCorvetteBeneathSlideShowScreen from "../BeneathSlideShowScreen/ChevyCorvetteBeneathSlideShowScreen";
import { View } from "react-native";

export default function ChevyCorvetteSlideShowContent() {
  return (
    <View>
        <ChevyCorvetteSlideShow/>
        <ChevyCorvetteBeneathSlideShowScreen/>
    </View>
  )
}
