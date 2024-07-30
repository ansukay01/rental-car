import React from "react";
import BMW2SeriesSlideShow from "../SlideShow/BMW2SeriesSlideShowScreen";
import { View } from "react-native";
import BMW2SeriesBeneathSlideShowScreen from "../BeneathSlideShowScreen/BMW2SeriesSlideShowScreen";

export default function BMW2SeriesSlideShowContent() {
  return (
    <View>
        <BMW2SeriesSlideShow/>
        <BMW2SeriesBeneathSlideShowScreen/>
    </View>
  )
}