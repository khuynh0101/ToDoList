import React, { useState } from 'react';
import './App.css';
import AddItem from './components/AddItem/AddItem.js';
import ListItems from './components/ListItems/ListItems.js';

const App = () => {
  const [todoItem, setToDoItem] = useState("");
  const [todoList, setToDoList] = useState([]);

  const handleChange = (e) => {
    setToDoItem(e.target.value);
  }
  const handleClick = () => {
    let newTodoItem = {
      enabled: false,
      name: todoItem
    }
    let todos = [...todoList, newTodoItem];
    setToDoList(todos);
    setToDoItem("");
  }
  const handleCheckBoxChange = (index) => {
    console.log(index);
  }
  return (
    <main>
      <h1>To Do List</h1>
      <AddItem value={todoItem} onChangeHandler={handleChange} onClickHandler={handleClick} />
      <ListItems items={todoList} checkBoxChanged={handleCheckBoxChange}  />
    </main>
  )
};

export default App;
