import React from "react";
import BMW1SeriesSlideShow from "../SlideShow/BMW1SeriesSlideShowScreen";
import BMW1SeriesBeneathSlideShowScreen from "../BeneathSlideShowScreen/BMW1SeriesSlideShowScreen";
import { View } from "react-native";


export default function BMW1SeriesSlideShowContent() {
  return (
    <View>
        <BMW1SeriesSlideShow/>
        <BMW1SeriesBeneathSlideShowScreen/>
    </View>
  )
}