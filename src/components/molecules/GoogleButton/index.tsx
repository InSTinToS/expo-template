import { TouchableOpacity } from 'react-native'

import GoogleIcon from '@src/components/assets/GoogleIcon'
import Text from '@src/components/atoms/Text'

import { styled } from 'nativewind'

const GoogleButton = ({ ...props }) => (
  <TouchableOpacity tw='flex flex-row items-center justify-center' {...props}>
    <GoogleIcon tw='mr-4 h-6 w-6' />
    <Text tw='text-gray-500'>Entrar com o Google</Text>
  </TouchableOpacity>
)

export default styled(GoogleButton)
