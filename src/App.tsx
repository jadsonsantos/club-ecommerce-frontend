import { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { auth, db } from 'config/firebase.config'
import { userConverter } from 'converters/firestore.converters'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import AuthenticationGuard from 'guards/authentication.guard'
import { useAppSelector } from 'hooks/redux.hooks'
import CategoryDetails from 'pages/CategoryDetails'
import CheckoutPage from 'pages/Checkout'
import Explore from 'pages/Explore'
import Home from 'pages/Home'
import LoginPage from 'pages/Login'
import PaymentConfirmationPage from 'pages/PaymentConfirmation'
import SignUp from 'pages/SignUp'
import { loginUser, logoutUser } from 'store/toolkit/user/user.slice'

import Cart from 'components/Cart'
import Loading from 'components/Loading'

const App: FunctionComponent = () => {
  const [isInitializing, setIsInitializing] = useState(true)

  const dispatch = useDispatch()

  const { isAuthenticated } = useAppSelector(
    (rootReducer) => rootReducer.userReducer
  )

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const isSignOut = isAuthenticated && !user
      const isSignIn = !isAuthenticated && user

      if (isSignOut) {
        dispatch(logoutUser())
        return setIsInitializing(false)
      }

      if (isSignIn) {
        const querySnapShot = await getDocs(
          query(
            collection(db, 'users').withConverter(userConverter),
            where('id', '==', user.uid)
          )
        )

        const userFromFirestore = querySnapShot.docs[0]?.data()

        dispatch(loginUser(userFromFirestore))

        return setIsInitializing(false)
      }

      return setIsInitializing(false)
    })
  }, [dispatch])

  if (isInitializing) return <Loading />

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/category/:id' element={<CategoryDetails />} />
        <Route
          path='/checkout'
          element={
            <AuthenticationGuard>
              <CheckoutPage />
            </AuthenticationGuard>
          }
        />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route
          path='/payment-confirmation'
          element={<PaymentConfirmationPage />}
        />
      </Routes>
      <Cart />
    </BrowserRouter>
  )
}

export default App
