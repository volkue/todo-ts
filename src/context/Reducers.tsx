import { Actions, Todo } from "../model";


export const TodoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id:Date.now(),
          item: action.payload,
          isDone:false
        }
      ];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);
    case "DONE":
      return state.map(
        todo => todo.id === action.payload ? 
        {...todo, isDone: !todo.isDone} 
        : todo
      );
    case "EDIT" :
      return  state.map(
        todo => todo.id === action.payload.id ? 
        {...todo, item: action.payload.item} 
        : todo
      )
    default:
      return state;
  }
}