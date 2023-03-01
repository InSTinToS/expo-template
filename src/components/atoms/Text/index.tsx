import { Text as RNText, TextProps as RNTextProps } from 'react-native'

import fontSize from '@src/styles/custom/fontSize'

import useResponsiveFontSize from '@src/hooks/useResponsiveFontSize'

interface ITextProps extends RNTextProps {
  size?: keyof typeof fontSize
}

const Text = ({ style, children, size = 'base', ...props }: ITextProps) => {
  const responsiveFontSize = useResponsiveFontSize(size)

  return (
    <RNText tw='font-body' style={[style, responsiveFontSize]} {...props}>
      {children}
    </RNText>
  )
}

export default Text
