import { Switch, View } from 'react-native'

import { styled } from 'nativewind'
import { useColorScheme } from 'nativewind'
import colors from 'tailwindcss/colors'

const ToggleTheme = ({ ...props }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme()

  return (
    <View {...props}>
      <Switch
        thumbColor={colors.blue[400]}
        value={colorScheme === 'light'}
        onValueChange={toggleColorScheme}
        trackColor={{ true: colors.black, false: colors.white }}
      />
    </View>
  )
}

export default styled(ToggleTheme)
