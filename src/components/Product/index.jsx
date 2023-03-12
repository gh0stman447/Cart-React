import React from 'react';
import Count from '../Count';
import "./style.scss"

const Product = () => {
  return (
    <section className='product'>
      <div className='product__img'>
        <img src='img/products/mac-pro.jpg' alt='' />
      </div>
      <div className='product__title'>Apple MacBook Air 13</div>
      <div className='product__count'>
        <Count/>
      </div>
      <div className='product__price'>190 000 руб.</div>
      <div className='product__controls'>
        <button type='button'>
          <img src='img/icons/delete.svg' alt='detele' />
        </button>
      </div>
    </section>
  );
};

export default Product;
