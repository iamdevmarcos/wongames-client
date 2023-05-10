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
  const descriptionHTML = `<div class="ProductDetailstyles__Grid-sc-4l5ex7-4 fKAltl"><div><h3 class="Headingstyles__StyledH-sc-s17bth-0 dAKxzb">STEP INTO A WORLD OF ADVENTURE</h3><div class="ReadMorestyles__ReadMore-sc-120wz1l-0 cLpU"><div class="ReadMorestyles__ChildContent-sc-120wz1l-2 isecEq"><div class="RichTextstyles__Html-sc-16r5mbt-1 hkEFQx clamp"><p>Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning Open-Air Adventure. Now on Nintendo Switch, your journey is freer and more open than ever. Take your system anywhere, and adventure as Link any way you like.<br></p></div></div><p class="Textstyles__StyledLegal-sc-w55g5t-2 fqVcKu">Software description provided by the publisher.</p></div></div><div class="ProductDetailstyles__DescrImageContainer-sc-4l5ex7-3 eDqFlw"><div><div class="Imagestyles__ImageWrapper-sc-1244ond-0 bxOtzt"><img alt="The Legend of Zelda™: Breath of the Wild" loading="lazy" fetchpriority="low" class="Imagestyles__CloudinaryImage-sc-1244ond-1 hvkFFn" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_600/ncom/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/description-image"></div></div></div></div>`

  return {
    props: {
      cover:
        'https://punishedbacklog.com/wp-content/uploads/2017/08/Banner-Switch-Zelda-BreathOfTheWild-NewArt-1.jpg',
      gameInfo: {
        title: 'Zelda Breath of the Wild',
        price: '129.99',
        description:
          'The Legend of Zelda: Breath of the Wild is a 2017 action-adventure game developed by Nintendo EPD for the Nintendo Switch and Wii U. Set at the end of the Zelda timeline, the player controls an amnesiac Link as he sets out to save Princess Zelda and prevent Calamity Ganon from destroying Hyrule.'
      },
      gallery: [
        {
          src: '/img/games/zelda-01.jpg',
          label: 'Gallery Image 1'
        },
        {
          src: '/img/games/zelda-02.jpg',
          label: 'Gallery Image 2'
        },
        {
          src: '/img/games/zelda-03.jpg',
          label: 'Gallery Image 3'
        },
        {
          src: '/img/games/zelda-04.jpg',
          label: 'Gallery Image 4'
        },
        {
          src: '/img/games/zelda-05.jpg',
          label: 'Gallery Image 5'
        }
      ],
      description: descriptionHTML
    }
  }
}
