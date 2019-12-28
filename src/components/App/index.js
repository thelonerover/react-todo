import React, { useEffect } from 'react';
import Footer from '../Footer'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'

function App() {
  return (
    <div class='container'>
      <AddTodo />
      <VisibleTodoList />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
