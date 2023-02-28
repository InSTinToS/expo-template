import { Image, Platform } from 'react-native'

import { phoneHeight } from '@src/utils/dimensions'

import bg from '@assets/bg.png'
import { styled } from 'nativewind'

const AppBackground = () => (
  <Image
    source={bg as any}
    style={{
      height: Platform.OS === 'web' ? String(phoneHeight()) : phoneHeight()
    }}
    tw='absolute -z-20 h-full w-full'
  />
)

export default styled(AppBackground)
