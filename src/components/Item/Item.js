import React from 'react';
import './Item.css';

const Item = ({onChangeHandler, onClickHandler}) => {
  return ( 
    <div className="item">
      <div className="item-content">Enter an item</div>
      <div className="item-content"><input type="text" onChange={onChangeHandler} /> </div>
      <button type="button" onClick={onClickHandler}>
        Add Item
      </button>
    </div>
  )
};

export default Item;
