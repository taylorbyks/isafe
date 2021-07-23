import { Dimensions, PixelRatio } from 'react-native'

const { height, width } = Dimensions.get('window')
const figmaWidth = 375

const wp = (widthPercent) => {
  return PixelRatio.roundToNearestPixel((width * parseFloat(widthPercent)) / 100,)
}

const hp = (heightPercent) => {
  return PixelRatio.roundToNearestPixel((height * parseFloat(heightPercent)) / 100,)
}

const px = (valuePx) => {
  return PixelRatio.roundToNearestPixel((width * parseFloat((valuePx / figmaWidth) * 100)) / 100,)
}

export const metrics = {
  wp, hp, px
}