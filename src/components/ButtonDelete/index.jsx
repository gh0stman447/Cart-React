import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/slices/cartSlice';

const ButtonDelete = ({id}) => {
  const dispatch = useDispatch();
  const onClickDeleteBtn = (id) => {
    dispatch(deleteProduct(id))
  }
  return (
    <button onClick={() => onClickDeleteBtn(id)} type='button'>
      <img src='img/icons/delete.svg' alt='detele' />
    </button>
  );
};

export default ButtonDelete;
