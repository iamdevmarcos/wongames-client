import Heading from 'components/Heading'
import { type PaymentCard } from 'components/PaymentOptions'
import * as S from './styles'

export type CardsListProps = {
  cards?: PaymentCard[]
}

const CardsList = ({ cards }: CardsListProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      My cards
    </Heading>

    {cards?.map((card) => (
      <S.Card key={card.number}>
        <S.Image src={card.img} alt={card.flag} />
        <span>{card.number}</span>
      </S.Card>
    ))}
  </>
)

export default CardsList
