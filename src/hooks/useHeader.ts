import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { signOut } from 'firebase/auth'

import { toggleCart } from 'store/toolkit/cart/cart.slice'
import { logoutUser } from 'store/toolkit/user/user.slice'

import { auth } from 'config/firebase.config'

const useHeader = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

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

  return {
    handleCartClick,
    handleExploreClick,
    handleLogoClick,
    handleSignOutClick,
    handleSignUpClick,
    handleLoginClick
  }
}

export default useHeader
