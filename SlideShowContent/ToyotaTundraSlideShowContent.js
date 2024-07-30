import React from "react";
import ToyotaTundraSlideShow from "../SlideShow/ToyotaTundraSlideShowScreen";
import ToyotaTundraBeneathSlideShowScreen from "../BeneathSlideShowScreen/ToyotaTundraSlideShowScreen";
import { View } from "react-native";

export default function ToyotaTundraSlideShowContent() {
  return (
    <View>
        <ToyotaTundraSlideShow/>
        <ToyotaTundraBeneathSlideShowScreen/>
    </View>
  )
}