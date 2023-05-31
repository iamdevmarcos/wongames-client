import { Container } from 'components/Container'
import Heading from 'components/Heading'
import ProfileMenu, { ProfileUrl } from 'components/ProfileMenu'
import Base from 'templates/Base'

import { useRouter } from 'next/router'

import * as S from './styles'

export type ProfileProps = {
  children: React.ReactNode
}

const Profile = ({ children }: ProfileProps) => {
  const { asPath } = useRouter()
  const activeLink = asPath as ProfileUrl

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My profile
        </Heading>

        <S.Main>
          <ProfileMenu activeLink={activeLink} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  )
}

export default Profile
