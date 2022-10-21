import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    // get input by role
    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    // get input by associate label
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()

    // get label by text
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })
})
