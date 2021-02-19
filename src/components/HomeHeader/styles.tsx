import styled, { css } from 'styled-components'

import { customMedia } from 'utils/helper/media'

export const Wrapper = styled.section`
  width: 100%;
  height: 35rem;
  margin-top: 6rem;
  display: flex;

  ${customMedia.lessThan('desktop')`
    flex-direction: column;
    height: auto;
  `}
`

export const Image = styled.img`
  width: 50%;
  height: 100%;

  ${customMedia.lessThan('desktop')`
    width: 100%;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 100%;
    padding: 2rem;
    background-color: ${theme.colors.pink};

    ${customMedia.lessThan('desktop')`
      width: 100%;
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxxxlarge};
    font-weight: ${theme.font.normal};
    line-height: 3.5rem;
    margin-bottom: 2rem;
    strong {
      font-weight: ${theme.font.xbold};
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
  `}
`
