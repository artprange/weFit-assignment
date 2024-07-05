import styled from 'styled-components'
import { breakpoints } from '../../styles/themes/global'

export const CardsContainer = styled.div`
  width: 65.5rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export const MovieContainer = styled.div`
  background: ${(props) => props.theme.white};
  width: 21.125rem;
  height: 20.25rem;

  margin-bottom: 0.5rem;
  border-radius: 4px;
  padding: 0.25rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem 0;

  img {
    width: 9rem;
  }

  p {
    color: ${(props) => props.theme['gray-900']};
    font-size: 0.75rem;
    font-weight: bold;
  }

  h4 {
    color: ${(props) => props.theme['blue-900']};
    font-size: 1rem;
    font-weight: bold;
  }

  span::after {
    content: ' ';
  }
`
