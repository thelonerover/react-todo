import React from "react";
import { connect } from 'react-redux';
import Filter from "../Filter"
import Input from "../../containers/Input"
import VisibleTodoList from "../../containers/VisibleTodoList"
import RemoveCompletedLink from "../../containers/RemoveCompletedLink"

function App({ hasTodos, hasCompleted }) {
  console.log(hasTodos);
    return (
      <div className="container">
        <Input />
        {hasTodos && 
          [<Filter />,
          <VisibleTodoList />]
        }
        {hasCompleted && <RemoveCompletedLink />}
      </div>
    )
}

const hasCompletedTodos = todos => {
  for (let todo of todos ) {
    if (todo.completed) {
      return true;
    }
  }
  return false;
}

const mapStateToProps = state => ({
  hasTodos: state.todos.length > 0,
  hasCompleted: hasCompletedTodos(state.todos)
});

export default connect(mapStateToProps)(App);
