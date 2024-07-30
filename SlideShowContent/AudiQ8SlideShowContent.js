import React from "react";
import AudiQ8SlideShow from "../SlideShow/AudiQ8SlideShowScreen";
import AudiQ8BeneathSlideShowScreen from "../BeneathSlideShowScreen/Audiq8BeneathSlideShowScreen";
import { View } from "react-native";

export default function AudiQ8SlideShowContent() {
  return (
    <View>
        <AudiQ8SlideShow />
        <AudiQ8BeneathSlideShowScreen />
    </View>
  )
}
