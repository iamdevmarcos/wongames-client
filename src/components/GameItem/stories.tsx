import { Story, Meta } from '@storybook/react'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'Game/GameItem',
  component: GameItem,
  args: {
    img: 'https://images.nintendolife.com/e163c4058f4c2/zelda-tears-of-the-kingdom.large.jpg',
    title: 'Zelda Tears of the Kingdom',
    price: 'R$ 215,00'
  }
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

export const WithPayment: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)

WithPayment.args = {
  downloadLink: 'https://google.com/',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/master-card.png',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2023 at 20:32'
  }
}
