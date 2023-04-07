import React from 'react';
import './style.scss';
import { increase, decrease, changeCount } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
const Count = ({ count, id }) => {
  
  const dispatch = useDispatch();
  function changeValue(value, id) {
    dispatch(changeCount({ value, id }));
  }
  return (
    <div className='count'>
      <div className='count__box'>
        <input
          onChange={(e) => changeValue(+e.target.value, id)}
          type='number'
          className='count__input'
          min='1'
          max='100'
          value={`${count}`}
        />
      </div>
      <div className='count__controls'>
        <button type='button' className='count__up'>
          <img
            onClick={() => dispatch(increase(id))}
            src='/img/icons/arrow-up.svg'
            alt='Увеличить'
          />
        </button>
        <button type='button' className='count__down'>
          <img
            onClick={() => dispatch(decrease(id))}
            src='/img/icons/arrow-down.svg'
            alt='Уменьшить'
          />
        </button>
      </div>
    </div>
  );
};

export default Count;
