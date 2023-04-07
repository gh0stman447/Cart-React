import React from 'react';
import formatPrice from '../../utils/priceFormatter';
import ButtonDelete from '../ButtonDelete';
import Count from '../Count';
import './style.scss';

const Product = (props) => {
  console.log('render');
  return (
    <section className='product'>
      <div className='product__img'>
        <img src={`img/products/${props.img}`} alt='' />
      </div>
      <div className='product__title'>{props.title}</div>
      <div className='product__count'>
        <Count id={props.id} count={props.count} />
      </div>
      <div className='product__price'>{formatPrice(props.priceTotal)} руб.</div>
      <div className='product__controls'>
        <ButtonDelete id={props.id} />
      </div>
    </section>
  );
};

export default Product;
