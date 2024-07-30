import React from "react";
import SubaruOutbackSlideShow from "../SlideShow/SubaruOutbackSlideShowScreen";
import SubaruOutbackBeneathSlideShowScreen from "../BeneathSlideShowScreen/SubaruOutbackBeneathSlideShowScreen";
import { View } from "react-native";

export default function SubaruOutbackSlideShowContent() {
  return (
    <View>
        <SubaruOutbackSlideShow/>
        <SubaruOutbackBeneathSlideShowScreen/>
    </View>
  )
}