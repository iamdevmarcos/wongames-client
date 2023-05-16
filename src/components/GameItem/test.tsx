import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameItem, { GameItemProps, PaymentInfoProps } from '.'

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

  it('should render the item with download link', () => {
    const downloadLink = 'https://google.com/'

    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the payment info', () => {
    const paymentInfo: PaymentInfoProps = {
      flag: 'mastercard',
      img: '/img/master-card.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2023 at 20:32'
    }

    renderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
