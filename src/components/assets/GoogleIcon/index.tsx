import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

import { styled } from 'nativewind'


const GoogleIcon = ({ ...props }) => (
  <View {...props}>
    <Svg viewBox='0 0 24 24' fill='none'>
      <Path
        fill='#007ACC'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M23.52 12.273c0-.851-.076-1.67-.218-2.455H12v4.642h6.458a5.52 5.52 0 01-2.394 3.622v3.01h3.878c2.269-2.088 3.578-5.165 3.578-8.82z'
      />

      <Path
        fill='#34A853'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 24c3.24 0 5.956-1.075 7.942-2.908l-3.878-3.01c-1.075.72-2.45 1.145-4.064 1.145-3.125 0-5.77-2.111-6.715-4.948H1.276v3.11A11.995 11.995 0 0012 23.998z'
      />

      <Path
        fill='#FF5C00'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.285 14.28A7.213 7.213 0 014.91 12c0-.79.136-1.56.376-2.28V6.611H1.276A11.995 11.995 0 000 12.001c0 1.936.464 3.769 1.276 5.389l4.01-3.11z'
      />

      <Path
        fill='#FF5C00'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 4.773c1.762 0 3.344.605 4.587 1.794l3.442-3.442C17.951 1.19 15.235 0 12 0 7.31 0 3.25 2.69 1.276 6.61l4.01 3.11C6.228 6.884 8.874 4.773 12 4.773z'
      />
    </Svg>
  </View>
)

export default styled(GoogleIcon)
