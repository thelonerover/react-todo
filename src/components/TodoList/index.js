import React from "react";
import Todo from "../Todo";
import PropTypes from "prop-types"

const TodoList = ({ todos, onTodoClick }) => (
    <ul class="todo-list">
        {todos.map((todo) => (
            <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList;