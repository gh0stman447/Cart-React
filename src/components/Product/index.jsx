import React from 'react';
import ButtonDelete from '../ButtonDelete';
import Count from '../Count';
import './style.scss';

const Product = (props) => {
  return (
    <section className='product'>
      <div className='product__img'>
        <img src={`img/products/${props.img}`} alt='' />
      </div>
      <div className='product__title'>{props.title}</div>
      <div className='product__count'>
        <Count />
      </div>
      <div className='product__price'>{props.price}</div>
      <div className='product__controls'>
        <ButtonDelete id={props.id} onClickDeleteBtn={props.onClickDeleteBtn} />
      </div>
    </section>
  );
};

export default Product;
