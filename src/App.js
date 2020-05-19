import React from 'react';
import Sidebar from './containers/Sidebar';
import NewTodoForm from './containers/NewTodoForm';
import TodoList from './containers/TodoList';


function App() {
  return (
    <div className="container-flex">
      <div className="row">
        <div className="col-sm-4">
          <Sidebar />
        </div>
        <div className="col-sm-6 pt-4">
          <NewTodoForm />
          <hr/>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
