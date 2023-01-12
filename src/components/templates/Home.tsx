import { Feather } from '@expo/vector-icons'
import { StatusBar, View } from 'react-native'

import theme from '@src/styles/theme'

import { useColorScheme } from 'nativewind'
import React from 'react'
import { black, white } from 'tailwindcss/colors'

import ToggleTheme from '@src/components/atoms/ToggleTheme'
import MyText from '@src/components/atoms/MyText'

export default function Home() {
  const { colorScheme } = useColorScheme()

  return (
    <>
      <StatusBar
        backgroundColor={colorScheme === 'light' ? white : black}
        barStyle={colorScheme !== 'light' ? 'light-content' : 'dark-content'}
      />

      <View className='flex-1 h-full flex-col items-center justify-center light:bg-white dark:bg-black'>
        <Feather
          size={32}
          name='book-open'
          color={colorScheme === 'light' ? black : white}
        />
        <MyText className='text-2xl mb-8 light:text-black dark:text-white'>
          Expo-template
        </MyText>
        <MyText>Expo: ✅</MyText>
        <MyText>Eslint: ✅</MyText>
        <MyText>Prettier: ✅</MyText>
        <MyText>Typescript: ✅</MyText>
        <MyText>NativeWind: ✅</MyText>
        <MyText>Path aliases: ✅</MyText>
        <MyText>React-native: ✅</MyText>
        <MyText>PWA (Expo Web): ✅</MyText>
        <MyText className='text-primary-500'>
          Custom theme {theme.primary[500]}: ✅
        </MyText>
        <ToggleTheme className='mt-8' />
      </View>
    </>
  )
}
