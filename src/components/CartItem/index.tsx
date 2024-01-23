import { FunctionComponent } from 'react'
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
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
  return (
    <CartItemContainer>
      <CartItemImage imageurl={product.imageUrl} />
      <CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <CartItemQuantity>
          <AiOutlineMinus />
          <p>{product.quantity}</p>
          <AiOutlinePlus />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton>
        <AiOutlineClose size={25} />
      </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem
