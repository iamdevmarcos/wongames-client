import WishlistTemplate, { WishlistProps } from 'templates/Wishlist'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Wishlist(props: WishlistProps) {
  return <WishlistTemplate {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      games: gamesMock,
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock
    }
  }
}
