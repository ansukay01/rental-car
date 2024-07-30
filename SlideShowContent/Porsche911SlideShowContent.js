import React from "react";
import Porsche911SlideShow from "../SlideShow/Porsche911SlideShowScreen";
import Porsche911BeneathSlideShowScreen from "../BeneathSlideShowScreen/Porsche911SlideShowScreen";
import { View } from "react-native";

export default function Porsche911SlideShowContent() {
  return (
    <View>
        <Porsche911SlideShow/>
        <Porsche911BeneathSlideShowScreen/>
    </View>
  )
}