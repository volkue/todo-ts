import React, { useRef, useState } from 'react';
import { TodoState } from '../context/Context';

const InputField:React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [todo, setTodo] = useState<string>("")
  const { dispatch} = TodoState();
 
  const addNewTodo = (e:React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      dispatch(
        {
          type: 'ADD',
          payload:todo
      })      
    }
    setTodo("");    
  }

  return (
    <form className='form' onSubmit={(e)=> {
      addNewTodo(e);
      inputRef.current?.blur();
    }}>
      <input 
        type="input" 
        value={todo}
        ref={inputRef}        
        onChange={(e)=> setTodo(e.target.value)}
        placeholder='Enter your task' 
        className='form__input'/>
      <button type='submit' className='form__button'>Ok</button>
    </form>
  )
}
export default InputField