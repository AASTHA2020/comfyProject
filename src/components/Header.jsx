// Header.jsx
import React, { useContext } from 'react';
import { IoMoon } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ecomContext } from './Home'; // Adjusted import path assuming Home.jsx is in the same directory

function Header() {
  const { cart } = useContext(ecomContext); // Accessing cart state from context

  return (
    <>
      {/* Header */}
      <header className="bg-blue-500 py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Top section */}
        <div id="top" className='bg-cyan-950 px-4 py-1 flex justify-end items-center'>
          <a href="#" className='text-white px-2'>Sign in</a>
          <a href="#" className='text-white px-2'>Register</a>
        </div>

        {/* Bottom section */}
        <div id="bottom" className='flex justify-between items-center'>
          <h1 className='text-white text-xl'>ECOM</h1>

          {/* Navigation links */}
          <ul className='flex gap-4'>
            <li>
              <Link to="/" className='text-white'>Home</Link>
            </li>
            <li>
              <Link to="/about" className='text-white'>About</Link>
            </li>
            <li>
              <Link to="/products" className='text-white'>Products</Link>
            </li>
            <li>
              <Link to="/cart" className='text-white'>Cart</Link>
            </li>
          </ul>

          {/* Icons */}
          <ul className='flex items-center gap-4'>
            <li className='text-white'><IoMoon /></li>
            <li className='text-white flex items-center'>
              <MdOutlineShoppingCart /><span>{cart.length}</span>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
