import React from "react";
import HyundaiElantraSlideShow from "../SlideShow/HyundaiElantraSlideShowScreen";
import HyundaiElantraBeneathSlideShowScreen from "../BeneathSlideShowScreen/HyundaiElantraBeneathSlideShowScreen";
import { View } from "react-native";

export default function HyundaiElantraShowContent() {
  return (
    <View>
        <HyundaiElantraSlideShow/>
        <HyundaiElantraBeneathSlideShowScreen/>
    </View>
  )
}