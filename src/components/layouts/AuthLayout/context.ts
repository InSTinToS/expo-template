import { IAuthLayoutProps } from '.'

import { createContext } from 'react'

interface IAuthLayoutContext {
  nav?: IAuthLayoutProps['nav']
  navigation: IAuthLayoutProps['navigation']
}

export const AuthLayoutContext = createContext<IAuthLayoutContext>({
  navigation: undefined
})
