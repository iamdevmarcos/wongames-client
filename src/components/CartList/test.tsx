import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import cartListMock from './mock'

import CartList from '.'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    renderWithTheme(<CartList items={cartListMock} total="R$ 300" />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('Total:')).toBeInTheDocument()
    expect(screen.getByText('R$ 300')).toBeInTheDocument()
  })
})
