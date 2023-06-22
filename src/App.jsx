
import {Routes, Route} from 'react-router-dom'
import {AuthContextProvider} from './context/AuthContext'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ProtectedRoute from './pages/ProtectedRoute'
import UntiProtectedRoute from './pages/UntiProtectedRoute'
import User from './pages/User'
import banner from './assets/banner.jpg'
import NotFound from './pages/NotFound'


import './styles/main.css'

function App() {
  

  return (
    <div>
      
      <AuthContextProvider>
      
        <Routes>
          
          <Route path='/' element={<ProtectedRoute><img src={banner} alt="" className='banner'/><Home/></ProtectedRoute>}/>
          <Route path='/profile' element={<ProtectedRoute><img src={banner} alt="" className='banner'/><Profile/></ProtectedRoute>}/>
          <Route path='/users/:id' element={<ProtectedRoute><img src={banner} alt="" className='banner'/><User/></ProtectedRoute>}/>
          <Route path='/signin' element={<UntiProtectedRoute><Signin/></UntiProtectedRoute>}/>
          <Route path='/signup' element={<UntiProtectedRoute><Signup/></UntiProtectedRoute>}/>
          <Route path="*" element={<NotFound/>} />
          
        </Routes>
      </AuthContextProvider>
    </div>

  )
}

export default App
