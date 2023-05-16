import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameItem, { GameItemProps } from '.'

const props: GameItemProps = {
  img: 'https://images.nintendolife.com/e163c4058f4c2/zelda-tears-of-the-kingdom.large.jpg',
  title: 'Zelda Tears of the Kingdom',
  price: 'R$ 215,00'
}

describe('<GameItem />', () => {
  it('should render the item', () => {
    renderWithTheme(<GameItem {...props} />)

    const title = screen.getByRole('heading', {
      name: props.title
    })

    expect(title).toBeInTheDocument()

    const img = screen.getByRole('img', { name: props.title })
    expect(img).toHaveAttribute('src', props.img)

    const price = screen.getByText(props.price)
    expect(price).toBeInTheDocument()
  })
})
