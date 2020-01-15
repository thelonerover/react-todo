export const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO": 
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case "TOGGLE_TODO": 
            return state.map(todo => 
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        case "REMOVE_COMPLETED_TODOS": 
                return state.filter(todo => !todo.completed );
        default: 
            return state;
    }
}

export default todos;
