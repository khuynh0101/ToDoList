import React from "react";
import "./AddItem.css";
import isEnterKey  from '../../../src/utils/helpers.js';

const AddItem = ({ value, onChangeHandler, onClickHandler }) => {
  return (
    <div className='additem'>
      <div className='additem-content'>
        <input
          placeholder='Enter a todo item'
          value={value}
          type='text'
          onChange={onChangeHandler}
          onKeyDown={(event)=>isEnterKey(event, onClickHandler)}
        />{" "}
      </div>
      <button className='additem-button' type='button' onClick={onClickHandler}>
        Add
      </button>
    </div>
  );
}; 

export default AddItem;
