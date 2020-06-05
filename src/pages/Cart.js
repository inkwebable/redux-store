import React from 'react';

import { CartSummary } from '../features/cart/CartSummary';
import CartTotal from '../features/cart/CartTotal';
import { useSelector } from 'react-redux';
import { totalItems } from '../features/cart/cartSlice';

const Cart = () => {
  const basketCount = useSelector(totalItems);

  return (
    <>
      <div className="container">
        {basketCount > 0 ? (
          <div className="cart">
            <h5>You have ordered:</h5>
            <CartSummary/>
            <CartTotal/>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

    </>
  )
}

export default Cart
