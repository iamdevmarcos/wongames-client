import Profile from 'templates/Profile'

import OrdersList, { type OrdersListProps } from 'components/OrdersList'

import mockOrdersList from 'components/OrdersList/mock'

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      items: mockOrdersList
    }
  }
}
