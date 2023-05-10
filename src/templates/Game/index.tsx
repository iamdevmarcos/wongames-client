import Base from 'templates/Base'
import * as S from './styles'
import GameInfo, { type GameInfoProps } from 'components/GameInfo'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
}

const GameTemplate = ({ cover, gameInfo }: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>
    </S.Main>
  </Base>
)

export default GameTemplate
