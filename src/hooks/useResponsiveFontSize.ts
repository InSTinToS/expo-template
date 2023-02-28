import useResponsiveScale from './useResponsiveScale'

import { StyleProp, TextStyle } from 'react-native'

import fontSize from '@src/styles/custom/fontSize'
import { TFontSize } from '@src/styles/types'

const useResponsiveFontSize = (size: TFontSize) => {
  const { responsiveScale } = useResponsiveScale()

  const limits = { min: 0.8, max: 1.2 }

  const responsiveFontSize: StyleProp<TextStyle> = {
    fontSize: responsiveScale({ size: fontSize[size][0], limits }),
    lineHeight: responsiveScale({ size: fontSize[size][1], limits })
  }

  return responsiveFontSize
}

export default useResponsiveFontSize
