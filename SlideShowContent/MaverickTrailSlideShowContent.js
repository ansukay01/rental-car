import React from "react";
import MaverickTrailSlideShow from "../SlideShow/MaverickTrailSlideShowScreen";
import MaverickTrailBeneathSlideShowScreen from "../BeneathSlideShowScreen/MaverickTrailSlideShowScreen"
import { View } from "react-native";

export default function MaverickTrailSlideShowContent() {
  return (
    <View>
        <MaverickTrailSlideShow/>
        <MaverickTrailBeneathSlideShowScreen/>
    </View>
  )
}