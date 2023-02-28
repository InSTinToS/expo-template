import FirstStep from './FirstStep'
import SecondStep from './SecondStep'

import { Keyboard } from 'react-native'

import colors from '@src/styles/custom/colors'

import AuthLayout from '@src/components/layouts/AuthLayout'

import usePosts from '@src/hooks/api/usePosts'
import useAuthZoom from '@src/hooks/useAuthZoom'

import { TRootStackScreen } from 'App'
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
}: TRootStackScreen<'CandidateSignUp'>) => {
  const { data, isSuccess } = usePosts()
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

  console.log('React Query data:', isSuccess ? data[0] : '')

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
        }}
      />
    )
  }

  const onSubmit = (data: any) => {
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
