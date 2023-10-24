import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Todo from "./Todo";
import '../Components/ModuleTodo.css';

function TodoDetails({ task, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div
      className="TodoDetails">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div style={{ marginLeft: "200px" }}>
        <FontAwesomeIcon
          icon={faPenToSquare}
          style={{ marginRight: "10px" }}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
}

export default TodoDetails;
