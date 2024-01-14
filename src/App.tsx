import { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { auth, db } from 'config/firebase.config'
import { UserContext } from 'contexts/user.context'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
import Home from 'pages/Home'
import LoginPage from 'pages/Login'
import SignUp from 'pages/SignUp'

const App = () => {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    const isSignOut = isAuthenticated && !user
    const isSignIn = !isAuthenticated && user

    if (isSignOut) return logoutUser()

    if (isSignIn) {
      const querySnapShot = await getDocs(
        query(collection(db, 'users'), where('id', '==', user.uid))
      )

      const userFromFirestore = querySnapShot.docs[0]?.data()

      return loginUser(userFromFirestore as any)
    }
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
