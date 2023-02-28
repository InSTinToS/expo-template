import { Keyboard } from 'react-native'

import { IAuthLayoutProps } from '@src/components/layouts/AuthLayout'

import useKeyboardStatus from '@src/hooks/useKeyboardStatus'

interface IUseAuthZoomParams {
  arrowColor?: string
  onBackButtonClick?: any
}

const useAuthZoom = ({ onBackButtonClick, arrowColor }: IUseAuthZoomParams) => {
  const { isKeyboardVisible } = useKeyboardStatus()

  const showInfo = !isKeyboardVisible
  const hideHeader = isKeyboardVisible
  const removePadding = isKeyboardVisible ? 'pb-0' : undefined

  const onArrowClick = isKeyboardVisible ? Keyboard.dismiss : onBackButtonClick

  const nav: IAuthLayoutProps['nav'] = {
    arrow: true,
    onArrowClick,
    color: arrowColor
  }

  return { nav, hideHeader, showInfo, removePadding }
}

export default useAuthZoom
