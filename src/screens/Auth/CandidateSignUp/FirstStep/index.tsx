import RelativeScrollView from '@src/components/atoms/RelativeScrollView'
import Text from '@src/components/atoms/Text'
import Button from '@src/components/molecules/Button'
import Field from '@src/components/molecules/Field'
import Steps from '@src/components/molecules/Steps'

import {
  emailValidation,
  fullNameValidation,
  passwordValidation
} from '@src/shared/validations'

import { ControllerProps } from 'react-hook-form'

interface IFirstStepProps {
  showInfo: boolean
  hideHeader: boolean
  onSubmit: () => void
  control: ControllerProps<any>['control']
}

const FirstStep = ({
  control,
  onSubmit,
  showInfo,
  hideHeader
}: IFirstStepProps) => (
  <>
    {showInfo && (
      <>
        <Steps steps={[{ active: true }, { active: false }]} tw='' />

        <Text
          size='xl'
          tw='w-full max-w-screen-s100 text-candidate-500 md:text-center'
        >
          Candidato
        </Text>

        <Text tw='mb-6 w-full max-w-screen-s100 md:text-center'>
          Encontre projetos para construir seu portfólio!
        </Text>
      </>
    )}

    <RelativeScrollView
      contentContainerStyle={{ height: hideHeader ? '100%' : 'auto' }}
      tw='w-full'
    >
      <Field
        name='full_name'
        control={control}
        theme='candidate'
        placeholder='Nome completo'
        rules={fullNameValidation}
        tw='mb-4'
      />

      <Field
        name='email'
        control={control}
        theme='candidate'
        placeholder='E-mail'
        rules={emailValidation}
        tw='mb-4'
      />

      <Field
        name='password'
        control={control}
        theme='candidate'
        placeholder='Senha'
        secureTextEntry={true}
        rules={passwordValidation}
        tw='mb-6'
      />

      <Button theme='candidate' onPress={onSubmit}>
        Próximo passo
      </Button>
    </RelativeScrollView>
  </>
)

export default FirstStep
