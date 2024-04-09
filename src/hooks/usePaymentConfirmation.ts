import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { clearCartProducts } from 'store/toolkit/cart/cart.slice'

const usePaymentConfirmation = () => {
  const dispatch = useDispatch()

  const [searchParams] = useSearchParams()

  const navigate = useNavigate()

  const status = searchParams.get('success')
  const isApproved = status === 'true'
  const isCanceled = searchParams.get('canceled') === 'true'

  useEffect(() => {
    if (isApproved) {
      dispatch(clearCartProducts())
    }
  }, [status])

  const handleGoToHomePageClick = () => {
    navigate('/')
  }

  return { status, isApproved, isCanceled, handleGoToHomePageClick }
}

export default usePaymentConfirmation
