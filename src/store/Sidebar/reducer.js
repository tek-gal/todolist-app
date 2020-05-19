import { SELECT_LIST, ADD_LIST, REMOVE_LIST } from './types';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './types';
import { v4 as uuidv4 } from 'uuid';

// {
//   all: [
//     {
//       id,
//       name,
//       date,
//       selected,
//       todos,
//     }
//   ],
// }

export default (state = { all: [], current: null }, action) => {
  const { type, payload } = action;
  const { all, current } = state;

  switch (type) {
    case SELECT_LIST:
      return {
        ...state,
        all: all.map((list) => {
          list.selected = list.id === payload;
          return list;
        }),
        current: payload,
      };
    case ADD_TODO:
      return {
        ...state,
        all: all.map((list) => {
          if (list.selected) {
            list.todo.push({
              ...payload,
              id: uuidv4(),
              date: new Date(),
              completed: false,
            });
          }
          return list;
        })
      };
    case REMOVE_TODO:
      const:
      const currentList = all.find((l) => l.id === current);

      return {
        ...state,
        all: all.map((list) => {
          if (list.current) {
            list.todo.push({
              ...payload,
              id: uuidv4(),
              date: new Date(),
              completed: false,
            });
          }

          return list;
        })
      };
    case ADD_LIST:
      return {
        ...state,
        all: [...all, {
          id: uuidv4(),
          name: payload,
          date: new Date(),
          selected: false,
          todos: [],
        }],
      };
    case REMOVE_LIST:
      return {
        ...state,
        all: all.filter((list) => list.id !== payload)
      };
    default:
      return state;
  }
};
