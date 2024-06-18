import React, { useContext } from 'react'
import { IoMoon } from "react-icons/io5";  // Moon icon ke liye
import { MdOutlineShoppingCart } from "react-icons/md";  // Shopping cart icon ke liye
import { Link } from 'react-router-dom';  // Navigation links ke liye
import { ecomContext } from './Home';  // Context se data fetch karne ke liye

function Header() {
    // Accessing cart state from context
    const { cart } = useContext(ecomContext)

  return (
    <>
     <header>
        <div id="top" className='bg-cyan-950 px-20 py-2 flex justify-end items-center'>
            {/* Sign in and Register links */}
            <a href="" className='text-white px-2'>Sign in</a>
            <a href="" className='text-white px-2'>Register</a>
        </div>
        <div id="bottom" className='bg-blue-500 px-20 py-2 flex justify-between items-center'>
          {/* ECOM logo */}
          <h1 className='text-white text-xl'>ECOM</h1>
          {/* Navigation links */}
          <ul>
            <li>
                <Link to="/" className='text-white px-4'>Home</Link>
                <Link to="/about" className='text-white px-4'>About</Link>
                <Link to="/products" className='text-white px-4'>Products</Link>
                <Link to="/cart" className='text-white px-4'>Cart</Link>
            </li>
          </ul>
          {/* Icons for theme and cart */}
          <ul className='flex'>
            <li className='text-white px-2'><IoMoon /></li>
            <li className='text-white px-2'><MdOutlineShoppingCart /><span>{cart.length}</span></li>
          </ul>
        </div>
     </header>
    </>
  )
}

export default Header
