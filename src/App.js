import React, { useState } from 'react';
import './App.css';
import AddItem from './components/AddItem/AddItem.js';
import ListItems from './components/ListItems/ListItems.js';

const App = () => {
  const [todoItem, setToDoItem] = useState('');
  const [todoList, setToDoList] = useState([]);

  const handleChange = (e) => {
    setToDoItem(e.target.value);
  };
  const handleAddItemClick = () => {
    if (todoItem !== '') {
      let newTodoItem = {
        isChecked: false,
        name: todoItem,
        isEditing: false,
      };
      let todos = [...todoList, newTodoItem];
      setToDoList(todos);
      setToDoItem('');
    }
  };
  const handleCheckBoxChange = (index) => {
    const todoItemList = [...todoList];
    const todoItem = todoItemList[index];
    todoItem.isChecked = !todoItem.isChecked;
    if (todoItem.isChecked) {
      todoItem.isEditing = false;
    }
    // todoItemList[index].enabled = !todoItemList[index].enabled;
    setToDoList(todoItemList);
  };
  const handleEditButtonClicked = (index) => {
    const todoListItem = [...todoList];
    const todoItem = todoListItem[index];
    todoItem.isEditing = true;
    setToDoList(todoListItem);
  };
  return (
    <main>
      <h1>To Do List</h1>
      <AddItem
        value={todoItem}
        onChangeHandler={handleChange}
        onClickHandler={handleAddItemClick}
      />
      <ListItems
        items={todoList}
        checkBoxChanged={handleCheckBoxChange}
        editButtonClicked={handleEditButtonClicked}
      />
    </main>
  );
};

export default App;
