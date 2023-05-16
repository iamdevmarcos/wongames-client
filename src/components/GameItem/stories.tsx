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
