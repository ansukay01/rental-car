import React from "react";
import KiaForteSlideShow from "../SlideShow/KiaForteSlideShowScreen";
import KiaForteBeneathSlideShowScreen from "../BeneathSlideShowScreen/KiaForteBeneathSlideShowScreen";
import { View } from "react-native";

export default function KiaForteSlideShowContent() {
  return (
    <View>
        <KiaForteSlideShow/>
        <KiaForteBeneathSlideShowScreen/>
    </View>
  )
}