import React, { useState, useReducer } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoItem from './components/TodoItem';
import { TodoState } from './context/Context';

const App:React.FC = () => {
  
  const {state} = TodoState();
  
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField/>
      <div className='list__container'>
      {
        state.map(todo => <TodoItem todo={todo} key={todo.id}/>)
      }
      </div>     
    </div>
  );
}

export default App;
