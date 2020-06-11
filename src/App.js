import React from 'react';
import './App.css';
import Item from './components/Item/Item.js';

const App = () => {

  var todoValue = '';
  const handleChange = (e) => {
    todoValue = e.target.value;
  }

  const handleClick = () => {
    console.log(todoValue);
  }

  return (
  <div>
   <h1>To Do List</h1>
   <Item onChangeHandler={handleChange} onClickHandler={handleClick}/>
   </div>
  )
};

export default App;
