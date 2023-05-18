import { Story, Meta } from '@storybook/react'
import CartList, { type CartListProps } from '.'
import cartListMock from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: cartListMock,
    total: 'R$ 100'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800, margin: '0 auto' }}>
    <CartList {...args} />
  </div>
)
