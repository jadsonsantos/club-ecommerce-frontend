import { useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { CartContext } from 'contexts/cart.context'

import CustomButton from 'components/CustomButton'

import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './styles'

const Cart = () => {
  const { isVisible, toggleCart } = useContext(CartContext)
  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Seu carrinho</CartTitle>
        <CartTotal>Total: R$99</CartTotal>
        <CustomButton startIcon={<BsCartCheck />}>
          Ir para o checkout
        </CustomButton>
      </CartContent>
    </CartContainer>
  )
}

export default Cart
