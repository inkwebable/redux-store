import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem, products } from '../cart/cartSlice';

export const ProductList = () => {
  const shopProducts = useSelector(products);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(addItem({ id }));
  }

  return (
    <>
      {
        shopProducts.map(item => (
          <div className="card" key={item.id}>
            <div className="card-image">
              <img src={item.img} alt={item.title}/>
              <span className="card-title">{item.title}</span>
            </div>
            <div className="card-content">
              <p>{item.desc}</p>
              <br/>
              <div className="order">
                <p><b>Price: £{item.price}</b></p>
                <span to="/" className="btn waves-effect waves-light" onClick={() => {
                  handleClick(item.id)
                }}>Add <i className="material-icons">add</i></span>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}
