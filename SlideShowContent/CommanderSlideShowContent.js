import React from "react";
import CommanderSlideShow from "../SlideShow/CommanderSlideShowScreen";
import CommanderBeneathSlideShowScreen from "../BeneathSlideShowScreen/CommanderBeneathSlideShowScreen";
import { View } from "react-native";

export default function CommanderSlideShowContent() {
  return (
    <View>
        <CommanderSlideShow/>
        <CommanderBeneathSlideShowScreen/>
    </View>
  )
}
