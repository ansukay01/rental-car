import React from "react";
import MaxdaMX5SlideShow from "../SlideShow/MazdaMX5MiataSlideShowScreen";
import MazdaMX5BeneathSlideShowScreen from "../BeneathSlideShowScreen/MazdaMX5BeneathSlideShowScreen";
import { View } from "react-native";

export default function MazdaMX5SlideShowContent() {
  return (
    <View>
        <MaxdaMX5SlideShow/>
        <MazdaMX5BeneathSlideShowScreen/>
    </View>
  )
}