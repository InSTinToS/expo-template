import Text from './index'

import { render, screen } from '@testing-library/react-native'

describe('Text', () => {
  it('should render Text children content', async () => {
    render(<Text>Test</Text>)

    screen.getByText('Test')
  })
})
