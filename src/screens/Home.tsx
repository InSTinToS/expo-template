import { Feather } from '@expo/vector-icons'
import { StatusBar, View } from 'react-native'

import theme from '@src/styles/theme'

import MyText from '@src/components/MyText'
import ToggleTheme from '@src/components/ToggleTheme'

import { useColorScheme } from 'nativewind'
import React from 'react'
import { black, white } from 'tailwindcss/colors'

export default function Home() {
  const { colorScheme } = useColorScheme()

  return (
    <>
      <StatusBar
        barStyle={colorScheme !== 'light' ? 'light-content' : 'dark-content'}
        backgroundColor={colorScheme === 'light' ? white : black}
      />

      <View className='flex-1 flex-col items-center justify-center light:bg-white dark:bg-black'>
        <Feather
          name='book-open'
          size={32}
          color={colorScheme === 'light' ? black : white}
        />

        <MyText content='Expo-template' className='text-2xl mb-8' />

        <MyText content='Expo' />
        <MyText content='React-native' />
        <MyText content='Typescript' />
        <MyText content='NativeWind' />
        <MyText content='Eslint' />
        <MyText content='Prettier' />
        <MyText content='Path aliases' />
        <MyText
          className='text-primary-500'
          content={`Custom theme ${theme.primary[500]}`}
        />

        <ToggleTheme className='mt-8' />
      </View>
    </>
  )
}
