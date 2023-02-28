import { useWindowDimensions } from 'react-native'

import { pxToNumber } from '@src/utils/px'

interface IResponsiveScaleParams {
  strength?: number
  size: string | number
  limits?: { max?: number; min?: number }
  type?: 'moderate' | 'vertical' | 'horizontal'
}

type TResponsiveScale = (params?: IResponsiveScaleParams) => number

const useResponsiveScale = () => {
  const { width, height } = useWindowDimensions()

  let guidelineBaseWidth = 400
  let guidelineBaseHeight = 800
  const isPortrait = width <= height

  if (!isPortrait) {
    const aux = guidelineBaseHeight
    guidelineBaseHeight = guidelineBaseWidth
    guidelineBaseWidth = aux
  }

  const responsiveScale: TResponsiveScale = ({
    size,
    limits,
    strength = 0.18,
    type = 'moderate'
  }) => {
    let newSize = pxToNumber(size)
    const verticalProportion = height / guidelineBaseHeight
    const horizontalProportion = width / guidelineBaseWidth
    const bothProportion = (verticalProportion + horizontalProportion) / 2

    const applyStrength = (scaledSize: number) =>
      newSize + (scaledSize - newSize) * (strength * 2)

    switch (type) {
      case 'horizontal':
        newSize = applyStrength(horizontalProportion * newSize)
        break

      case 'vertical':
        newSize = applyStrength(verticalProportion * newSize)
        break

      default: {
        newSize = applyStrength(bothProportion * newSize)
        break
      }
    }

    if (limits) {
      const maxSize = limits.max * pxToNumber(size)
      const minSize = limits.min * pxToNumber(size)

      newSize = newSize >= maxSize ? maxSize : newSize
      newSize = newSize <= minSize ? minSize : newSize
    }

    return newSize
  }

  return { responsiveScale, screenWidth: width, screenHeight: height }
}

export default useResponsiveScale

/*
  Inspiration:
    Soluto - Size Matters
    https://medium.com/soluto-engineering/size-matters-5aeeb462900a

  if (type = vertical)    the scale only apply in vertical
  if (type = horizontal)  the scale only apply in horizontal
  if (type = moderate)    the scale apply in average of vertical and horizontal

  Example:
    Strength = 0.5
    Base = 400x800

  Object size
    in 400x800 = 100x100
    in 200x800 = 75x75
    in 400x400 = 75x75
    in 200x400 = 50x50

  Horizontal size is more shocking because: baseWidth < baseHeight

  Strength determines how much will be scaled (in 400x800 = 100x100):
  All sizes in 200x400 only changing the strength

  Strength = 0.25
  75x75

  Strength = 0.5
  50x50

  Strength = 0.75
  25x25

  Strength = 1
  0x0
*/
