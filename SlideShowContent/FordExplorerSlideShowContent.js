import React from "react";
import FordExplorerSlideShow from "../SlideShow/FordExplorerSlideShowScreen";
import FordExplorerBeneathSlideShowScreen from "../BeneathSlideShowScreen/FordExplorerSlideShowScreen";
import { View } from "react-native";

export default function FordExplorerSlideShowContent() {
  return (
    <View>
        <FordExplorerSlideShow/>
        <FordExplorerBeneathSlideShowScreen/>
    </View>
  )
}
