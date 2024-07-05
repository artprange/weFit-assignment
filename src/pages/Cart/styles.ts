import styled from 'styled-components'
import { breakpoints } from '../../styles/themes/global'

export const CartContainer = styled.div`
  background: ${(props) => props.theme.white};
  max-width: 67.5rem;
  margin: 0 auto;
  padding: 0 1rem;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;

  p {
    padding-top: 4rem;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-gray']};
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 1rem;
    padding: 1rem;
  }
`

export const BackToHomeButton = styled.button`
  margin-top: 1.5rem;
  margin-bottom: 4rem;
  background: ${(props) => props.theme['blue-500']};
  color: ${(props) => props.theme.white};
  padding: 0.75rem 3.5rem;
  border: none;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 4px;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme['blue-700']};
    cursor: pointer;
  }
`

export const ItemInfoHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem auto;

  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: bold;
  color: ${(porps) => porps.theme['gray-700']};
  > div {
    width: 35%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const CheckoutContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem 0;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`

export const CheckoutButton = styled.button`
  padding: 0.875rem 3rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['blue-500']};
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: ${(props) => props.theme['blue-700']};
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    order: 2;
  }
`
export const TotalAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  h1 {
    color: ${(props) => props.theme['gray-700']};
    font-size: 0.875rem;
    font-weight: bold;
    margin-right: 0.5rem;
  }

  h3 {
    color: ${(props) => props.theme['base-gray']};
    font-size: 1.5rem;
  }
  span::after {
    content: ' ';
  }
  @media (max-width: ${breakpoints.tablet}) {
    justify-content: space-between;
    width: 100%;
    order: 1;
    margin-bottom: 1rem;
  }
`

export const EmptyCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
  p {
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-gray']};
  }
`

export const ReloadButton = styled.button`
  margin-top: 1.5rem;
  margin-bottom: 4rem;
  background: ${(props) => props.theme['blue-500']};
  color: ${(props) => props.theme.white};
  padding: 0.875rem 2rem;
  border: none;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.theme['blue-700']};
    cursor: pointer;
  }
`
