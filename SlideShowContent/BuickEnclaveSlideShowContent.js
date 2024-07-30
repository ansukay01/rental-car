import React from "react";
import BuickEnclaveSlideShow from "../SlideShow/BuickEnclaveSlideShowScreen";
import BuickEnclaveBeneathSlideShowScreen from "../BeneathSlideShowScreen/BuickEnclaveBeneathSlideShowScreen";
import { View } from "react-native";

export default function BuickEnclaveSlideShowContent() {
  return (
    <View>
        <BuickEnclaveSlideShow/>
        <BuickEnclaveBeneathSlideShowScreen/>
    </View>
  )
}