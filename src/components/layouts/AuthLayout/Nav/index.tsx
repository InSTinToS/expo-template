import { AuthLayoutContext } from '../context'

import { TouchableOpacity, View } from 'react-native'
import { ViewProps } from 'react-native'

import ArrowIcon from '@src/components/assets/ArrowIcon'

import { styled } from 'nativewind'
import { useContext } from 'react'

interface INavProps extends ViewProps {
  fill: string
}

const Nav = ({ fill, style, ...props }: INavProps) => {
  const { navigation, nav } = useContext(AuthLayoutContext)

  return (
    <View style={[style]} tw='flex w-full px-8 pt-4 ' {...props}>
      <TouchableOpacity
        onPress={() => {
          nav.onArrowClick ? nav.onArrowClick() : navigation.goBack()
        }}
        tw='flex h-6 w-4 -translate-x-2 items-center justify-center  px-4 py-5'
      >
        <ArrowIcon fill={fill} tw='h-6 w-4' />
      </TouchableOpacity>
    </View>
  )
}

export default styled(Nav)
