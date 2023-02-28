import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

import { styled } from 'nativewind'


const ArrowIcon = ({ fill, ...props }) => (
  <View {...props}>
    <Svg fill='none' viewBox='0 0 15 24'>
      <Path
        fill={fill}
        d='M12.225 24l-12-12 12-12 2.13 2.13L4.485 12l9.87 9.87-2.13 2.13z'
      />
    </Svg>
  </View>
)

export default styled(ArrowIcon)
