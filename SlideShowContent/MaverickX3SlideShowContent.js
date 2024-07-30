import React from "react";
import MaverickX3SlideShow from "../SlideShow/MaverickX3SlideShowScreen";
import MaverickX3BeneathSlideShowScreen from "../BeneathSlideShowScreen/MaverickX3SlideShowScreen";
import { View } from "react-native";

export default function MaverickX3SlideShowContent() {
  return (
    <View>
        <MaverickX3SlideShow/>
        <MaverickX3BeneathSlideShowScreen/>
    </View>
  )
}