import React from 'react';
import './Item.css';

const Item = ({name, enabled, onCheckBoxChanged }) => {    
    let checkboxChecked = '';
    let strikeTextClassName = '';
    if (!enabled) 
    {
        checkboxChecked = 'checked';
        strikeTextClassName = 'item-disabled';
    }
    return (
        <div className="item">
            <input type="checkbox" checked={checkboxChecked} onClick={onCheckBoxChanged} />
            <span className={strikeTextClassName}>{name}</span>
            <img src='' alt='edit' />
            <img src='' alt='delete' />
        </div>
    )
};

export default Item;
