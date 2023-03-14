import React from 'react';
import './style.scss';
import formatPrice from '../../utils/priceFormatter';
const CartFooter = ({ total }) => {
  return (
    <footer className='cart-footer'>
      <div className='cart-footer__count'> {total.count} ед.</div>
      <div className='cart-footer__price'> {formatPrice(total.price)} руб.</div>
    </footer>
  );
};

export default CartFooter;
