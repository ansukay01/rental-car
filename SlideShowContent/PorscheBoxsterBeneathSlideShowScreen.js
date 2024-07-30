import React from "react";
import PorscheBoxsterSlideShow from "../SlideShow/PorscheBoxsterSlidehowScreen";
import PorscheBoxsterBeneathSlideShowScreen from "../BeneathSlideShowScreen/PorscheBoxterBeneathSlideShowScreen";
import { View } from "react-native";

export default function PorscheBoxsterSlideShowContent() {
  return (
    <View>
        <PorscheBoxsterSlideShow/>
        <PorscheBoxsterBeneathSlideShowScreen/>
    </View>
  )
}