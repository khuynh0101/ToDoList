import React from "react";
import "./AddItem.css";

const AddItem = ({ value, onChangeHandler, onClickHandler }) => {
  return (
    <div className='additem'>
      <div className='additem-content'>
        <input
          placeholder='Enter a todo item'
          value={value}
          type='text'
          onChange={onChangeHandler}
        />{" "}
      </div>
      <button className='additem-button' type='button' onClick={onClickHandler}>
        Add Item
      </button>
    </div>
  );
};

export default AddItem;
