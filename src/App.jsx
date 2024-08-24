import React, { useState } from "react";

function App() {
  // state defined
  const [todoForToday, setTodoForToday] = React.useState({
    title: "Go to gym",
    description: "Go eat something",
    id: 1
  });
  // updation 
  setInterval(() => {
    setTodoForToday({
      title: "Go to gym please",
      description: "Go eat something helthy",
      id: 1
    })
  }, 1000);
  // Rendering
  return (
    <div>
      <RenderTodo todoForToday={todoForToday}></RenderTodo>
    </div>
  )
}
function RenderTodo(props) {
  return <div>
    {props.todoForToday.title}
    <br />
    {props.todoForToday.description}
  </div>
}

export default App;
