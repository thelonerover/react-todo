import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form
                class='input'
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                <input
                    class='input__field'
                    ref={node => {
                        input = node
                    }}
                />
                <button class='input__btn' type="submit">Add</button>
            </form>
        </div>
    );
}

AddTodo = connect()(AddTodo);

export default AddTodo;
