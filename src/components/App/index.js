import React, { useEffect } from "react";
import Filter from "../Filter"
import Input from "../../containers/Input"
import VisibleTodoList from "../../containers/VisibleTodoList"

function App() {
  return (
    <div class="container">
      <Input />
      <Filter />
      <VisibleTodoList />
    </div>
  );
}

export default App;
