import React from "react";
import AudiA6SlideShow from "../SlideShow/AudiA6SlideShowScreen";
import AudiA6BeneathSlideShowScreen from "../BeneathSlideShowScreen/AudiA6BeneathSlideShowScreen";
import { View } from "react-native";

export default function AudiA6SlideShowContent() {
  return (
    <View>
        <AudiA6SlideShow/>
        <AudiA6BeneathSlideShowScreen/>
    </View>
  )
}
