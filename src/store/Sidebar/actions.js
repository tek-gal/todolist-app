import { SELECT_LIST, ADD_LIST, REMOVE_LIST } from './types';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './types';


export default {
  selectList: (id) => ({
    type: SELECT_LIST,
    payload: id,
  }),
  addList: (name) => ({
    type: ADD_LIST,
    payload: name,
  }),
  removeList: (id) => ({
    type: REMOVE_LIST,
    payload: id,
  }),
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
