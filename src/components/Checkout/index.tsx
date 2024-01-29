import { useContext } from 'react'
import { BsBagCheck } from 'react-icons/bs'
import { CartContext } from 'contexts/cart.context'

import CartItem from 'components/CartItem'
import CustomButton from 'components/CustomButton'

import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal
} from './styles'

const Checkout = () => {
  const { products, productsTotalPrice } = useContext(CartContext)

  const Products = () => (
    <>
      <CheckoutProducts>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </CheckoutProducts>
      <CheckoutTotal>Total: R$ {productsTotalPrice}</CheckoutTotal>
      <CustomButton startIcon={<BsBagCheck />}>Finalizar compra</CustomButton>
    </>
  )

  const result =
    products.length > 0 ? <Products /> : <p>Seu carrinho está vazio!</p>

  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>
      {result}
    </CheckoutContainer>
  )
}

export default Checkout
