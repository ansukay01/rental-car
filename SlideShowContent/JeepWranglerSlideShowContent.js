import React from "react";
import JeepWranglerSlideShow from "../SlideShow/JeepWranglerSlideShowScreen";
import JeepWranglerBeneathSlideShowScreen from "../BeneathSlideShowScreen/JeepWranglerBeneathSlideShowScreen";

import { View } from "react-native";

export default function JeepWranglerShowContent() {
  return (
    <View>
        <JeepWranglerSlideShow/>
        <JeepWranglerBeneathSlideShowScreen/>
    </View>
  )
}