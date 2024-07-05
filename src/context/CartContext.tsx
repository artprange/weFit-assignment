import { createContext, useState, useContext, ReactNode, FC } from 'react'

interface CartItem {
  id: number
  title: string
  price: number
  image: string
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (movie: CartItem) => void
  removeItem: (itemId: number) => void
  increaseQuantity: (itemId: number) => void
  decreaseQuantity: (itemId: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (movie: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === movie.id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === movie.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      } else {
        return [...prevCart, { ...movie, quantity: 1 }]
      }
    })
  }

  const removeItem = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId))
  }

  const increaseQuantity = (itemId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  const decreaseQuantity = (itemId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    )
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
