import {
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic
} from '@expo-google-fonts/open-sans'

import '@src/styles'

import Auth from '@src/routes/AuthRoutes.route'

import { useFonts } from 'expo-font'

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_600SemiBold_Italic
  })

  if (!fontsLoaded) return null

  return <Auth />
}
