import React from "react";
import ToyotaGT86SlideShow from "../SlideShow/ToyataGT86SlideShowScreen";
import ToyotaGT86BeneathSlideShowScreen from "../BeneathSlideShowScreen/ToyotaGt86BeneathSlideShowScreen";
import { View } from "react-native";

export default function ToyotaGT86SlideShowContent() {
  return (
    <View>
        <ToyotaGT86SlideShow/>
        <ToyotaGT86BeneathSlideShowScreen/>
    </View>
  )
}