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

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        title="About me"
        subtitle="More information"
        img="https://avatars.githubusercontent.com/u/92524722?v=4"
        buttonLabel="Visit my Github"
        buttonLink="https://github.com/iamdevmarcos"
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3cd3c1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  })
})
