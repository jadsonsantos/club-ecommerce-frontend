import { FunctionComponent, useContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { auth, db } from 'config/firebase.config'
import { UserContext } from 'contexts/user.context'
import { userConverter } from 'converters/firestore.converters'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import CategoryDetails from 'pages/CategoryDetails'
import CheckoutPage from 'pages/Checkout'
import Explore from 'pages/Explore'
import Home from 'pages/Home'
import LoginPage from 'pages/Login'
import SignUp from 'pages/SignUp'

import Cart from 'components/Cart'
import Loading from 'components/Loading'

const App: FunctionComponent = () => {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)
  const [isInitializing, setIsInitializing] = useState(true)

  onAuthStateChanged(auth, async (user) => {
    const isSignOut = isAuthenticated && !user
    const isSignIn = !isAuthenticated && user

    if (isSignOut) {
      logoutUser()
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

      loginUser(userFromFirestore)

      return setIsInitializing(false)
    }

    return setIsInitializing(false)
  })

  if (isInitializing) return <Loading />

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/category/:id' element={<CategoryDetails />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
      <Cart />
    </BrowserRouter>
  )
}

export default App
