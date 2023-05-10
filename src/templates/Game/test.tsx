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
        description={''}
        details={{
          developer: '',
          platforms: [],
          releaseDate: '',
          rating: 'BR0',
          genres: []
        }}
        upcomingGames={[]}
        upcomingHighlight={{
          title: '',
          subtitle: '',
          backgroundImage: '',
          buttonLabel: '',
          buttonLink: '',
          floatImage: undefined,
          alignment: undefined
        }}
        recommendedGames={[]}
      />
    )

    expect(screen.getByRole('heading', { name: /Game/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
