import React, { useContext } from 'react';
import { IoMoon } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { ecomContext } from './components/Home'; // Assuming correct path to ecomContext

function Header() {
    const { cart } = useContext(ecomContext); // Accessing cart state from context

    return (
        <>
            <header>
                {/* Top section */}
                <div id="top" className='bg-cyan-950 px-20 py-2 flex justify-end items-center'>
                    <a href="#" className='text-white px-2'>Sign in</a>
                    <a href="#" className='text-white px-2'>Register</a>
                </div>
                {/* Bottom section */}
                <div id="bottom" className='bg-blue-500 px-20 py-2 flex justify-between items-center'>
                    <h1 className='text-white text-xl'>ECOM</h1>
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
