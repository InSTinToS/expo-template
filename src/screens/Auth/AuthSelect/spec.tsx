/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthSelect from './index'

import { fireEvent, render, screen } from '@testing-library/react-native'

const navigation = {
  navigate: jest.fn()
}

const Component = (
  <AuthSelect navigation={navigation as any} route={{} as any} />
)

describe('AuthSelect', () => {
  it('should be able to navigate to SignIn', () => {
    render(Component)

    fireEvent.press(screen.getByTestId('signIn-button'))

    expect(navigation.navigate).toBeCalledWith('SignIn')
  })

  it('should be able to navigate to SignUp', () => {
    render(Component)

    fireEvent.press(screen.getByTestId('signUp-button'))

    expect(navigation.navigate).toBeCalledWith('SignUp')
  })
})
