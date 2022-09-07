import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://pbs.twimg.com/media/EZwJcvrXsAkaX6t?format=jpg&name=large',
  price: 'R$ 235'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /rockstar games/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /population zero/i })
    ).toBeInTheDocument()

    expect(screen.getByText('R$ 235')).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    const priceElement = screen.queryByText('R$ 235')

    expect(priceElement).not.toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(priceElement).toHaveStyle({
      'background-color': '#3CD3C1'
    })
  })

  fit('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 150" />)

    const priceElement = screen.queryByText('R$ 235')
    const promotionalPriceEl = screen.queryByText('R$ 150')

    expect(priceElement).toBeInTheDocument()
    expect(promotionalPriceEl).toBeInTheDocument()

    expect(priceElement).toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(promotionalPriceEl).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
  })
})
