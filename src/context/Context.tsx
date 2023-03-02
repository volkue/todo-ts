import React, { createContext, useContext, useReducer } from 'react';
import { Actions, Todo } from '../model';
import { TodoReducer } from './Reducers';

interface AuxProps {
  children: React.ReactNode;
}

const TodoContext = createContext<{
  state: Todo[];
  dispatch: React.Dispatch<Actions>;
}>({
  state: [],
  dispatch: () => null
});

const Context = ({children}: AuxProps) => {
  const [state, dispatch] = useReducer(TodoReducer, [])
  return (
    <TodoContext.Provider value={{state, dispatch}}>
      {children}
    </TodoContext.Provider>
  )
}

export default Context;

export const TodoState = () => {
  return useContext(TodoContext)
}