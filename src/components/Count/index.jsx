import React from 'react'
import './style.scss'

const Count = () => {
  return (
    <div className='count'>
          <div className='count__box'>
            <input type='number' className='count__input' min='1' max='100' value='1' />
          </div>
          <div className='count__controls'>
            <button type='button' className='count__up'>
              <img src='/img/icons/arrow-up.svg' alt='Увеличить' />
            </button>
            <button type='button' className='count__down'>
              <img src='/img/icons/arrow-down.svg' alt='Уменьшить' />
            </button>
          </div>
        </div>
  )
}

export default Count