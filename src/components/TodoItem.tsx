import React, { useState, useRef, useEffect } from 'react';
import { Todo } from '../model';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { MdDoneOutline } from 'react-icons/md';
import { TodoState } from '../context/Context';

interface Props {
  todo: Todo;  
}

const TodoItem: React.FC<Props> = ({todo}) => {
  const {id, item, isDone} = todo
  const { dispatch} = TodoState();  
  
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [edit, setEdit] = useState<string>(item); 
 
  const handleDone = (id : number) => {
    dispatch(
      {
        type: "DONE",
        payload: id
      }
    )    
  }

  const handleDelete = (id : number) => {
    dispatch(
      {
        type: "REMOVE",
        payload: id
      }
    )      
  };

  const handleSubmit = (e:React.FormEvent, id : number) => {
    e.preventDefault();
    dispatch(
      {
        type: "EDIT",
        payload: {id : id, item: edit}
      }
    )
    setIsEdit(false);
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();    
  }, [isEdit])
  
  return (   
    
      <form className='todo__item' onSubmit={(e) => handleSubmit(e, id)} key={id}>
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
