import React from "react";
import BMW8SeriesSlideShow from "../SlideShow/BMW8SeriesSlideShowScreen";
import BMW8SeriesBeneathSlideShowScreen from "../BeneathSlideShowScreen/BMW8SeriesBeneathSlideShowScreen";
import { View } from "react-native";

export default function BMW8SeriesSlideShowContent() {
  return (
    <View>
        <BMW8SeriesSlideShow/>
        <BMW8SeriesBeneathSlideShowScreen/>
    </View>
  )
}
