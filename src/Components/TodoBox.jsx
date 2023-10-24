import { useState } from "react";
import React from "react";
import '../Components/ModuleTodo.css';

function TodoBox({ addTodo, }) {
  const [value, setValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <div className="TodoBox">
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="inputTodo"
          value={value}
          placeholder="What is the task fot today?"
          onChange={(e) => setValue(e.target.value)}
          style={{ width: "400px", height: "60px", borderRadius: "10px", backgroundColor:'#3b3939', color:'white', border:'1px solid blue' }}
        />
        <span> </span>
        <button
          type="submit"
          className="buttonTodo"
          style={{ marginLeft: "40px" }}
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TodoBox;
