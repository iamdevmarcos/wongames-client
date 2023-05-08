import MediaMatch from 'components/MediaMatch'
import * as S from './styles'
import Heading from 'components/Heading'
import { Apple, Windows, Linux } from '@styled-icons/fa-brands'

type Platform = 'Windows' | 'Linux' | 'Mac'

type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  developer: string
  platforms: Platform[]
  releaseDate: string
  rating: Rating
  genres: string[]
}

const GameDetails = ({
  developer,
  platforms,
  releaseDate,
  rating,
  genres
}: GameDetailsProps) => {
  const platformIcons = {
    Linux: <Linux title="Linux" size={18} />,
    Mac: <Apple title="Mac" size={18} />,
    Windows: <Windows title="Windows" size={18} />
  }

  const formatRating = (rating: Rating) => {
    const data = {
      BR0: 'FREE',
      BR10: '10+',
      BR12: '12+',
      BR14: '14+',
      BR16: '16+',
      BR18: '18+'
    }

    return data[rating]
  }

  const formatDate = (date: Date) => {
    const formatedDate = new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(new Date(date))

    return formatedDate
  }

  return (
    <S.Wrapper>
      <MediaMatch greatherThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Title>Developer</S.Title>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Release Date</S.Title>
          <S.Description>{formatDate(new Date(releaseDate))}</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Platforms</S.Title>
          <S.IconsWrapper>
            {platforms.map((icon: Platform, index) => (
              <S.Icon key={index}>{platformIcons[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Title>Publisher</S.Title>
          <S.Description>2K</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Rating</S.Title>
          <S.Description>{formatRating(rating)}</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Genres</S.Title>
          <S.Description>{genres.join(' / ')}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
