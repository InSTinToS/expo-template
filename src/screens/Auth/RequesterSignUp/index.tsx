import colors from '@src/styles/custom/colors'

import RelativeScrollView from '@src/components/atoms/RelativeScrollView'
import Text from '@src/components/atoms/Text'
import AuthLayout from '@src/components/layouts/AuthLayout'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'

import { TAuthStackScreen } from '@src/routes/AuthRoutes.route'

import {
  emailValidation,
  fullNameValidation,
  passwordValidation
} from '@src/shared/validations'

import useAuthZoom from '@src/hooks/useAuthZoom'

import { useForm } from 'react-hook-form'

interface IRequesterSignUpRequest {
  email: string
  password: string
  full_name: string
}

const RequesterSignUp = ({
  navigation
}: TAuthStackScreen<'RequesterSignUp'>) => {
  const { control, handleSubmit } = useForm<IRequesterSignUpRequest>({
    mode: 'onBlur',
    defaultValues: { email: '', password: '', full_name: '' }
  })
  const { hideHeader, nav, showInfo, removePadding } = useAuthZoom({
    arrowColor: colors.requester[500]
  })

  const onSubmit = data => console.log(data)

  return (
    <AuthLayout
      nav={nav}
      tw={removePadding}
      navigation={navigation}
      hideHeader={hideHeader}
    >
      {showInfo && (
        <>
          <Text
            size='xl'
            tw='w-full max-w-screen-s100 text-requester-500 md:text-center'
          >
            Solicitante
          </Text>

          <Text tw='mb-6 w-full max-w-screen-s100 md:text-center'>
            Encontre voluntários para resolver problemas!
          </Text>
        </>
      )}

      <RelativeScrollView
        contentContainerStyle={{ height: hideHeader ? '100%' : 'auto' }}
        tw='w-full'
      >
        <Field
          name='name'
          theme='requester'
          control={control}
          placeholder='Nome completo'
          rules={fullNameValidation}
          tw='mb-4'
        />

        <Field
          name='email'
          theme='requester'
          control={control}
          placeholder='E-mail'
          rules={emailValidation}
          tw='mb-4'
        />

        <Field
          name='password'
          theme='requester'
          control={control}
          placeholder='Senha'
          secureTextEntry={true}
          rules={passwordValidation}
          tw='mb-6'
        />

        <Button
          theme='requester'
          onPress={() => {
            handleSubmit(onSubmit)()
            navigation.navigate('SignIn')
          }}
        >
          Concluir cadastro
        </Button>
      </RelativeScrollView>
    </AuthLayout>
  )
}

export default RequesterSignUp
