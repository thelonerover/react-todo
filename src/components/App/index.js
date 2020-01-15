import React, { useEffect } from "react";
import Filter from "../Filter"
import Input from "../../containers/Input"
import VisibleTodoList from "../../containers/VisibleTodoList"
import RemoveCompletedLink from "../../containers/RemoveCompletedLink"

function App() {
  return (
    <div className="container">
      <Input />
      <Filter />
      <VisibleTodoList />
      <RemoveCompletedLink />
    </div>
  );
}

export default App;
