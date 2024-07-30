import React from "react";
import AudiR8SlideShow from "../SlideShow/AudiR8SlideShowScreen";
import AudiR8BeneathSlideShowScreen from "../BeneathSlideShowScreen/AudiR8BeneathSlideShownScreen";
import { View } from "react-native";

export default function AudiR8SlideShowContent() {
  return (
    <View>
        <AudiR8SlideShow/>
        <AudiR8BeneathSlideShowScreen/>
    </View>
  )
}
