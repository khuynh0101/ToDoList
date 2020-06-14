import React, { useState } from 'react';
import './App.css';
import AddItem from './components/AddItem/AddItem.js';
import ListItems from './components/ListItems/ListItems.js';
import usePersistentState from './utils/usePersistentState.js';

const App = () => {
  const [todoItem, setToDoItem] = useState('');
  const [todoListItem, setToDoList] = usePersistentState('todos', []);

  let itemToAdd = '';
  const handleChange = (e) => {
    setToDoItem(e.target.value);
  };
  const handleAddItemClick = () => {
    if (todoItem.trim() !== '') {
      let newTodoItem = {
        isChecked: false,
        name: todoItem,
        isEditing: false,
      };
      let todoList = [...todoListItem, newTodoItem];
      setToDoList(todoList);      
    }
    setToDoItem('');
  };
  const handleCheckBoxChange = (index) => {
    const todoList = [...todoListItem];
    const todoItem = todoList[index];
    todoItem.isChecked = !todoItem.isChecked;
    if (todoItem.isChecked) {
      todoItem.isEditing = false;
    }
    setToDoList(todoList);
  };
  const handleEditButtonClick = (index) => {
    const todoList = [...todoListItem];
    const todoItem = todoList[index];
    todoItem.isEditing = true;
    setToDoList(todoList);
  };
  const handleItemChange = (index, event) => {
    const todoList = [...todoListItem];
    const todoItem = todoList[index];
    todoItem.name = event.target.value;
    setToDoList(todoList);
  };
  const handleEditFinishedClick = (index) => {
    const todoList = [...todoListItem];
    const todoItem = todoList[index];
    todoItem.isEditing = false;
    setToDoList(todoList);
  };
  const handleRemoveClick = (index) => {
    const todoList = [...todoListItem];
    todoList.splice(index,1);
    setToDoList(todoList);
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
        items={todoListItem}
        checkBoxChanged={handleCheckBoxChange}
        editClicked={handleEditButtonClick}
        itemChanged={handleItemChange}
        editFinishClicked={handleEditFinishedClick}
        removedClicked={handleRemoveClick}
      />
    </main>
  );
};

export default App;
