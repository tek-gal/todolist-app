import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './types';
import { v4 as uuidv4 } from 'uuid';


const todoListReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        {
          ...payload,
          id: uuidv4(),
          date: new Date(),
          completed: false,
        },
      ];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== payload);
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    default:
      return state;
  }
};

export default todoListReducer;
