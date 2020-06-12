import React from 'react';
import './ListItems.css';
import Item from './Item.js'

const ListItems = ({ items, checkBoxChanged }) => {
  return (
    <div className="items">
      {
        items.map((item, index) => {
          return (
            <Item name={item.name} enabled={item.enabled} onCheckBoxChanged={()=>checkBoxChanged(index)}/>
          )
        })
      }
    </div>
  )
};

export default ListItems;
