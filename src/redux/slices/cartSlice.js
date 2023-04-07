import { createSlice } from '@reduxjs/toolkit';
import data from '../../data';

const initialState = {
  cart: [...data],
  total: {
    count: data.reduce((acc, product) => acc + product.count, 0),
    price: data.reduce((acc, product) => acc + product.price, 0),
  },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increase: (state, action) => {
      //   state.cart = state.cart.map((product) => {
      //     if (product.id === action.payload) {
      //       return {
      //         ...product,
      //         count: ++product.count,
      //         priceTotal: product.count++ * product.price,
      //       };
      //     }
      //     return product;
      //   })
      for (const item of state.cart) {
        if (item.id === action.payload) {
          item.count += 1;
          item.priceTotal = item.count * item.price;
        }
      }
       state.total = computeTotal(state.cart)
    },
    decrease: (state, action) => {
      // state.cart = state.cart.map((product) => {
      //   if (product.id === action.payload && product.count !== 0)
      //     return {
      //       ...product,
      //       count: product.count - 1 > 0 ? --product.count : product.count,
      //       priceTotal: product.count * product.price,
      //     };
      //   return product;
      // });

      for (const item of state.cart) {
        if (item.id === action.payload && item.count > 1) {
          item.count -= 1;
          item.priceTotal = item.count * item.price;
        }
      }
      state.total = computeTotal(state.cart)
    },
    
    deleteProduct: (state, action) => {
      state.cart = state.cart.filter((product) => product.id !== action.payload);
      state.total = computeTotal(state.cart)
    },
    changeCount: (state, action) => {
      const { id, value } = action.payload;
      const product = state.cart.find((product) => product.id === id);
      if (!product || isNaN(+value)) {
        return;
      }
      product.count = +value;
      product.priceTotal = product.price * product.count;
    },
  },
});

const computeTotal = (data) => {
  return {
    count: data.reduce((acc, product) => acc + product.count, 0),
    price: data.reduce((acc, product) => acc + product.price * product.count, 0),
  };
};

export const { increase, decrease, deleteProduct, changeCount } = cartSlice.actions;

export default cartSlice.reducer;
