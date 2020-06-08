import React from 'react';

import { CartSummary } from '../features/cart/CartSummary';
import CartTotal from '../features/cart/CartTotal';
import { useSelector } from 'react-redux';
import { selectTotalCartItems, selectCartItems } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartCount = useSelector(selectTotalCartItems);
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="container">
      <h1>Your cart</h1>
      {cartCount > 0 ? (
        <div className="cart">
          <h5>You have ordered:</h5>
          <CartSummary/>
          <CartTotal totalPrepend="Sub"/>
          {cartItems && cartItems.length > 0 && (
            <div style={{ marginTop: '20px'}}>
              <Link to="checkout">
                <button className="waves-effect waves-light btn">Checkout</button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  )
}

export default Cart
