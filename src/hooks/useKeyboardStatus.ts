import { Keyboard } from 'react-native'

import { useEffect, useState } from 'react'

const useKeyboardStatus = () => {
  const [keyboardStatus, setKeyboardStatus] = useState({ isVisible: false })

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus({ isVisible: true })
    })
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus({ isVisible: false })
    })

    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])

  return { isKeyboardVisible: keyboardStatus.isVisible }
}

export default useKeyboardStatus
