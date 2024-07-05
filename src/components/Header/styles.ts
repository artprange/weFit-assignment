import styled from 'styled-components'
import { breakpoints } from '../../styles/themes/global'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 2.5rem;

  h1 {
    font-size: 1.25rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: space-between;
    padding: 1.5rem 1.125rem;
    h3 {
      display: none;
    }
  }
`

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const CartDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  h3 {
    font-weight: semi-bold;
    font-size: 0.875rem;
  }

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const CartImageContainer = styled.div`
  img {
    height: 2.5rem;
    width: 2.5rem;
  }
`
