import React from "react";
import VolvoV60SlideShow from "../SlideShow/VolvoV60SlideShowScreen";
import VolvoV60BeneathSlideShowScreen from "../BeneathSlideShowScreen/VolvoV60BeneathSlideShowScreen";
import { View } from "react-native";

export default function VolvoV60SlideShowContent() {
  return (
    <View>
        <VolvoV60SlideShow/>
        <VolvoV60BeneathSlideShowScreen/>
    </View>
  )
}