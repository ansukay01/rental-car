import React from "react";
import VolkswagenGolfSlideShow from "../SlideShow/VolkwagonGolfSlideShowScreen";
import VolkswagenGolfBeneathSlideShowScreen from "../BeneathSlideShowScreen/VolkwagonGolfSlideShowScreen";
import { View } from "react-native";

export default function VolkswagenGolfSlideShowContent() {
  return (
    <View>
        <VolkswagenGolfSlideShow/>
        <VolkswagenGolfBeneathSlideShowScreen/>
    </View>
  )
}
