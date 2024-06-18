// Home.jsx
import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../index.css'; // Import Tailwind styles
import Header from './Header';
import About from './About';
import Products from './Products';
import Cart from './Cart';
import First from './First';

export const ecomContext = createContext();

function Home() {
  const [products, setProducts] = useState([]);
  const [cart , setCart] = useState([]);

  // Function to add product to cart
  function handleAddtoCart(e, product) {
    e.preventDefault();
    setCart([...cart, product]);
  }

  // Fetch products on component mount
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://strapi-store-server.onrender.com/api/products");
      const result = await response.json();
      setProducts(result.data);
    }
    fetchData();
  }, []);

  return (
    <>
      {/* Router setup */}
      <BrowserRouter>
        <ecomContext.Provider value={{ products, setProducts, handleAddtoCart, cart }}>
          <Header /> {/* Render header */}
          <Routes>
            <Route path='/' element={<First />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </ecomContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default Home;
