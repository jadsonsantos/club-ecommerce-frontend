import { useState } from 'react'

import env from 'config/env.config'
import CartProduct from 'types/cart.types'

import axios from 'axios'

const useCheckout = (products: CartProduct[]) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleFinishPurchaseClick = async () => {
    try {
      setIsLoading(true)

      const { data } = await axios.post(
        `${env.stripeApiUrl}/create-checkout-session`,
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
  return { handleFinishPurchaseClick, isLoading }
}

export default useCheckout
