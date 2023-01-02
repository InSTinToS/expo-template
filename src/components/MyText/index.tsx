import { Text } from 'react-native'

import { styled } from 'nativewind'

const MyText = ({ content, ...props }: { content: string }) => (
  <Text
    className='text-xl font-semibold light:text-black dark:text-white'
    {...props}
  >
    {content}
  </Text>
)

export default styled(MyText)
// styled to receive custom className on exported component
