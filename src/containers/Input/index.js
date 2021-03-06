import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions";

let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <form
            className="input"
            onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return;
                }
                dispatch(addTodo(input.value))
                input.value = ""
            }}
        >
            <input
                className="input__field"
                ref={node => {
                    input = node
                }}
            />
            <button className="input__btn" type="submit">Add</button>
        </form>
    );
}

AddTodo = connect()(AddTodo);

export default AddTodo;
