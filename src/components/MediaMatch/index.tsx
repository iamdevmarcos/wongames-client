import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakpoint
  greatherThan?: breakpoint
}

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)`
      display: block
    `}
  `,

  greatherThan: (size: breakpoint) => css`
    ${media.greaterThan(size)`
      display: block
    `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greatherThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greatherThan && mediaMatchModifiers.greatherThan(greatherThan)}
  `}
`
