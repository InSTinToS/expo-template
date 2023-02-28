import Nav from '../Nav'
import { AuthLayoutContext } from '../context'

import { View } from 'react-native'

import colors from '@src/styles/custom/colors'
import sizes from '@src/styles/custom/sizes'

import Logo from '@src/components/assets/Logo'
import Text from '@src/components/atoms/Text'

import useResponsiveScale from '@src/hooks/useResponsiveScale'

import { isMd } from '@src/utils/dimensions'

import { IAuthLayoutProps } from '..'
import { useContext } from 'react'

interface IHeaderProps {
  isPortrait: boolean
  headerTitle?: IAuthLayoutProps['headerTitle']
}

const Header = ({ headerTitle, isPortrait }: IHeaderProps) => {
  const { nav } = useContext(AuthLayoutContext)
  const { responsiveScale } = useResponsiveScale()
  const showNav = nav && (!isMd() || isPortrait)

  return (
    <View tw='flex w-full flex-1'>
      {showNav && <Nav fill={colors.secondary[500]} />}

      <View tw='flex w-full flex-1 items-center justify-center px-8'>
        <Logo
          style={{
            width: responsiveScale({ size: sizes[52], limits: { max: 1.2 } }),
            height: responsiveScale({ size: sizes[18], limits: { max: 1.2 } })
          }}
        />

        {headerTitle && (
          <Text
            size='xl'
            tw='mt-8 w-full text-center font-title text-secondary-500'
          >
            {headerTitle}
          </Text>
        )}
      </View>
    </View>
  )
}

export default Header
