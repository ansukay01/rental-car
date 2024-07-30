import React from "react";
import MaverickSportSlideShow from "../SlideShow/MaverickSportSlideShowScreen";
import MaverickSportRBeneathSlideShowScreen from "../BeneathSlideShowScreen/MaverICKSportBeneathSlideShowScreen";
import { View } from "react-native";

export default function MaverickSportSlideShowContent() {
  return (
    <View>
        <MaverickSportSlideShow/>
        <MaverickSportRBeneathSlideShowScreen/>
    </View>
  )
}