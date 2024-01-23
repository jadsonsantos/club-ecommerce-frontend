import React, { createContext, useState } from 'react'
import CartProduct from 'types/cart.types'
import ChildrenProps from 'types/children.types'

interface ICartContext {
  isVisible: boolean
  products: CartProduct[]
  toggleCart: () => void
}

const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {}
})

const CartContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products] = useState<CartProduct[]>([])

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  return (
    <CartContext.Provider value={{ isVisible, toggleCart, products }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
