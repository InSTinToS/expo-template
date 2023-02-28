import Nav from '../Nav'
import { AuthLayoutContext } from '../context'

import { KeyboardAvoidingView, View } from 'react-native'

import colors from '@src/styles/custom/colors'

import RoundedTop from '@src/components/assets/RoundedTop'

import { isMd } from '@src/utils/dimensions'

import { IAuthLayoutProps } from '..'
import { styled } from 'nativewind'
import { useContext } from 'react'
import { ReactNode } from 'react'

interface IFooterProps {
  children: ReactNode
  isPortrait: boolean
  hideHeader: IAuthLayoutProps['hideHeader']
  keyboardBehavior: IAuthLayoutProps['keyboardBehavior']
}

const Footer = ({
  children,
  hideHeader,
  keyboardBehavior,
  isPortrait,
  ...props
}: IFooterProps) => {
  const { nav } = useContext(AuthLayoutContext)
  const showNav = (nav ? isMd() && !isPortrait : false) || hideHeader

  return (
    <>
      {!hideHeader && (
        <RoundedTop
          fill={colors.secondary[500]}
          tw={`w-full ${!isPortrait && 'md:hidden'}`}
        />
      )}

      <View
        tw={`  
          relative z-20 w-full overflow-hidden bg-secondary-500 p-8
          ${!isPortrait && 'md:h-full md:w-1/2'}
          ${showNav && 'pt-0'}
          ${hideHeader && 'h-full'}
        `}
        {...props}
      >
        {showNav && <Nav fill={nav?.color || colors.primary[500]} tw='px-0' />}

        <KeyboardAvoidingView
          behavior={keyboardBehavior}
          enabled={!!keyboardBehavior}
          tw={`
            flex w-full items-center justify-center
            md:flex-1
            ${hideHeader && 'flex-1'}
          `}
        >
          {children}
        </KeyboardAvoidingView>
      </View>
    </>
  )
}

export default styled(Footer)
