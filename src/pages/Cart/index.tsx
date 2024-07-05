import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  CartContainer,
  ItemInfoHeader,
  CheckoutContainer,
  CheckoutButton,
  TotalAmount,
  EmptyCartContainer,
  ReloadButton,
  BackToHomeButton,
} from './styles'

import notFound from '../../assets/images/notFound.svg'
import success from '../../assets/images/sucess.svg'

import { useCart } from '../../context/CartContext'
import { CartItem } from '../../components/CartItem'

export const Cart = () => {
  const { cart, removeItem, increaseQuantity, decreaseQuantity } = useCart()
  const [checkoutComplete, setCheckoutComplete] = React.useState(false)

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const handleDelete = (itemId: number) => {
    removeItem(itemId)
  }

  const handleIncrease = (itemId: number) => {
    increaseQuantity(itemId)
  }

  const handleDecrease = (itemId: number) => {
    decreaseQuantity(itemId)
  }

  const handleCheckout = () => {
    setCheckoutComplete(true)
  }

  return (
    <CartContainer>
      {checkoutComplete ? (
        <>
          <p>Compra realizada com sucesso!</p>
          <img src={success} alt="Checkout Success" />
          <NavLink to="/">
            <BackToHomeButton>Voltar</BackToHomeButton>
          </NavLink>
        </>
      ) : (
        <>
          {cart.length > 0 && (
            <ItemInfoHeader>
              <div>produto</div>
              <div>qtd</div>
              <div>subtotal</div>
            </ItemInfoHeader>
          )}

          {cart.length > 0 ? (
            cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onDelete={handleDelete}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
              />
            ))
          ) : (
            <EmptyCartContainer>
              <p>Parece que não há nada por aqui :(</p>
              <img src={notFound} alt="Carrinho Vazio" />
              <NavLink to="/cart">
              <ReloadButton>
                Recarregar página
              </ReloadButton>
              </NavLink>
            </EmptyCartContainer>
          )}

          {cart.length > 0 && (
            <CheckoutContainer>
              <CheckoutButton onClick={handleCheckout}>
                FINALIZAR PEDIDO
              </CheckoutButton>
              <TotalAmount>
                <h1>TOTAL</h1>

                <h3>
                  R$<span></span>
                  {total.toFixed(2)}
                </h3>
              </TotalAmount>
            </CheckoutContainer>
          )}
        </>
      )}
    </CartContainer>
  )
}

/*


  responsividade
 
  deploy

*/
