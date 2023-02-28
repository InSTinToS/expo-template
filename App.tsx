import '@src/styles'

import CandidateSignUp from '@src/screens/CandidateSignUp'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { QueryClient, QueryClientProvider } from 'react-query'

const { Navigator, Screen } = createNativeStackNavigator()

export type TRootStackParamList = {
  SignIn: undefined
  SignUp: undefined
  AuthSelect: undefined
  RequesterSignUp: undefined
  CandidateSignUp: undefined
  CandidateSecondStep: undefined
}

export type TRootStackScreen<T extends keyof TRootStackParamList> =
  NativeStackScreenProps<TRootStackParamList, T>

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Navigator
          initialRouteName='CandidateSignUp'
          screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}
        >
          <Screen name='CandidateSignUp' component={CandidateSignUp} />
        </Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  )
}
