import React from "react";

const TodoText = ({ todo }) => {
  return (
    <span
      className={`text-lg font-semibold ${
        todo.completed ? "line-through" : "text-black"
      }`}
    >
      {todo.text}
    </span>
  );
};

export default TodoText;
