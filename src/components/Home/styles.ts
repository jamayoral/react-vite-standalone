import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.large};

    > div {
      > h1 {
        font-size: ${theme.font.sizes.huge};
        margin: 0;
      }
    }
  `}
`
