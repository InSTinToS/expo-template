import { Dimensions, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

import { OSRelative } from '@src/utils/OS'

import { styled } from 'nativewind'

const RoundedTop = ({ fill, ...props }) => (
  <View {...props}>
    <Svg
      viewBox='0 0 500 42'
      width={OSRelative(Dimensions.get('window').width, '100%')}
      height={OSRelative(Dimensions.get('window').width * 0.087, undefined)}
    >
      <Path d='M0 43 h500 s-91 -42 -250 -42-250 42 -250 42z' fill={fill} />
    </Svg>
  </View>
)

export default styled(RoundedTop)
