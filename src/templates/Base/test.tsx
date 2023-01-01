import { screen } from '@testing-library/react'

import Base from '.'
import { renderWithTheme } from 'utils/tests/helpers'

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mockMenu"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mockFooter"></div>
    }
  }
})

describe('<Base />', () => {
  it('should render menu, footer and children', () => {
    renderWithTheme(
      <Base>
        <h1>Heading</h1>
      </Base>
    )

    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('mockMenu')).toBeInTheDocument()
    expect(screen.getByTestId('mockFooter')).toBeInTheDocument()
  })
})
