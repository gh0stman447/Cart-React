import React, { useEffect, useMemo, useState } from 'react';
import CartFooter from '../CartFooter';
import CartHeader from '../CartHeader';
import Product from '../Product';

import data from '../../data';

const Cart = () => {
  const [cart, setCart] = useState(data);
  const [inputValue, setInputValue] = useState(1);
  const [total, setTotal] = useState({
    count: cart.reduce((acc, product) => acc + product.count, 0),
    price: cart.reduce((acc, product) => acc + product.price, 0),
  });
  console.log(total);
  const products = cart.map((product) => (
    <Product
      changeValue={changeValue}
      increase={increase}
      decrease={decrease}
      key={product.id}
      {...product}
      onClickDeleteBtn={onClickDeleteBtn}
      //   onChangeCount={onChangeCount}
    />
  ));

  useEffect(
    () =>
      setTotal({
        count: cart.reduce((acc, product) => acc + product.count, 0),
        price: cart.reduce((acc, product) => acc + product.count * product.price, 0),
      }),
    [cart],
  );
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
            count: product.count - 1 > 0 ? --product.count : product.count,
            priceTotal: product.count * product.price,
          };
        return product;
      }),
    );
  }
  //   function onChangeCount(event) {
  //     setInputValue(event.target.value);
  //   }

  function changeValue(value, id) {
    setCart((prev) =>
      prev.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price,
          };
        }
        return product;
      }),
    );
  }
  return (
    <section className='cart'>
      <CartHeader />
      {products}
      <CartFooter total={total} />
    </section>
  );
};

export default Cart;
