import React from 'react';
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
    <li
        onClick = {onClick}
        class = {completed ? 'todo-list__item todo-list__item_completed' : 'todo-list__item'}
    >
        {text}
    </li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo;