import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increaseQuantity, selectCartItems, reduceQuantity, removeItem } from './cartSlice';

export const CartSummary = ({changeQuantity = true, removeItems = true}) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <ul className="collection">
      {cartItems.length
        ? (
          cartItems.map(item => (
              <li className="collection-item avatar" key={item.id}>
                <div className="item-img">
                  <img src={item.img} alt={item.img} className=""/>
                </div>
                <div className="item-desc">
                  <span className="title">{item.title}</span>
                  <p>{item.desc}</p>
                  <p><b>Price: £{item.price}</b></p>
                  <p>
                    <b>Quantity: {item.quantity}</b>
                  </p>
                </div>
                <div className="item-add-remove">
                  {changeQuantity && (
                    <div className="add-remove">
                    <span><i className="material-icons" onClick={() => {
                      dispatch(reduceQuantity({ id: item.id }))
                    }}>remove</i></span>
                      <span><b>{item.quantity}</b></span>
                      <span><i className="material-icons" onClick={() => {
                        dispatch(increaseQuantity({ id: item.id }))
                      }}>add</i></span>
                    </div>
                  )}
                  {removeItems && (
                    <button className="waves-effect waves-light btn pink remove" onClick={() => {
                      dispatch(removeItem({ id: item.id }))
                    }}>Remove
                    </button>
                  )}
                </div>
              </li>
            )
          )
        ) : (
          <p>Items will appear here</p>
        )}
    </ul>
  )
}
