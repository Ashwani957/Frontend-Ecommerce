import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

import './App.css'
function App() {
  return (
    <div>
      <div className="bg-slate-900">
        <Navbar></Navbar>
      </div>
      <Routes>
       
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
      
      </Routes>
    </div>
  )
}

export default App
