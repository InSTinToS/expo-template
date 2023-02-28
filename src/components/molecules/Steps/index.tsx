import { TouchableOpacity, View } from 'react-native'

import { styled } from 'nativewind'

interface IStepsProps {
  steps: { active?: boolean; onPress?: () => void }[]
}

const Steps = ({ steps, ...props }: IStepsProps) => (
  <View tw='mb-6 flex flex-row' {...props}>
    {steps.map(({ active, onPress }, index) =>
      active ? (
        <TouchableOpacity
          key={index}
          onPress={onPress}
          tw='mr-4 h-4 w-4 rounded-full bg-candidate-500'
        />
      ) : (
        <TouchableOpacity
          key={index}
          onPress={onPress}
          tw='h-4 w-4 rounded-full border-2 border-candidate-500'
        />
      )
    )}
  </View>
)

export default styled(Steps)
