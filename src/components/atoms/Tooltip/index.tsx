import Text from '../Text'

import { TouchableOpacity, useWindowDimensions } from 'react-native'

import sizes from '@src/styles/custom/sizes'

import { pxToNumber } from '@src/utils/px'

import {
  Tooltip as RNETooltip,
  TooltipProps as RNETooltipsProps
} from '@rneui/base'
import { styled } from 'nativewind'
import { ReactNode, useState } from 'react'

interface ITooltipProps extends RNETooltipsProps {
  maxWidth?: number
  buttonTw?: string
  popoverTw?: string
  children: ReactNode
  popoverText: string
}

const Tooltip = ({
  children,
  buttonTw,
  popoverTw,
  popoverText,
  maxWidth: maxWidthProp,
  ...props
}: ITooltipProps) => {
  const { width } = useWindowDimensions()
  const [open, setOpen] = useState(false)
  const [popoverStyle, setPopoverStyle] = useState({
    width: 1000,
    height: 1000,
    opacity: 0
  })

  const maxWidth = maxWidthProp || width - pxToNumber(sizes[24])

  const popoverWidth =
    popoverStyle.width < maxWidth ? popoverStyle.width : maxWidth

  const Popover = (
    <Text
      onLayout={({ nativeEvent }) => {
        setPopoverStyle({
          width: nativeEvent.layout.width,
          height: nativeEvent.layout.height,
          opacity: 1
        })
      }}
      tw={`p-2 text-secondary-500 ${popoverTw}`}
    >
      {popoverText}
    </Text>
  )

  return (
    <TouchableOpacity
      onPress={() => {
        setOpen(prev => !prev)
      }}
      tw={buttonTw}
    >
      <RNETooltip
        visible={open}
        popover={Popover}
        width={popoverWidth}
        height={popoverStyle.height}
        containerStyle={{ padding: 0, opacity: popoverStyle.opacity }}
        onOpen={() => {
          setOpen(true)
        }}
        onClose={() => {
          setOpen(false)
          setPopoverStyle({
            height: 1000,
            width: 1000,
            opacity: 0
          })
        }}
        {...props}
      >
        {children}
      </RNETooltip>
    </TouchableOpacity>
  )
}

export default styled(Tooltip)
