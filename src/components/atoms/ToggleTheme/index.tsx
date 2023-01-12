import { Switch, View } from 'react-native'

import { styled } from 'nativewind'
import { useColorScheme } from 'nativewind'
import colors from 'tailwindcss/colors'
import theme from '@src/styles/theme'

const ToggleTheme = ({ ...props }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme()

  return (
    <View {...props}>
      <Switch
        thumbColor={theme.primary[500]}
        value={colorScheme === 'light'}
        onValueChange={toggleColorScheme}
        trackColor={{ true: colors.black, false: colors.white }}
      />
    </View>
  )
}

export default styled(ToggleTheme)
