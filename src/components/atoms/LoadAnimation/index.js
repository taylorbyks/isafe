import React from "react"
import { LoadAnimationContainer, AnimationView } from "./styles"
import LottieView from 'lottie-react-native'

import loadAnimation from '../../../assets/load.json'

export const LoadAnimation = () => {
  return (
    <LoadAnimationContainer>
      <AnimationView>
        <LottieView source={loadAnimation} autoPlay loop/>
      </AnimationView>
    </LoadAnimationContainer>
  )
}
