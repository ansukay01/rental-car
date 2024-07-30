import React from "react";
import ChevroletTraverseSlideShow from "../SlideShow/ChevroletTraverseSlideShowScreen";
import ChevroletTraverseBeneathSlideShowScreen from "../BeneathSlideShowScreen/ChevroletTtaverseBeneathSlideShowScreen";
import { View } from "react-native";

export default function ChevroletTraverseSlideShowContent() {
  return (
    <View>
        <ChevroletTraverseSlideShow/>
        <ChevroletTraverseBeneathSlideShowScreen/>
    </View>
  )
}
