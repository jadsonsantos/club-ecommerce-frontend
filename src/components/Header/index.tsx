import { BsCart3 } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from 'config/firebase.config'
import { signOut } from 'firebase/auth'
import { useAppSelector } from 'hooks/redux.hooks'
import { toggleCart } from 'store/reducers/cart/cart.actions'
import { selectProductsCount } from 'store/reducers/cart/cart.selectors'
import { logoutUser } from 'store/toolkit/user/user.slice'

import * as S from './Header.styles'

const Header = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { isAuthenticated } = useAppSelector(
    (rootReducer) => rootReducer.userReducer
  )

  const productsCount = useAppSelector(selectProductsCount)

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/sign-up')
  }

  const handleSignOutClick = () => {
    dispatch(logoutUser())
    signOut(auth)
  }

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleExploreClick = () => {
    navigate('/explore')
  }

  const handleCartClick = () => {
    dispatch(toggleCart())
  }

  return (
    <S.HeaderContainer>
      <S.HeaderTitle onClick={handleLogoClick}>CLUB CLOTHING</S.HeaderTitle>

      <S.HeaderItems>
        <S.HeaderItem onClick={handleExploreClick}>Explorar</S.HeaderItem>
        {!isAuthenticated && (
          <>
            <S.HeaderItem onClick={handleLoginClick}>Login</S.HeaderItem>
            <S.HeaderItem onClick={handleSignUpClick}>Criar Conta</S.HeaderItem>
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
  )
}

export default Header
