import { HiUserCircle } from 'react-icons/hi'
import { RiHandbagFill } from 'react-icons/ri'
import styled, { css } from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'

import { Logo as LogoComponent } from '../Logo'
import { customMedia } from '../../utils/helper/media'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 6rem;
    background-color: ${theme.colors.primary};
    position: fixed;
    top: 0;
    max-width: 100vw;
    padding: 1rem 0;
  `}
`

export const Container = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${customMedia.lessThan('tablet')`
    width: 90%;  
  `}
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  height: 100%;

  ${customMedia.lessThan('desktop')`
    flex-direction: row-reverse;
  `}
`

export const Logo = styled(LogoComponent)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18rem;
    height: 100%;
    color: ${theme.colors.white};
  `}
`

export const Categories = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
    cursor: pointer;
    text-transform: uppercase;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    background-color: transparent;
    border: none;
    outline: none;

    ${customMedia.lessThan('tablet')`
      display: none;
    `}
  `}
`

export const CategoriesIcon = styled(GiHamburgerMenu)`
  ${({ theme }) => css`
    width: 2rem;
    height: 2rem;
    color: ${theme.colors.white};
    margin-right: 1rem;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    flex: 1;
    height: 100%;
    margin: 0 5rem;
    border-radius: ${theme.border.radius};
    outline: none;
    border: none;
    padding: 0 1rem;
    font-size: ${theme.font.sizes.medium};

    ::placeholder {
      color: ${theme.colors.placeholder};
    }

    ${customMedia.lessThan('tablet')`
      margin: 0;
      margin-left: 2rem;
    `}
  `}
`

export const User = styled.a`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem 0.2rem;
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    cursor: pointer;

    ${customMedia.lessThan('desktop')`
      display: none;
    `}
  `}
`

export const UserIcon = styled(HiUserCircle)`
  ${({ theme }) => css`
    width: 3rem;
    height: 3rem;
    color: ${theme.colors.white};
    margin-right: 0.5rem;
  `}
`

export const CartIcon = styled(RiHandbagFill)`
  ${({ theme }) => css`
    width: 2.3rem;
    height: 2.3rem;
    color: ${theme.colors.lightBlue};
    margin-left: 2rem;
  `}
`
