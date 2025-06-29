import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import PostsPage from './pages/PostsPage'
import AddPostPage from './pages/AddPostPage'
import AdminDashboard from './pages/AdminDashboard'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='' element={<LoginPage/>}/>
              <Route path='signup' element={<SignUpPage/>}/>
              <Route path='home' element={<HomePage/>}/>
              <Route path='posts' element={<PostsPage/>}/>
              <Route path='addpost' element={<AddPostPage/>}/>
              <Route path='admindashboard' element={<AdminDashboard/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
