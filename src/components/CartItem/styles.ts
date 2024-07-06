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
    width:100%;
  
    flex-direction: column;
    margin-bottom: 1rem;

    img{
      margin-bottom:1rem;
    }

   
    
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

  
      
    
  }
  @media (max-width: ${breakpoints.tablet}) {

    h2{

      width: 2rem;
    }
    div{
     
      flex-direction: row;
      margin-top: -4.5rem;
      gap: 5rem;
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
   
    align-items: center;
  

   

   img{
      margin:0;
      padding:0
    }
    margin-top: -3rem;
    margin-right: 1rem;
   
    width: 30%;   

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
    
  
  justify-content: flex-end;
  width: 100%;
  flex-direction: column;
  margin-left: 15rem;
  margin-top: -2rem;

  h5{
    display: block; 
  }

  img{
    position: absolute;
    right: 1.25rem;
    margin-top: -7rem;
    
  }
  
  }
`
