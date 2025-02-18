import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from '../assets/logo.png'


// import {amazonLogo} from '../assets/amazonLogo.jpeg'
import {FaShoppingCart} from 'react-icons/fa'
function Navbar() {
    const {cart}=useSelector(state=>state)

  return (
    <div >
      <nav className="flex  justify-between items-center h-20  max-w-6xl mx-auto">

        <NavLink to="/">
        <div className="ml-5">
        <img src={logo} alt="logo" width="200px" ></img>

        </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 gap-x-5 ">
            <NavLink to="/">
            <p>Home</p>
            
            </NavLink>

            <NavLink to="/cart">
            <div className="relative">

            <FaShoppingCart fontSize={24 }/>
            {
                cart.length>0&&<span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex  justify-center items-center animate-bounce rounded-full text-white" >{cart.length}</span>
            }
        
            </div>
            
            </NavLink>

        </div>
 
    </nav>
    </div>
  )
}

export default Navbar
 