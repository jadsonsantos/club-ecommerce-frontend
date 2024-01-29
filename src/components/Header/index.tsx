import { useContext } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { auth } from 'config/firebase.config'
import { CartContext } from 'contexts/cart.context'
import { UserContext } from 'contexts/user.context'
import { signOut } from 'firebase/auth'

import * as S from './Header.styles'

const Header = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useContext(UserContext)
  const { productsCount, toggleCart } = useContext(CartContext)

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/sign-up')
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
          <S.HeaderItem onClick={() => signOut(auth)}>Sair</S.HeaderItem>
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
