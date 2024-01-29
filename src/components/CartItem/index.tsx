import { FunctionComponent, useContext } from 'react'
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { CartContext } from 'contexts/cart.context'
import CartProduct from 'types/cart.types'

import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './styles'

interface CartItemProps {
  product: CartProduct
}

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const {
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity
  } = useContext(CartContext)

  const handleRemoveClick = () => {
    removeProductFromCart(product.id)
  }

  const handleIncreaseClick = () => {
    increaseProductQuantity(product.id)
  }

  const handleDecreaseClick = () => {
    decreaseProductQuantity(product.id)
  }

  return (
    <CartItemContainer>
      <CartItemImage imageurl={product.imageUrl} />
      <CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <CartItemQuantity>
          <AiOutlineMinus onClick={handleDecreaseClick} />
          <p>{product.quantity}</p>
          <AiOutlinePlus onClick={handleIncreaseClick} />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton onClick={handleRemoveClick}>
        <AiOutlineClose size={25} />
      </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem
