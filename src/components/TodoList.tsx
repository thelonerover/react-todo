import React from 'react';
import Todo from './Todo';

interface TodoListProps {
    todos: React.ReactNode[],
    toggleTodo: () => void,
};

const TodoList = ({ todos, toggleTodo }: TodoListProps) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))}
    </ul>
);

export default TodoList;