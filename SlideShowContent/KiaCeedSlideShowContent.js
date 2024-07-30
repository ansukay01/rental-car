import React from "react";
import KiaCeedSlideShow from "../SlideShow/KiaCeedSlideShowScreen";
import { View } from "react-native";
import KiaCeedBeneathSlideShowScreen from "../BeneathSlideShowScreen/KiaCeedBeneathSlideShowScreen";

export default function KiaCeedSlideShowContent() {
  return (
    <View>
        <KiaCeedSlideShow/>
        <KiaCeedBeneathSlideShowScreen/>
    </View>
  )
}
