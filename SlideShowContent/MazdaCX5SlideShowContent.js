import React from "react";
import MaxdaCX5SlideShow from "../SlideShow/MazdaCX5SlideShowScreen";
import MazdaCX5BeneathSlideShowScreen from "../BeneathSlideShowScreen/MazdaCX5BeneathSlideShowScreen";
import { View } from "react-native";

export default function MazdaCX5SlideShowContent() {
  return (
    <View>
        <MaxdaCX5SlideShow/>
        <MazdaCX5BeneathSlideShowScreen/>
    </View>
  )
}