import React from "react";
import ToyotaCorollaSlideShow from "../SlideShow/ToyotaCorollaSlideShowScreen";
import ToyotaCorollaBeneathSlideShowScreen from "../BeneathSlideShowScreen/ToyotaCorollaBeneathSlideShowScreen";
import { View } from "react-native";

export default function ToyotaCorollaSlideShowContent() {
  return (
    <View>
        <ToyotaCorollaSlideShow/>
        <ToyotaCorollaBeneathSlideShowScreen/>
    </View>
  )
}