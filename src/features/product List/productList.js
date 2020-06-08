import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem, selectCartItems, selectProducts } from '../cart/cartSlice';

export const ProductList = () => {
  const shopProducts = useSelector(selectProducts);
  const itemsInCart = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(addItem({ id }));
  }

  const inCart = (id) => {
    const inCart = itemsInCart.filter(item => item.id === id).length;
    return inCart === 0 ? <> Add<i className="material-icons">add</i></> : <>Added</>;
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
                }}>{inCart(item.id)}</span>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}
