import styled from 'styled-components'
import { breakpoints } from '../../styles/themes/global'

export const ItemInfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme['gray-100']};
  padding: 1rem 0;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ItemDescription = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;

  img {
    width: 5.6rem;
  }

  div {
    display: flex;
    flex-direction: column;

    h1 {
      color: ${(props) => props.theme['base-gray']};
      font-size: 1rem;
      font-weight: 700;
    }

    h2 {
      color: ${(props) => props.theme['base-gray']};
      font-size: 0.875rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      justify-content: space-between;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 1rem;

    div {
      position: absolute;
      top: 10rem;
      right: 4.5rem;
      flex-direction: row;
      align-items: flex-start;

      width: 50%;
    }
  }
`

export const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;

  input {
    text-align: center;
    width: 3.875rem;
    height: 1.625rem;
    border: 1px solid ${(props) => props.theme['gray-100']};
    font-size: 0.875rem;
    font-weight: 400;
    font-family: inherit;
    color: ${(props) => props.theme['base-gray']};
    border-radius: 4px;
  }

  img {
    width: 1.125rem;
  }

  button {
    background: transparent;
    border: none;
    margin: 0 0.5rem;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    position: absolute;
    top: 15rem;
    left: 8rem;
  }
`

export const Subtotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h5 {
    display: none;
  }

  span {
    font-weight: 700;
  }

  button {
    background: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    position: absolute;
    top: 15rem;
    right: 2.5rem;

    h5 {
      display: block;
      font-weight: 700;
      color: ${(props) => props.theme['gray-700']};
    }
    flex-shrink: 1;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;

    button {
      position: absolute;
      bottom: 5.525rem;
      right: -0.5rem;
    }
  }
`
