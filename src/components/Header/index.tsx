import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

import * as S from './Header.styles'

const Header = () => {
  const navigate = useNavigate()

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
        <S.HeaderItem onClick={handleLoginClick}>Login</S.HeaderItem>
        <S.HeaderItem onClick={handleSignUpClick}>Criar Conta</S.HeaderItem>
        <S.HeaderItem>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </S.HeaderItem>
      </S.HeaderItems>
    </S.HeaderContainer>
  )
}

export default Header
