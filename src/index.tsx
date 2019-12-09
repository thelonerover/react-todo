import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';
import App from './components/App/App';

import { addTodo } from './actions';


// const store = createStore(rootReducer);

render(
    <div>123123</div>
    // <Provider store={store}>
    //     <App />
    // </Provider>
    , document.getElementById('root')
);

serviceWorker.register();
