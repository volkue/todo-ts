import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoItem from './components/TodoItem';
import { Todo } from './model';

const App:React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  
  const addNewTodo = (e:React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([ ...todos,
        {
          id:Date.now(),
          item:todo,
          isDone:false
        }]
      )
    }
    setTodo("")    
  }
  console.log(todos)
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo = {setTodo} addNewTodo= {addNewTodo}/>
      <div className='list__container'>
      {
        todos.map(todo => <TodoItem todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>)
      }
      </div>
     
    </div>
  );
}

export default App;
