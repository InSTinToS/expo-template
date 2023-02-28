import { Dimensions, StatusBar } from 'react-native'

import screens from '@src/styles/custom/screens'

export const phoneHeight = () =>
  Dimensions.get('window').height + StatusBar.currentHeight

export const isMd = () =>
  Dimensions.get('window').width > Number(screens.md.split('p')[0])
