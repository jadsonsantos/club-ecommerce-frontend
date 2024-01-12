import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { auth } from 'config/firebase.config'
import { onAuthStateChanged } from 'firebase/auth'
import Home from 'pages/Home'
import LoginPage from 'pages/Login'
import SignUp from 'pages/SignUp'

const App = () => {
  onAuthStateChanged(auth, (user) => {
    console.log(user)
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
