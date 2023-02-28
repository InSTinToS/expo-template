import { Pressable, PressableProps } from 'react-native'

import border from '@src/styles/custom/border'
import colors from '@src/styles/custom/colors'
import { TColors } from '@src/styles/types'

import Text from '@src/components/atoms/Text'

import { pxToNumber } from '@src/utils/px'

import { styled } from 'nativewind'

interface IButtonProps extends PressableProps {
  style?: any
  theme?: TColors
  children: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  style,
  children,
  theme = 'primary',
  variant = 'primary',
  ...props
}: IButtonProps) => {
  const buttonStyles = {
    backgroundColor:
      variant === 'primary' ? colors[theme][500] : colors.secondary[500],
    borderWidth: variant === 'primary' ? 0 : pxToNumber(border[2]),
    borderColor: variant === 'primary' ? 'transparent' : colors[theme][500]
  }

  const textColors =
    variant === 'primary' ? 'text-secondary-500' : `text-${theme}-500`

  return (
    <Pressable
      tw='align-center flex h-14 w-full max-w-screen-s100 justify-center rounded-full border'
      style={[buttonStyles, style]}
      {...props}
    >
      <Text
        size='lg'
        tw={`
          text-center font-title 
          ${textColors}
        `}
      >
        {children}
      </Text>
    </Pressable>
  )
}

export default styled(Button)
