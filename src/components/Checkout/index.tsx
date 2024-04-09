import { BsBagCheck } from 'react-icons/bs'

import CartItem from 'components/CartItem'
import CustomButton from 'components/CustomButton'
import Loading from 'components/Loading'

import { useAppSelector } from 'hooks/redux.hooks'
import useCheckout from 'hooks/useCheckout'
import { selectProductsTotalPrice } from 'store/reducers/cart/cart.selectors'

import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal
} from './styles'

const Checkout = () => {
  const { products } = useAppSelector((state) => state.cartReducer)
  const productsTotalPrice = useAppSelector(selectProductsTotalPrice)

  const { isLoading, handleFinishPurchaseClick } = useCheckout(products)

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
