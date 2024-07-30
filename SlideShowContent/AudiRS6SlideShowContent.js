import React from "react";
import AudiRS6SlideShow from "../SlideShow/AudiRS6SlideShowScreen";
import AudiRS6BeneathSlideShowScreen from "../BeneathSlideShowScreen/AudiRS6SlideShowScreen";
import { View } from "react-native";

export default function AudiRS6SlideShowContent() {
  return (
    <View>
        <AudiRS6SlideShow/>
        <AudiRS6BeneathSlideShowScreen/>
    </View>
  )
}
