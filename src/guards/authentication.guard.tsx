import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ChildrenProps from 'types/children.types'

import Header from 'components/Header'
import Loading from 'components/Loading'

import { UserContext } from '../contexts/user.context'

const AuthenticationGuard: React.FC<ChildrenProps> = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <Loading message='Você precisa estar logado para acessar esta página. Você será redirecionado para a página de login em instantes...' />
      </>
    )
  }

  return <>{children}</>
}

export default AuthenticationGuard
