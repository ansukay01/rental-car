import React from "react";
import MaverickRSlideShow from "../SlideShow/MaverickRSlideShowScreen";
import MaverickRBeneathSlideShowScreen from "../BeneathSlideShowScreen/MaverickRBeneathSlideShowScreen";
import { View } from "react-native";

export default function MaverickRSlideShowContent() {
  return (
    <View>
        <MaverickRSlideShow/>
        <MaverickRBeneathSlideShowScreen/>
    </View>
  )
}