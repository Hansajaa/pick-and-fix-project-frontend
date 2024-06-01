import './App.css'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='' element={<LoginPage/>}/>
              <Route path='signup' element={<SignUpPage/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
