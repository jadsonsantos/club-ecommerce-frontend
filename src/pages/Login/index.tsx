import Header from 'components/Header'

import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './Login.styles'

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>

          {/* Button */}

          <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

          <LoginInputContainer>{/* Email Input */}</LoginInputContainer>
          <LoginInputContainer>{/* Password Input */}</LoginInputContainer>

          {/* Button */}
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
