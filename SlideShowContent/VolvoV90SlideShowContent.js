import React from "react";
import VolvoV90SlideShow from "../SlideShow/VolvoV90SlideShowScreen";
import VolvoV90BeneathSlideShowScreen from "../BeneathSlideShowScreen/VolvoV90BeneathSlideShowScreen";
import { View } from "react-native";

export default function VolvoV90SlideShowContent() {
  return (
    <View>
        <VolvoV90SlideShow/>
        <VolvoV90BeneathSlideShowScreen/>
    </View>
  )
}