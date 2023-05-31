import styled, { css } from 'styled-components'

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    color: ${theme.colors.black};
    padding: 1.3rem ${theme.spacings.small};
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xsmall};
    }
    > span {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`

export const Image = styled.img``
