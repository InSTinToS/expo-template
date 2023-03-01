import { View } from 'react-native'

import colors from '@src/styles/custom/colors'
import sizes from '@src/styles/custom/sizes'

import UserIcon from '@src/components/assets/UserIcon'
import Text from '@src/components/atoms/Text'
import AuthLayout from '@src/components/layouts/AuthLayout'
import SquareButton from '@src/components/molecules/SquareButton'

import { TAuthStackScreen } from '@src/routes/AuthRoutes.route'

import useResponsiveScale from '@src/hooks/useResponsiveScale'

const User = <UserIcon fill={colors.secondary[500]} tw='h-8 w-8' />

const SignUp = ({ navigation }: TAuthStackScreen<'SignUp'>) => {
  const { responsiveScale } = useResponsiveScale()

  return (
    <AuthLayout nav={{ arrow: true }} navigation={navigation}>
      <View tw='w-full '>
        <Text size='xl' tw='text-center font-title text-primary-500'>
          Você precisa de ajuda ou quer ajudar alguém?
        </Text>

        <Text
          size='lg'
          tw='text-candidate-500 md:text-center'
          style={{
            marginTop: responsiveScale({ size: sizes[8], type: 'vertical' })
          }}
        >
          Candidato
        </Text>

        <Text tw='md:text-center'>
          Criar seu próprio portfólio resolvendo problemas reais!
        </Text>

        <Text
          size='lg'
          tw='text-requester-500 md:text-center'
          style={{
            marginTop: responsiveScale({ size: sizes[6], type: 'vertical' })
          }}
        >
          Solicitante
        </Text>

        <Text
          tw='md:text-center'
          style={{
            marginBottom: responsiveScale({ size: sizes[8], type: 'vertical' })
          }}
        >
          Encontre voluntários para resolver problemas!
        </Text>
      </View>

      <View tw='flex w-full max-w-screen-s100 flex-row justify-between md:justify-evenly'>
        <SquareButton
          icon={User}
          theme='candidate'
          label='Candidato'
          onPress={() => navigation.push('CandidateSignUp')}
        />

        <SquareButton
          icon={User}
          theme='requester'
          label='Solicitante'
          onPress={() => navigation.push('RequesterSignUp')}
        />
      </View>
    </AuthLayout>
  )
}

export default SignUp
