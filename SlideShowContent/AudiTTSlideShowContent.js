import React from "react";
import AudiTTSlideShow from "../SlideShow/AudiTTSlideShowScreen";
import AudiTTBeneathSlideShowScreen from "../BeneathSlideShowScreen/Audiq8BeneathSlideShowScreen";
import { View } from "react-native";

export default function AudiTTSlideShowContent() {
  return (
    <View>
        <AudiTTSlideShow/>
        <AudiTTBeneathSlideShowScreen/>
    </View>
  )
}
