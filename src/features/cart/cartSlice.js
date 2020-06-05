import { createSlice } from '@reduxjs/toolkit';

const initState = {
  products: [
    {
      id: 1,
      title: 'Great Trainers',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: 'https://images.unsplash.com/photo-1534206303345-04c4c6d95cce?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=280'
    },
    {
      id: 2,
      title: 'Adidas',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: 'https://images.unsplash.com/photo-1519976691384-bd9c1d4a95fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=280'
    },
    {
      id: 3,
      title: 'Reds',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: 'https://images.unsplash.com/photo-1542665889681-5fd1eb5c9f5b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=280'
    },
    {
      id: 4,
      title: 'Nikey',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=280'
    },
    {
      id: 5,
      title: 'White Trainers',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: 'https://images.unsplash.com/photo-1543908753-04c7ebbecc21?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=280'
    },
    {
      id: 6,
      title: 'Tip Top',
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: 'https://images.unsplash.com/photo-1542818212-9899bafcb9db?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=280&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=280'
    }
  ],
  addedItems: [],
  total: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initState,
  reducers: {
    addItem(state, action) {
      console.log(action);
      const { id } = action.payload;
      let item = state.products.find(item => item.id === id);
      let existed_item = state.addedItems.find(item => id === item.id);
      if (existed_item) {
        existed_item.quantity += 1;
      } else {
        const itemToAdd = { quantity: 1, ...item }
        state.addedItems.push(itemToAdd);
      }
      state.total += item.price
    },
    removeItem(state, action) {
      const { id } = action.payload;
      let itemToRemove = state.addedItems.find(item => id === item.id)
      state.total -= (itemToRemove.price * itemToRemove.quantity);
      state.addedItems = state.addedItems.filter(item => id !== item.id)
    },
    increaseQuantity(state, action) {
      const { id } = action.payload;
      let addedItem = state.addedItems.find(item => item.id === id);
      addedItem.quantity += 1;
      state.total += addedItem.price;
    },
    reduceQuantity(state, action) {
      const { id } = action.payload;
      let addedItem = state.addedItems.find(item => item.id === id);
      if (addedItem.quantity === 1) {
        state.addedItems = state.addedItems.filter(item => item.id !== id);
      } else {
        addedItem.quantity -= 1;
        state.total -= addedItem.price;
      }
    },
    addShipping(state, action) {
      state.total += 6;
    },
    removeShipping(state, action) {
      state.total -= 6;
    }
  }
})

export const { addItem, removeItem, increaseQuantity, reduceQuantity, addShipping, removeShipping } = cartSlice.actions;

export const cartItems = state => state.cart.addedItems;
export const products = state => state.cart.products;
export const cartTotal = state => state.cart.total;
export const totalItems = state => state.cart.addedItems.reduce((acc, item) => acc + item.quantity, 0);

export default cartSlice.reducer;
