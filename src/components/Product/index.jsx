import React from 'react';
import formatPrice from '../../utils/priceFormatter';
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
        <Count
          changeValue={props.changeValue}
          id={props.id}
          increase={props.increase}
          decrease={props.decrease}
          count={props.count}
        />
        {/* onChangeCount={onChangeCount} */}
      </div>
      <div className='product__price'>{formatPrice(props.priceTotal)} руб.</div>
      <div className='product__controls'>
        <ButtonDelete id={props.id} onClickDeleteBtn={props.onClickDeleteBtn} />
      </div>
    </section>
  );
};

export default Product;
