import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import LoginPage from 'pages/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
