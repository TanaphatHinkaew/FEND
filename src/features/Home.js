import React, { useState } from 'react';

import data from 'C:/Users/tanap/FEND/React-main/src/app/data.js';
import Product from './product';
import AddForm from 'C:/Users/tanap/FEND/React-main/src/features/product/AddFrom.js';

let currentProductId = 9;

export default function Home() {
  const [products, setProducts] = useState(data);

  function addProduct(product) {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
  }

  return (
    <>
      <h1>New Products</h1>
      {products.length > 0 ? (
        <ul className="Home__products">
          {products.map((product) => (
            <Product key={product.id} item={product} />
          ))}
        </ul>
      ) : (
        <div>Loading products....</div>
      )}
      <AddForm addProduct={addProduct} />
    </>
  );
}