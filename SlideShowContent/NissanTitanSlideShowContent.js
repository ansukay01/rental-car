import React from "react";
import NissanTitanSlideShow from "../SlideShow/NissanTitanSlideShow";
import NissanTitanBeneathSlideShowScreen from "../BeneathSlideShowScreen/NissanTitanSlideShowScreen";
import { View } from "react-native";

export default function NissanTitanSlideShowContent() {
  return (
    <View>
        <NissanTitanSlideShow/>
        <NissanTitanBeneathSlideShowScreen/>
    </View>
  )
}