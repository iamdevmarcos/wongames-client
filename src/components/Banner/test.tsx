import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { debug, container } = renderWithTheme(
      <Banner
        title="About me"
        subtitle="More information"
        img="https://avatars.githubusercontent.com/u/92524722?v=4"
        buttonLabel="Visit my Github"
        buttonLink="https://github.com/iamdevmarcos"
      />
    )

    debug(container)

    expect(
      screen.getByRole('heading', { name: /about me/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /more information/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /about me/i }))
  })
})
