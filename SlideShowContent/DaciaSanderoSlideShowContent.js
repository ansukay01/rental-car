import React from "react";
import DaciaSanderoSlideShow from "../SlideShow/DaciaSanderoSlideShowScreen";
import DaciaSanderoBeneathSlideShowScreen from "../BeneathSlideShowScreen/DaciaSanderoSlideShowScreen";
import { View } from "react-native";

export default function DaciaSanderoSlideShowContent() {
  return (
    <View>
        <DaciaSanderoSlideShow/>
        <DaciaSanderoBeneathSlideShowScreen/>
    </View>
  )
}
