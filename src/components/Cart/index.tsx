import { useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { CartContext } from 'contexts/cart.context'

import CartItem from 'components/CartItem'
import CustomButton from 'components/CustomButton'

import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './styles'

const Cart = () => {
  const { isVisible, productsTotalPrice, products, productsCount, toggleCart } =
    useContext(CartContext)

  const navigate = useNavigate()

  const handleGoToCheckoutClick = () => {
    navigate('/checkout')
    toggleCart()
  }

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Seu carrinho</CartTitle>

        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        {productsCount === 0 && <p>Seu carrinho está vazio!</p>}

        {productsCount > 0 && (
          <>
            <CartTotal>Total: R$ {productsTotalPrice}</CartTotal>

            <CustomButton
              startIcon={<BsCartCheck />}
              onClick={handleGoToCheckoutClick}
            >
              Ir para o checkout
            </CustomButton>
          </>
        )}
      </CartContent>
    </CartContainer>
  )
}

export default Cart
