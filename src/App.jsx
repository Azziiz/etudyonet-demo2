
import {Routes, Route} from 'react-router-dom'
import {AuthContextProvider} from './context/AuthContext'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ProtectedRoute from './pages/ProtectedRoute'
import UntiProtectedRoute from './pages/UntiProtectedRoute'
import User from './pages/User'

import NotFound from './pages/NotFound'
import About from './pages/About'
import Settings from './pages/Settings'
import Navbar from './components/Navbar'
import './styles/main.css'
import { useState } from 'react'

function App() {

  

  return (
    <div>

      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/settings' element={<ProtectedRoute><Settings/></ProtectedRoute>}/>
          <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
          <Route path='/users/:id' element={<User/>}/>
          <Route path='/signin' element={<UntiProtectedRoute><Signin/></UntiProtectedRoute>}/>
          <Route path='/signup' element={<UntiProtectedRoute><Signup/></UntiProtectedRoute>}/>
          <Route path="*" element={<NotFound/>} />   
        </Routes>
      </AuthContextProvider>
    </div>

  )
}

export default App
