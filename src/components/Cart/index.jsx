import React, { useState } from 'react';
import CartFooter from '../CartFooter';
import CartHeader from '../CartHeader';
import Product from '../Product';

import data from '../../data';

const Cart = () => {
  const [cart, setCart] = useState(data);
  const products = cart.map((product) => (
    <Product key={product.id} {...product} onClickDeleteBtn={onClickDeleteBtn} />
  ));

 function onClickDeleteBtn(id) {
    setCart(cart => cart.filter((product) => product.id !== id));
  };

  return (
    <section className='cart'>
      <CartHeader />
      {products}
      <CartFooter />
    </section>
  );
};

export default Cart;
