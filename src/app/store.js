import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/cart/cartSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer
  },
});

export default store;

