import React from "react";
import PorscheCayenneSlideShow from "../SlideShow/PorscheCayenneSlideScreen";
import PorscheCayenneBeneathSlideShowScreen from "../BeneathSlideShowScreen/PorscheCayenneBeneathSlideShowScreen";
import { View } from "react-native";

export default function PorscheCayenneSlideShowContent() {
  return (
    <View>
        <PorscheCayenneSlideShow/>
        <PorscheCayenneBeneathSlideShowScreen/>
    </View>
  )
}