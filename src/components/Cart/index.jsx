import React, { useState } from 'react';
import CartFooter from '../CartFooter';
import CartHeader from '../CartHeader';
import Product from '../Product';

import data from '../../data';

const Cart = () => {
    const [cart, setCart] = useState(data);
  const [inputValue, setInputValue] = useState(1);
  console.log(cart[0].priceTotal);
  const products = cart.map((product) => (
    <Product
      increase={increase}
      decrease={decrease}
      key={product.id}
      {...product}
      onClickDeleteBtn={onClickDeleteBtn}
      //   onChangeCount={onChangeCount}
    />
  ));

  function onClickDeleteBtn(id) {
    setCart((cart) => cart.filter((product) => product.id !== id));
  }

  function increase(id) {
    setCart((prev) =>
      prev.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: ++product.count,
            priceTotal: product.count++ * product.price,
          };
        }
        return product;
      }),
    );
  }

  function decrease(id) {
    setCart((prev) =>
      prev.map((product) => {
        if (product.id === id && product.count !== 0)
          return {
            ...product, 
            count: product.count - 1 > 0 ? --product.count : product.count ,
            priceTotal: product.count * product.price,
          };
        return product;
      }),
    );
  }
  //   function onChangeCount(event) {
  //     setInputValue(event.target.value);
  //   }
  return (
    <section className='cart'>
      <CartHeader />
      {products}
      <CartFooter />
    </section>
  );
};

export default Cart;
