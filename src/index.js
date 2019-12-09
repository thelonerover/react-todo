import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import rootReducer from './reducers';

const store = createStore(rootReducer);

// import {
//     addTodo,
//     toggleTodo,
//     setVisibilityFilter,
//     VisibilityFilters
// } from './actions';

console.log(store.getState());

render(
    <div>123123</div>
    , document.getElementById('root')
);

serviceWorker.register();
