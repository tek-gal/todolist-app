import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './types';


export default {
  addTodo: (title, currentList) => ({
    type: ADD_TODO,
    payload: { title, currentList },
  }),
  removeTodo: (id) => ({
    type: REMOVE_TODO,
    payload: id,
  }),
  toggleTodo: (id) => ({
    type: TOGGLE_TODO,
    payload: id,
  }),
};
