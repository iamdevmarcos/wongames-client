import CartTemplate, { type CartTemplateProps } from 'templates/Cart'

import itemsMock from 'components/CartList/mock'
import gamesMock from 'components/GameCardSlider/mock'
import higlightMock from 'components/Highlight/mock'
import cardsMock from 'components/PaymentOptions/mock'

export default function Cart(props: CartTemplateProps) {
  return <CartTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      recommendedGames: gamesMock,
      recommendedHighlight: higlightMock,
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock
    }
  }
}
