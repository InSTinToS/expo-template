import { BackHandler, TouchableOpacity, View } from 'react-native'

import colors from '@src/styles/custom/colors'

import RelativeScrollView from '@src/components/atoms/RelativeScrollView'
import Text from '@src/components/atoms/Text'
import AuthLayout from '@src/components/layouts/AuthLayout'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'

import { TAuthStackScreen } from '@src/routes/AuthRoutes.route'

import { emailValidation } from '@src/shared/validations'

import useAuthZoom from '@src/hooks/useAuthZoom'
import useKeyboardStatus from '@src/hooks/useKeyboardStatus'

import { useFocusEffect } from '@react-navigation/native'
import Checkbox from 'expo-checkbox'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

interface ISignInRequest {
  email: string
  password: string
  remember: boolean
}

type TSignInForm = Omit<ISignInRequest, 'remember'>

const SignIn = ({ navigation }: TAuthStackScreen<'SignIn'>) => {
  const [remember, setRemember] = useState(false)
  const { isKeyboardVisible } = useKeyboardStatus()
  const { control, handleSubmit } = useForm<TSignInForm>({
    mode: 'onBlur',
    defaultValues: { email: '', password: '' }
  })
  const { nav, removePadding } = useAuthZoom({
    onBackButtonClick: () => {
      navigation.navigate('AuthSelect')
    }
  })

  const passwordValidation = {
    required: { value: true, message: 'Necessário informar a Senha!' },
    maxLength: {
      value: 255,
      message: 'Limite máximo de 255 caracteres excedido!'
    }
  }
  const headerTitle = isKeyboardVisible
    ? ''
    : 'Construa seu portfólio ajudando pessoas'

  const onSubmit = (data: ISignInRequest) => {
    console.log({ ...data, remember })
  }

  useFocusEffect(
    useCallback(() => {
      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          navigation.push('AuthSelect')
          return true
        }
      )

      return () => subscription.remove()
    }, [navigation])
  )

  return (
    <AuthLayout
      nav={nav}
      navigation={navigation}
      headerTitle={headerTitle}
      tw={removePadding}
    >
      <RelativeScrollView tw='w-full'>
        <Field
          tw='mb-4'
          name='email'
          control={control}
          placeholder='E-mail'
          rules={emailValidation}
        />

        <Field
          name='password'
          control={control}
          placeholder='Senha'
          secureTextEntry={true}
          rules={passwordValidation}
          tw='mb-4'
        />

        <View tw='mb-4 flex flex-row items-center justify-center'>
          <Checkbox
            value={remember}
            onValueChange={setRemember}
            color={colors.primary[500]}
            tw='mr-4'
          />

          <TouchableOpacity onPress={() => setRemember(prev => !prev)}>
            <Text size='sm'>Lembrar senha</Text>
          </TouchableOpacity>
        </View>

        <Button onPress={handleSubmit(onSubmit)} tw='mb-4'>
          Entrar
        </Button>

        <TouchableOpacity tw='flex  flex-row justify-center'>
          <Text size='sm'>Esqueci minha senha</Text>
        </TouchableOpacity>
      </RelativeScrollView>
    </AuthLayout>
  )
}

export default SignIn
