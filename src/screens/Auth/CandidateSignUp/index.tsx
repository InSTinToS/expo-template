import FirstStep from './FirstStep'
import SecondStep from './SecondStep'

import { Keyboard } from 'react-native'

import colors from '@src/styles/custom/colors'

import AuthLayout from '@src/components/layouts/AuthLayout'

import { TAuthStackScreen } from '@src/routes/AuthRoutes.route'

import useAuthZoom from '@src/hooks/useAuthZoom'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface ICandidateSignUpRequest {
  email: string
  password: string
  small_bio: string
  full_name: string
  occupation: string
  experience: string
}

const CandidateSignUp = ({
  navigation
}: TAuthStackScreen<'CandidateSignUp'>) => {
  const [step, setStep] = useState(1)
  const { hideHeader, nav, showInfo, removePadding } = useAuthZoom({
    arrowColor: colors.candidate[500]
  })
  const { control, handleSubmit } = useForm<ICandidateSignUpRequest>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      small_bio: '',
      full_name: '',
      occupation: '',
      experience: ''
    }
  })

  const steps = {
    1: (
      <FirstStep
        control={control}
        showInfo={showInfo}
        hideHeader={hideHeader}
        onSubmit={() => {
          setStep(prev => prev + 1)
        }}
      />
    ),
    2: (
      <SecondStep
        setStep={setStep}
        control={control}
        showInfo={showInfo}
        onSubmit={() => {
          handleSubmit(onSubmit)()
          navigation.navigate('SignIn')
        }}
      />
    )
  }

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <AuthLayout
      navigation={navigation}
      hideHeader={hideHeader}
      nav={{
        arrow: nav.arrow,
        color: nav.color,
        onArrowClick: () => {
          if (step === 1) navigation.goBack()
          else hideHeader ? Keyboard.dismiss() : setStep(prev => prev - 1)
        }
      }}
      tw={`pt-0 ${removePadding}`}
    >
      {steps[step]}
    </AuthLayout>
  )
}

export default CandidateSignUp
