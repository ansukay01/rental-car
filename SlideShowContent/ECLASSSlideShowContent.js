import React from "react";
import ECLASSSlideShow from "../SlideShow/ECLASSSlideShowScreen";
import ECLASSBeneathSlideShowScreen from "../BeneathSlideShowScreen/ECLASSBeneathSlideShownScreen";
import { View } from "react-native";

export default function ECLASSSlideShowContent() {
  return (
    <View>
        <ECLASSSlideShow/>
        <ECLASSBeneathSlideShowScreen/>
    </View>
  )
}
