import React from "react";
import "./ListItems.css";
import Item from "./Item.js";

const ListItems = ({ items, checkBoxChanged, editButtonClicked }) => {
  if (items.length > 0)
    return (
      <div className='items'>
        {items.map((item, index) => {
          return (
            <Item
              key={index}
              name={item.name}
              isChecked={item.isChecked}
              isEditing={item.isEditing}
              onCheckBoxChanged={() => checkBoxChanged(index)}
              onEditButtonClicked={() => editButtonClicked(index)}
            />
          );
        })}
      </div>
    );
  return null;
};

export default ListItems;
