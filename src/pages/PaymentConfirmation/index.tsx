import { FunctionComponent } from 'react'
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHome
} from 'react-icons/ai'

import Container from 'components/Container'
import CustomButton from 'components/CustomButton'
import Header from 'components/Header'

import usePaymentConfirmation from 'hooks/usePaymentConfirmation'
import Colors from 'theme/theme.colors'

import {
  PaymentConfirmationContainer,
  PaymentConfirmationContent
} from './styles'

const PaymentConfirmationPage: FunctionComponent = () => {
  const { status, isApproved, isCanceled, handleGoToHomePageClick } =
    usePaymentConfirmation()

  return (
    <>
      <Header />
      <PaymentConfirmationContainer>
        <Container>
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
        </Container>
      </PaymentConfirmationContainer>
    </>
  )
}

export default PaymentConfirmationPage
