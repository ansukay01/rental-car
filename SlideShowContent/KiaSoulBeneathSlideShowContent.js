import React from "react";
import KiaSoulSlideShow from "../SlideShow/KiaSoulSlideShow";
import KiaSoulBeneathSlideShowScreen from "../BeneathSlideShowScreen/KiaSoulBeneathSlideShowScreen";
import { View } from "react-native";

export default function KiaSoulSlideShowContent() {
  return (
    <View>
        <KiaSoulSlideShow/>
        <KiaSoulBeneathSlideShowScreen/>
    </View>
  )
}