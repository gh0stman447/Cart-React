import React from 'react';
import CartFooter from '../CartFooter';
import CartHeader from '../CartHeader';
import Product from '../Product';

import { useSelector } from 'react-redux';

const Cart = () => {
  console.log('перерисовка');
  const cart = useSelector((state) => state.cart.cart);
  const products = cart.map((product) => <Product key={product.id} {...product} />);
  return (
    <section className='cart'>
      <CartHeader />
      {products}
      <CartFooter />
    </section>
  );
};

export default Cart;
