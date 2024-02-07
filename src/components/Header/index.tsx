import { useContext } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from 'config/firebase.config'
import { CartContext } from 'contexts/cart.context'
import { signOut } from 'firebase/auth'

import * as S from './Header.styles'

const Header = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )

  const { productsCount, toggleCart } = useContext(CartContext)

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/sign-up')
  }

  const handleSignOutClick = () => {
    dispatch({ type: 'LOGOUT_USER' })
    signOut(auth)
  }

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleExploreClick = () => {
    navigate('/explore')
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

        <S.HeaderItem onClick={toggleCart}>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>{productsCount}</p>
        </S.HeaderItem>
      </S.HeaderItems>
    </S.HeaderContainer>
  )
}

export default Header
