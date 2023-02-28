import { View } from 'react-native'
import Svg, { Path, SvgProps } from 'react-native-svg'

import { styled } from 'nativewind'

const AlertIcon = ({ fill, ...props }: SvgProps) => (
  <View {...props}>
    <Svg viewBox='0 0 22 20'>
      <Path
        d='M12 12.8906H10V7.89062H12M12 16.8906H10V14.8906H12M0 19.8906H22L11 0.890625L0 19.8906Z'
        fill={fill}
      />
    </Svg>
  </View>
)

export default styled(AlertIcon)
