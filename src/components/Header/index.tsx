import { BsCart3 } from 'react-icons/bs'

import Container from 'components/Container'

import { useAppSelector } from 'hooks/redux.hooks'
import useHeader from 'hooks/useHeader'
import { selectProductsCount } from 'store/reducers/cart/cart.selectors'

import * as S from './Header.styles'

const Header = () => {
  const {
    handleLogoClick,
    handleExploreClick,
    handleLoginClick,
    handleSignUpClick,
    handleSignOutClick,
    handleCartClick
  } = useHeader()

  const { isAuthenticated } = useAppSelector(
    (rootReducer) => rootReducer.userReducer
  )

  const productsCount = useAppSelector(selectProductsCount)

  return (
    <S.Header>
      <Container>
        <S.HeaderContainer>
          <S.HeaderTitle onClick={handleLogoClick}>CLUB CLOTHING</S.HeaderTitle>

          <S.HeaderItems>
            <S.HeaderItem onClick={handleExploreClick}>Explorar</S.HeaderItem>
            {!isAuthenticated && (
              <>
                <S.HeaderItem onClick={handleLoginClick}>Login</S.HeaderItem>
                <S.HeaderItem onClick={handleSignUpClick}>
                  Criar Conta
                </S.HeaderItem>
              </>
            )}

            {isAuthenticated && (
              <S.HeaderItem onClick={handleSignOutClick}>Sair</S.HeaderItem>
            )}

            <S.HeaderItem onClick={handleCartClick}>
              <BsCart3 size={25} />
              <p style={{ marginLeft: 5 }}>{productsCount}</p>
            </S.HeaderItem>
          </S.HeaderItems>
        </S.HeaderContainer>
      </Container>
    </S.Header>
  )
}

export default Header
