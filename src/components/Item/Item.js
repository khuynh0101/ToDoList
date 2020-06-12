import React from 'react';
import './Item.css';

const Item = ({value, onChangeHandler, onClickHandler}) => {  
  return ( 
    <div className="item">
      <div className="item-content"><input placeholder="Enter a todo item" value={value} type="text" onChange={onChangeHandler} /> </div>
      <button type="button" onClick={onClickHandler}>
        Add Item
      </button>
    </div>
  )
};

export default Item;
