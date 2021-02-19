import styled, { css } from 'styled-components'

import { customMedia } from 'utils/helper/media'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 0;
`

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 1rem;
`

export const Title = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.pink};
    text-transform: uppercase;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
  `}
`

export const Description = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.description};
    font-size: ${theme.font.sizes.small};
  `}
`

export const Middle = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;

  ${customMedia.lessThan('desktop')`
    flex-direction: column;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
`

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 1rem;
    padding: 2rem 1rem;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    box-shadow: 0 0.6rem 0.6rem 0 ${theme.colors.boxShadow};
  `}
`

export const Aside = styled.aside`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
`

export const AsideTitle = styled.h1`
  ${({ theme }) => css`
    margin: 0;
    padding: 1.5rem 1rem;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    background-color: ${theme.colors.pink};
    font-weight: ${theme.font.normal};
    border-radius: ${theme.border.radius};
    strong {
      font-weight: ${theme.font.xbold};
    }
  `}
`

export const DescriptionAside = styled(Description)`
  ${({ theme }) => css`
    color: ${theme.colors.descriptionLight};
  `}
`

export const AsideImage = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    border-radius: ${theme.border.radius};
  `}
`

export const Footer = styled.footer`
  margin-top: 2rem;
`

export const FooterText = styled.p`
  ${({ theme }) => css`
    margin: 0;
    padding: 1rem;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    background-color: ${theme.colors.pink};
    font-weight: ${theme.font.normal};
    border-radius: ${theme.border.radius};
    text-align: center;
    margin: 2rem 0;
    a {
      color: ${theme.colors.white};
      font-weight: ${theme.font.xbold};
    }
  `}
`

export const FooterLine = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 0.1rem;
    background-color: ${theme.colors.pink};
  `}
`
