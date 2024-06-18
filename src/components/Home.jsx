import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../index.css'
import Header from './Header'
import About from './About'
import Products from './Products'
import Cart from './Cart'
import First from './First'

// ecomContext banaya gaya hai taaki data share kiya ja sake
export const ecomContext = createContext();

function Home() {
    // Products aur cart state manage karne ke liye useState hooks
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    // Product ko cart mein add karne ka function
    function handleAddtoCart(e, product) {
        e.preventDefault();
        setCart([...cart, product])
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://strapi-store-server.onrender.com/api/products");
            const result = await response.json();
            setProducts(result.data)
        }
        fetchData();
    }, [])

    return (
        <>
            <BrowserRouter>
                {/* Context Provider se data supply kiya ja raha hai */}
                <ecomContext.Provider value={{ products, setProducts, handleAddtoCart, cart }}>
                    <Header />
                    <Routes>
                        <Route path='/' element={<First />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/products' element={<Products />}></Route>
                        <Route path='/cart' element={<Cart />}></Route>
                    </Routes>
                </ecomContext.Provider>
            </BrowserRouter>
        </>
    )
}

export default Home
