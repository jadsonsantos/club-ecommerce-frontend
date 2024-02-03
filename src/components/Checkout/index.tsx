import { useContext, useState } from 'react'
import { BsBagCheck } from 'react-icons/bs'
import axios from 'axios'
import { CartContext } from 'contexts/cart.context'

import CartItem from 'components/CartItem'
import CustomButton from 'components/CustomButton'
import Loading from 'components/Loading'

import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal
} from './styles'

const Checkout = () => {
  const { products, productsTotalPrice } = useContext(CartContext)
  const [isLoading, setIsLoading] = useState(false)

  const handleFinishPurchaseClick = async () => {
    try {
      setIsLoading(true)

      const { data } = await axios.post(
        `${process.env.REACT_APP_STRIPE_API_URL}/create-checkout-session`,
        {
          products
        }
      )

      window.location.href = data.url
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const Products = () => (
    <>
      <CheckoutProducts>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </CheckoutProducts>
      <CheckoutTotal>Total: R$ {productsTotalPrice}</CheckoutTotal>
      <CustomButton
        startIcon={<BsBagCheck />}
        onClick={handleFinishPurchaseClick}
      >
        Finalizar compra
      </CustomButton>
    </>
  )

  return (
    <>
      {isLoading && <Loading />}

      <CheckoutContainer>
        <CheckoutTitle>Checkout</CheckoutTitle>
        {products.length > 0 ? <Products /> : <p>Seu carrinho está vazio!</p>}
      </CheckoutContainer>
    </>
  )
}

export default Checkout
