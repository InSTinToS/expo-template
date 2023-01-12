import { Text, View } from 'react-native'

import { styled } from 'nativewind'

const MyText = ({ children, ...props }) => (
  <Text
    className='text-xl font-semibold my-1 light:text-black dark:text-white'
    {...props}
  >
    {children}
  </Text>
)

export default styled(MyText)
