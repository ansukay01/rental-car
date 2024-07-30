import React from "react";
import BentleyGTSlideShow from "../SlideShow/BentleyGTSlideShowScreen";
import BentleyGTBeneathSlideShowScreen from "../BeneathSlideShowScreen/BentleyGTBeneathSlideShowScreen";
import { View } from "react-native";

export default function BentleyGTSlideShowContent() {
  return (
    <View>
        <BentleyGTSlideShow/>
        <BentleyGTBeneathSlideShowScreen/>
    </View>
  )
}
