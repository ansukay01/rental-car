import React from "react";
import FerrariF8SlideShow from "../SlideShow/FerrariF8SlideShowScreen";
import FerrariF8BeneathSlideShowScreen from "../BeneathSlideShowScreen/FerrariF8SlideShownScreen";
import { View } from "react-native";

export default function FerrariF8SlideShowContent() {
  return (
    <View>
        <FerrariF8SlideShow/>
        <FerrariF8BeneathSlideShowScreen/>
    </View>
  )
}
