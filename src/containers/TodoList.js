import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';
import TodoListActions from '../../store/TodoList/actions';

const mapStateToProps = ({ lists }) => {
  const { all, current } = this.lists;

  if (!current) {
    return { todos: [] };
  }

  return {
    todos: all.find(({ id }) => id === current).todos,
  };
};
const mapDispatchToProps = {
  removeTodo: TodoListActions.removeTodo,
  toggleTodo: TodoListActions.toggleTodo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
