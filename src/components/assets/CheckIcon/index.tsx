import { View } from 'react-native'
import Svg, { Path, SvgProps } from 'react-native-svg'

import { styled } from 'nativewind'

const CheckIcon = ({ fill, ...props }: SvgProps) => (
  <View {...props}>
    <Svg viewBox='0 0 17 13'>
      <Path
        d='M5.82793 12.025L0.12793 6.325L1.55293 4.9L5.82793 9.175L15.0029 0L16.4279 1.425L5.82793 12.025Z'
        fill={fill}
      />
    </Svg>
  </View>
)

export default styled(CheckIcon)
