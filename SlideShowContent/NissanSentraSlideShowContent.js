import React from "react";
import NissanSentraSlideShow from "../SlideShow/NissanSentraSlideShowScreen";
import NissanSentraBeneathSlideShowScreen from "../BeneathSlideShowScreen/NissanSentraSlideShowScreen";
import { View } from "react-native";

export default function NissanSentraSlideShowContent() {
  return (
    <View>
        <NissanSentraSlideShow/>
        <NissanSentraBeneathSlideShowScreen/>
    </View>
  )
}