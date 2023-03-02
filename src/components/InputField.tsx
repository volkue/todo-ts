import React, { useRef } from 'react';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>
  addNewTodo: (e:React.FormEvent) => void
}

const InputField:React.FC<Props> = ({todo, setTodo, addNewTodo}) => {
  const inputRef = useRef<HTMLInputElement>(null)
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