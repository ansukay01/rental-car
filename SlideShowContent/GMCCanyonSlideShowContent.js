import React from "react";
import GMCCanyonSlideShow from "../SlideShow/GMCCanyonSlideShowScreen";
import GMCCanyonBeneathSlideShowScreen from "../BeneathSlideShowScreen/GMCCanyonBeneathSlideShowScreen";
import { View } from "react-native";

export default function GMCCanyonSlideShowContent() {
  return (
    <View>
        <GMCCanyonSlideShow/>
        <GMCCanyonBeneathSlideShowScreen/>
    </View>
  )
}
