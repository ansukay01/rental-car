import React from "react";
import Polestar2SlideShow from "../SlideShow/Polestar2SlideShowScreen";
import Polestar2BeneathSlideShowScreen from "../BeneathSlideShowScreen/Polestar2BeneathSlideShowScreen";
import { View } from "react-native";

export default function Polestar2SlideShowContent() {
  return (
    <View>
        <Polestar2SlideShow/>
        <Polestar2BeneathSlideShowScreen/>
    </View>
  )
}