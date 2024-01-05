import { BsCart3 } from 'react-icons/bs'

import * as S from './Header.styles'

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderTitle>CLUB CLOTHING</S.HeaderTitle>

      <S.HeaderItems>
        <S.HeaderItem>Explorar</S.HeaderItem>
        <S.HeaderItem>Login</S.HeaderItem>
        <S.HeaderItem>Criar Conta</S.HeaderItem>
        <S.HeaderItem>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </S.HeaderItem>
      </S.HeaderItems>
    </S.HeaderContainer>
  )
}

export default Header
