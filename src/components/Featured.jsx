import React, { useContext } from 'react'
import { ecomContext } from './Home'

function Featured() {
  // Context se products access kiya gaya hai
  const { products } = useContext(ecomContext);

  // Featured products ko filter kiya gaya hai
  const featuredProducts = products.filter((prod) => {
    return prod.attributes.featured === true
  })

  return (
    <div className='flex item-center p-2'>
        {
            // Featured products ko display kiya gaya hai
            featuredProducts.map((prod, index) => {
               return (
                <div key={index} className='m-2 p-2'>
                   <img src={prod.attributes.image} alt="" />
                   <h3>{prod.attributes.title}</h3>
                   <p>${prod.attributes.price / 100}</p>
               </div>
               )
            })
        }
    </div>
  )
}

export default Featured
