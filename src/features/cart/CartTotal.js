import React from 'react'
import { selectCartTotal } from './cartSlice';
import { useSelector } from 'react-redux';

const CartTotal = ({totalPrepend = ''}) => {
  const total = useSelector(selectCartTotal);
  return (
    <>
      <div className="collection">
        <li className="collection-item"><b>{totalPrepend} Total: £{total}</b></li>
      </div>
    </>
  )
}

export default CartTotal;
