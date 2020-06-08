import React from 'react';

import { ProductList } from '../features/product List/productList';

const Home = () => {
  return (
    <div className="container">
      <h1 className="center">Products</h1>
      <div className="order-list">
        <ProductList />
      </div>
    </div>
  )
}

export default Home;
