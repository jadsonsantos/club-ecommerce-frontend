import { useContext } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { auth } from 'config/firebase.config'
import { UserContext } from 'contexts/user.context'
import { signOut } from 'firebase/auth'

import * as S from './Header.styles'

const Header = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useContext(UserContext)

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/sign-up')
  }

  return (
    <S.HeaderContainer>
      <S.HeaderTitle>CLUB CLOTHING</S.HeaderTitle>

      <S.HeaderItems>
        <S.HeaderItem>Explorar</S.HeaderItem>
        {!isAuthenticated && (
          <>
            <S.HeaderItem onClick={handleLoginClick}>Login</S.HeaderItem>
            <S.HeaderItem onClick={handleSignUpClick}>Criar Conta</S.HeaderItem>
          </>
        )}

        {isAuthenticated && (
          <S.HeaderItem onClick={() => signOut(auth)}>Sair</S.HeaderItem>
        )}

        <S.HeaderItem>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </S.HeaderItem>
      </S.HeaderItems>
    </S.HeaderContainer>
  )
}

export default Header
