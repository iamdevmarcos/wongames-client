import { screen } from '@testing-library/react'

import GameInfo from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const props = {
  title: 'My Game Title',
  description: 'My Game Description',
  price: '210,00'
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    renderWithTheme(<GameInfo {...props} />)

    const heading = screen.getByRole('heading', { name: /my game title/i })
    expect(heading).toBeInTheDocument()

    const description = screen.getByText(/my game description/i)
    expect(description).toBeInTheDocument()

    const price = screen.getByText('$210,00')
    expect(price).toBeInTheDocument()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
