import { View } from 'react-native'
import DropDownPicker, {
  DropDownPickerProps
} from 'react-native-dropdown-picker'

import colors from '@src/styles/custom/colors'
import radius from '@src/styles/custom/radius'
import sizes from '@src/styles/custom/sizes'
import { TColors } from '@src/styles/types'

import ArrowIcon from '@src/components/assets/ArrowIcon'
import CheckIcon from '@src/components/assets/CheckIcon'

import useResponsiveFontSize from '@src/hooks/useResponsiveFontSize'

import { pxToNumber } from '@src/utils/px'

import { styled } from 'nativewind'
import { useCallback, useState } from 'react'

interface IDropdownProps {
  setValue: any
  value: string
  theme?: TColors
  items: DropDownPickerProps<any>['items']
  onPress?: DropDownPickerProps<any>['onPress']
  placeholder: DropDownPickerProps<any>['placeholder']
  direction?: DropDownPickerProps<any>['dropDownDirection']
}

const Check = () => <CheckIcon fill={colors.secondary[500]} tw='h-4 w-4' />

const Dropdown = ({
  value,
  onPress,
  setValue,
  direction,
  placeholder,
  theme = 'primary',
  items: initialItems,
  ...props
}: IDropdownProps) => {
  const [open, setOpen] = useState(false)
  const responsiveFontSize = useResponsiveFontSize('base')
  const [items, setItems] = useState<IDropdownProps['items']>(initialItems)

  const ArrowDown = useCallback(
    () => (
      <ArrowIcon
        fill={value !== null ? colors[theme][500] : colors.tertiary[400]}
        tw='h-4 w-4 -rotate-90'
      />
    ),
    [value, theme]
  )

  const ArrowUp = useCallback(
    () => (
      <ArrowIcon
        fill={value !== null ? colors[theme][500] : colors.tertiary[400]}
        tw='h-4 w-4 rotate-90'
      />
    ),
    [value, theme]
  )

  return (
    <View tw='w-full max-w-screen-s100' {...props}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        onPress={onPress}
        setValue={setValue}
        setItems={setItems}
        placeholder={placeholder}
        TickIconComponent={Check}
        ArrowUpIconComponent={ArrowUp}
        ArrowDownIconComponent={ArrowDown}
        dropDownDirection={direction || 'TOP'}
        listItemContainerStyle={{ padding: 0, margin: 0 }}
        labelStyle={{ color: colors[theme][500], ...responsiveFontSize }}
        textStyle={{ color: colors.tertiary[1000], ...responsiveFontSize }}
        placeholderStyle={{
          color: colors.tertiary[400],
          ...responsiveFontSize
        }}
        listItemLabelStyle={{
          color: colors[theme][700],
          ...responsiveFontSize
        }}
        selectedItemLabelStyle={{
          color: colors.secondary[500],
          ...responsiveFontSize
        }}
        dropDownContainerStyle={{
          borderColor: colors[theme][600]
        }}
        modalAnimationType='slide'
        selectedItemContainerStyle={{
          backgroundColor: colors[theme][500]
        }}
        style={{
          zIndex: 10,
          position: 'relative',
          height: pxToNumber(sizes[15]) - 2,
          borderRadius: pxToNumber(radius.xl),
          paddingLeft: pxToNumber(sizes['4']),
          borderColor:
            value !== null ? colors[theme][500] : colors.tertiary[400]
        }}
      />
    </View>
  )
}

export default styled(Dropdown)
