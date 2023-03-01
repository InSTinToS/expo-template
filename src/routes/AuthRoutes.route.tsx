import AuthSelect from '@src/screens/Auth/AuthSelect'
import CandidateSignUp from '@src/screens/Auth/CandidateSignUp'
import RequesterSignUp from '@src/screens/Auth/RequesterSignUp'
import SignIn from '@src/screens/Auth/SignIn'
import SignUp from '@src/screens/Auth/SignUp'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

export type TAuthStackParamList = {
  SignIn: object
  SignUp: object
  AuthSelect: object
  RequesterSignUp: object
  CandidateSignUp: object
  CandidateSecondStep: object
}

export type TAuthStackScreen<T extends keyof TAuthStackParamList> =
  NativeStackScreenProps<TAuthStackParamList, T>

const Auth = () => (
  <NavigationContainer>
    <Navigator
      initialRouteName='AuthSelect'
      screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}
    >
      <Screen name='AuthSelect' component={AuthSelect} />
      <Screen name='SignIn' component={SignIn} />
      <Screen name='SignUp' component={SignUp} />
      <Screen name='RequesterSignUp' component={RequesterSignUp} />
      <Screen name='CandidateSignUp' component={CandidateSignUp} />
    </Navigator>
  </NavigationContainer>
)

export default Auth
