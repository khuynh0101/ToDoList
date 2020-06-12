import React, {useState} from 'react';
import './App.css';
import Item from './components/Item/Item.js';
import ListItem from './components/ListItem/ListItem.js';

const App = () => {
  const [todoItem, setToDoItem] = useState("");
  const [todoList, setToDoList] = useState([]);

  const handleChange = (e) => {
    setToDoItem(e.target.value);
  }
  const handleClick = () => {
    let todos = [...todoList];
    todos.push(todoItem);
    setToDoList(todos);
    setToDoItem("");
  }
  return (
  <div>
   <h1>To Do List</h1>
   <Item value={todoItem} onChangeHandler={handleChange} onClickHandler={handleClick}/>
   {
     todoList.map((name, index) => {
       return <div>{name} {index}</div>
     })
   }
   <ListItem items={todoList}/>
   </div>
  )
};

export default App;
