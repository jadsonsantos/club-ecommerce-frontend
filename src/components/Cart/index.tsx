import { useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CartContext } from 'contexts/cart.context'
import { useAppSelector } from 'hooks/redux.hooks'
import { toggleCart } from 'store/reducers/cart/cart.actions'

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
  const { productsTotalPrice, productsCount } = useContext(CartContext)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { isVisible, products } = useAppSelector((state) => state.cartReducer)

  const handleGoToCheckoutClick = () => {
    navigate('/checkout')
    dispatch(toggleCart())
  }

  const handleEscapeAreaClick = () => {
    dispatch(toggleCart())
  }

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={handleEscapeAreaClick} />
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
