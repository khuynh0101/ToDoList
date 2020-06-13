import React from 'react';
import './Item.css';

const Item = ({
  name,
  isChecked,
  isEditing,
  onCheckBoxChanged,
  onEditButtonClicked,
  onItemChanged,
  onEditFinishClicked,
  onRemoveButtonClicked,
}) => {
  let checkboxChecked = '';
  let strikeTextClassName = '';
  if (isChecked) {
    checkboxChecked = 'checked';
    strikeTextClassName = 'item-disabled';
  }

  const handleEnterKeyPressed = (event) => {   
    if (event.keyCode === 13) {
      onEditFinishClicked();
    }
  };

  return (
    <div className='item'>
      <input
        type='checkbox'
        checked={checkboxChecked}
        onChange={onCheckBoxChanged}
      />
      {isEditing && (
        <>
          <input
            type='text'
            value={name}
            onChange={onItemChanged}
            onKeyDown={handleEnterKeyPressed}
          />
          <button className='item-button' onClick={onEditFinishClicked}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 0 24 24'
              width='24'
            >
              <path d='M0 0h24v24H0V0z' fill='none' />
              <path d='M19.77 4.93l1.4 1.4L8.43 19.07l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 4.93m0-2.83L8.43 13.44l-4.2-4.2L0 13.47l8.43 8.43L24 6.33 19.77 2.1z' />
            </svg>
          </button>
        </>
      )}
      {!isEditing && (
        <>
          <span className={strikeTextClassName}>{name}</span>
          <button
            disabled={isChecked}
            className='item-button'
            onClick={onEditButtonClicked}
          >
            <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24'>
              <path d='M0 0h24v24H0V0z' fill='none' />
              <path d='M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z' />
            </svg>
          </button>
        </>
      )}

      <button className='item-button' onClick={onRemoveButtonClicked}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24'
          viewBox='0 0 24 24'
          width='24'
        >
          <path d='M0 0h24v24H0V0z' fill='none' />
          <path d='M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z' />
        </svg>
      </button>
    </div>
  );
};

export default Item;
