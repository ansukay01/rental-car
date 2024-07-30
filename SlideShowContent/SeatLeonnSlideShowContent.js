import React from "react";
import SeatLeonSlideShow from "../SlideShow/SeatLeonSlideShowScreen";
import SeatLeonBeneathSlideShowScreen from "../BeneathSlideShowScreen/SeatLeonBeneathSlideShowScreen";
import { View } from "react-native";

export default function SeatLeonSlideShowContent() {
  return (
    <View>
        <SeatLeonSlideShow/>
        <SeatLeonBeneathSlideShowScreen/>
    </View>
  )
}