import { useRouter } from 'next/router'
import GameTemplate, { type GameTemplateProps } from 'templates/Game'

export default function Index(props: GameTemplateProps) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  return <GameTemplate {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'zelda-botw' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: {
      cover:
        'https://punishedbacklog.com/wp-content/uploads/2017/08/Banner-Switch-Zelda-BreathOfTheWild-NewArt-1.jpg',
      gameInfo: {
        title: 'Zelda Breath of the Wild',
        price: '129.99',
        description:
          'The Legend of Zelda: Breath of the Wild is a 2017 action-adventure game developed by Nintendo EPD for the Nintendo Switch and Wii U. Set at the end of the Zelda timeline, the player controls an amnesiac Link as he sets out to save Princess Zelda and prevent Calamity Ganon from destroying Hyrule.'
      }
    }
  }
}
