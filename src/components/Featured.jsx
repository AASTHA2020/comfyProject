import React, { useContext } from 'react';
import { ecomContext } from './Home';

function Featured() {
  const { products } = useContext(ecomContext);

  // Filtering featured products
  const featuredProducts = products.filter((prod) => prod.attributes.featured === true);

  return (
    <div className='flex item-center p-2'>
      {/* Mapping through featured products */}
      {featuredProducts.map((prod, index) => (
        <div key={index} className='m-2 p-2'>
          <img src={prod.attributes.image} alt={prod.attributes.title} />
          <h3>{prod.attributes.title}</h3>
          <p>${prod.attributes.price / 100}</p>
        </div>
      ))}
    </div>
  );
}

export default Featured;
