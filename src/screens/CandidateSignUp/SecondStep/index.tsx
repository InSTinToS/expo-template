import { View } from 'react-native'

import Text from '@src/components/atoms/Text'
import Button from '@src/components/molecules/Button'
import Dropdown from '@src/components/molecules/Dropdown'
import Field from '@src/components/molecules/Field'
import Steps from '@src/components/molecules/Steps'

import { useState } from 'react'
import { ControllerProps } from 'react-hook-form'

interface ISecondStepProps {
  setStep: any
  showInfo: boolean
  onSubmit: () => void
  control: ControllerProps<any>['control']
}

const SecondStep = ({
  setStep,
  control,
  showInfo,
  onSubmit
}: ISecondStepProps) => {
  const [experience, setExperience] = useState(null)
  const [occupation, setOccupation] = useState(null)

  const smallBioValidation = {
    maxLength: { value: 20, message: 'Limite de 20 caracteres excedido!' }
  }

  return (
    <>
      {showInfo && (
        <>
          <Steps
            steps={[
              { active: true, onPress: () => setStep(prev => prev - 1) },
              { active: true }
            ]}
          />

          <Text
            size='xl'
            tw='w-full max-w-screen-s100 text-candidate-500  md:text-center'
          >
            Quase lá
          </Text>

          <Text tw='mb-6 w-full max-w-screen-s100 md:text-center'>
            Não se preocupe algumas informações poderão ser alteradas
            posteriormente
          </Text>
        </>
      )}

      <View tw='flex w-full items-center justify-center'>
        <Field
          name='small_bio'
          control={control}
          theme='candidate'
          rules={smallBioValidation}
          placeholder='Pequena descrição'
          tw='mb-4'
        />

        <Dropdown
          theme='candidate'
          value={occupation}
          setValue={setOccupation}
          placeholder='Área de atuação'
          items={[
            { label: 'Desenvolvedor Back-end', value: 'backend' },
            { label: 'Desenvolvedor Front-end', value: 'frontend' },
            { label: 'Desenvolvedor Full-stack', value: 'fullstack' }
          ]}
          tw='mb-4'
        />

        <Dropdown
          theme='candidate'
          value={experience}
          setValue={setExperience}
          placeholder='Nível de experiência'
          items={[
            { label: 'Iniciante', value: 'beginner' },
            { label: 'Intermediário', value: 'intermediary' },
            { label: 'Avançado', value: 'advanced' }
          ]}
          tw='mb-6'
        />

        <Button theme='candidate' onPress={onSubmit}>
          Concluir cadastro
        </Button>
      </View>
    </>
  )
}

export default SecondStep
