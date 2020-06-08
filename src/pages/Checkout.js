import React, { useState } from 'react';

import { CartSummary } from '../features/cart/CartSummary';
import CartTotal from '../features/cart/CartTotal';
import { useSelector } from 'react-redux';
import { selectTotalCartItems } from '../features/cart/cartSlice';
import CartShipping from '../features/cart/CartShipping';
import YourDetails from '../features/checkout/YourDetails';
import Address from '../features/checkout/Address';
import {
  sectionsValid,
  selectAddress,
  selectShippingAddress,
  updateAddress,
  updateShippingAddress,
  selectUser
} from '../features/checkout/checkoutSlice';

const Checkout = () => {
  const cartCount = useSelector(selectTotalCartItems);
  const userDetails = useSelector(selectUser);
  const disablePayBtn = useSelector(sectionsValid);
  const userAddress = useSelector(selectAddress);
  const shippingAddress = useSelector(selectShippingAddress);

  return (
    <div className="container">
      <h1>Checkout</h1>
      <br/>
      {cartCount > 0 ? (
        <div className="checkout">
          <div className="checkout-form">
            <YourDetails userDetails={userDetails}/>
            <br/>
            <Address showShipping={true} address={userAddress} handleSave={updateAddress}/>
            <br/>
            {!userAddress.useAsShipping && (
              <Address subTitle="Shipping" showShipping={false} address={shippingAddress}  handleSave={updateShippingAddress } />
            )}
          </div>
          <div className="checkout-summary">
            <div>
              <h3>Order Summary</h3>
              <CartSummary changeQuantity={false} removeItems={false}/>
              <CartShipping/>
              <CartTotal/>
              <button className="waves-effect waves-light btn" disabled={!disablePayBtn}>Pay</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  )
}

export default Checkout
