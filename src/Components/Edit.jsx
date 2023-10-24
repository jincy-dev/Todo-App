import { useState } from "react";
import React from "react";

function EditTodo({ editTodo, task }) {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <div className="TodoBox">
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="inputTodo"
          value={value}
          placeholder="Update the task!"
          onChange={(e) => setValue(e.target.value)}
          style={{ width: "400px", height: "60px", borderRadius: "10px" }}
        />
        <span> </span>
        <button
          type="submit"
          className="buttonTodo"
          style={{ marginLeft: "40px" }}
        >
          Update Task
        </button>
      </form>
    </div>
  );
}

export default EditTodo;
