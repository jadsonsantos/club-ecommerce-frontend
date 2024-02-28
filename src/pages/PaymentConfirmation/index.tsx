import { FunctionComponent, useEffect } from 'react'
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHome
} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { clearCartProducts } from 'store/toolkit/cart/cart.slice'

import CustomButton from 'components/CustomButton'
import Header from 'components/Header'

// Utilities
import Colors from '../../theme/theme.colors'

// Styles
import {
  PaymentConfirmationContainer,
  PaymentConfirmationContent
} from './styles'

const PaymentConfirmationPage: FunctionComponent = () => {
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

  return (
    <>
      <Header />
      <PaymentConfirmationContainer>
        <PaymentConfirmationContent>
          {isApproved && (
            <>
              <AiOutlineCheckCircle size={120} color={Colors.success} />
              <p>Sua compra foi finalizada com sucesso!</p>
            </>
          )}

          {(status === 'false' || isCanceled) && (
            <>
              <AiOutlineCloseCircle size={120} color={Colors.error} />
              <p>
                Ocorreu um erro ao finalizar sua compra. Por favor, tente
                novamente.
              </p>
            </>
          )}

          <CustomButton
            startIcon={<AiOutlineHome />}
            onClick={handleGoToHomePageClick}
          >
            Ir para a Página Inicial
          </CustomButton>
        </PaymentConfirmationContent>
      </PaymentConfirmationContainer>
    </>
  )
}

export default PaymentConfirmationPage
