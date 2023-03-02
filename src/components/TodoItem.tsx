import React, { useState, useRef, useEffect } from 'react';
import { Todo } from '../model';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { MdDoneOutline } from 'react-icons/md';

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const { item, isDone, id } = todo;  
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [edit, setEdit] = useState<string>(item);

  const handleDone = (id:number) => {
    setTodos(
      todos.map(
        todo => todo.id === id ? 
        {...todo, isDone: !todo.isDone} 
        : todo
      )
    )
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSubmit = (e:React.FormEvent, id:number) => {
    e.preventDefault();
    setTodos(
      todos.map(
        todo => todo.id === id ? 
        {...todo, item: edit} 
        : todo
      )
    )
    setIsEdit(false)
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();    
  }, [isEdit])
  
  return (
    <form className='todo__item' onSubmit={(e) => handleSubmit(e, id)}>
      {
        isEdit ? <input 
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
          ref={inputRef}
        /> 
        :isDone ? <s>{item}</s> : <span>{item}</span>
      }
    
       
     
      <span onClick={() =>  {if (!isEdit && !isDone) {
        setIsEdit(!isEdit)}
      }}>
        <FaRegEdit />
      </span>
      <span onClick={() => handleDelete(id)}>       
        <RiDeleteBin2Line />
      </span>

      <span onClick={() => {handleDone(id)}}>
        <MdDoneOutline />
      </span>
    </form>
  );
};

export default TodoItem;
