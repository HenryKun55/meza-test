import styled, { css } from 'styled-components'
import { BsGrid3X3Gap } from 'react-icons/bs'
import { MdCompareArrows } from 'react-icons/md'

import { customMedia } from 'utils/helper/media'

export const Wrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;

  ${customMedia.lessThan('desktop')`
    justify-content: center;
    margin: 2rem auto;
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
    cursor: pointer;
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    background-color: ${theme.colors.white};
    border: none;
    outline: none;
    padding: 0.5rem 5rem;
    width: 20rem;

    ${customMedia.lessThan('mobile')`
      width: 15rem;
      flex-direction: column;
      margin-left: 0;
    `}
  `}
`

export const QuantityIcon = styled(BsGrid3X3Gap)`
  ${({ theme }) => css`
    width: 2rem;
    height: 2rem;
    color: ${theme.colors.gray};
    margin-right: 0.5rem;

    ${customMedia.lessThan('mobile')`
      margin-right: 0; 
      margin-bottom: 1rem;
    `}
  `}
`

export const OrderIcon = styled(MdCompareArrows)`
  ${({ theme }) => css`
    width: 2rem;
    height: 2rem;
    color: ${theme.colors.gray};
    margin-right: 0.5rem;
  `}
`
