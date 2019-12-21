import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import rootReducer from './reducers';
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions';

const store = createStore(rootReducer);

console.log(store.getState); 

const unsubscribe = store.subscribe(() => console.log(store.getState()));

// store.dispatch(addTodo('Learn about actions'));
// store.dispatch(addTodo('Learn about reducers'));
// store.dispatch(addTodo('Learn about store'));
// store.dispatch(toggleTodo(0));
// store.dispatch(toggleTodo(1));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();

render(
    <div>123123</div>
    , document.getElementById('root')
);

serviceWorker.register();
