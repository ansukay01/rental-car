import React from "react";
import BMWi4SlideShow from "../SlideShow/BMWi4SlideShowScreen";
import BMWi4BeneathSlideShowScreen from "../BeneathSlideShowScreen/BMWi4BeneathSlideShowScreen";
import { View } from "react-native";

export default function BMWi4SlideShowContent() {
  return (
    <View>
        <BMWi4SlideShow/>
        <BMWi4BeneathSlideShowScreen/>
    </View>
  )
}
