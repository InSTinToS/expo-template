import AuthLayout from '@src/components/layouts/AuthLayout'
import Button from '@src/components/molecules/Button'
import GoogleButton from '@src/components/molecules/GoogleButton'

import { TAuthStackScreen } from '@src/routes/AuthRoutes.route'

const AuthSelect = ({ navigation }: TAuthStackScreen<'AuthSelect'>) => (
  <AuthLayout
    navigation={navigation}
    headerTitle='O melhor lugar para construir portfólios ou buscar por voluntários'
  >
    <Button
      variant='secondary'
      testID='signIn-button'
      onPress={() => {
        navigation.navigate('SignIn')
      }}
    >
      Entrar
    </Button>

    <Button
      testID='signUp-button'
      onPress={() => {
        navigation.navigate('SignUp')
      }}
      tw='mt-6'
    >
      Cadastrar
    </Button>

    <GoogleButton tw='mt-6' />
  </AuthLayout>
)

export default AuthSelect
