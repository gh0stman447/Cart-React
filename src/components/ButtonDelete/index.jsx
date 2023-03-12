import React from 'react';

const ButtonDelete = ({onClickDeleteBtn, id}) => {
  return (
    <button onClick={() => onClickDeleteBtn(id)} type='button'>
      <img src='img/icons/delete.svg' alt='detele' />
    </button>
  );
};

export default ButtonDelete;
