import { combineReducers } from 'redux';
import todoListReducer from './TodoList/reducer';
import sidebarReducer from './Sidebar/reducer';

const reducer = combineReducers({
  todos: todoListReducer,
  lists: sidebarReducer,
});

export default reducer;
