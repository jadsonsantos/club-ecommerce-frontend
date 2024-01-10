import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import LoginPage from 'pages/Login'
import SignUp from 'pages/SignUp'

const App = () => {
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
