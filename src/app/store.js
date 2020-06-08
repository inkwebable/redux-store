import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/cart/cartSlice';
import checkoutReducer from '../features/checkout/checkoutSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
  },
});

export default store;

