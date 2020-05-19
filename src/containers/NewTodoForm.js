import { connect } from 'react-redux';
import NewTodoForm from '.././components/NewTodoForm';
import TodoListActions from '.././store/TodoList/actions';

const mapStateToProps = ({ lists }) => ({
  currentList: lists.current,
})
const mapDispatchToProps = {
  addTodo: TodoListActions.addTodo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTodoForm);
