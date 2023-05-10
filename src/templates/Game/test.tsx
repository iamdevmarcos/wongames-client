import { render, screen } from '@testing-library/react'

import Game from '.'

describe('<Game />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Game
        cover={''}
        gameInfo={{
          title: '',
          description: '',
          price: ''
        }}
      />
    )

    expect(screen.getByRole('heading', { name: /Game/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
