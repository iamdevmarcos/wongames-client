import { Story, Meta } from '@storybook/react'
import CardsList, { type CardsListProps } from '.'

import cardsMock from 'components/PaymentOptions/mock'

export default {
  title: 'Profile/CardsList',
  component: CardsList,
  args: {
    cards: cardsMock
  }
} as Meta

export const Default: Story<CardsListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <CardsList {...args} />
  </div>
)
