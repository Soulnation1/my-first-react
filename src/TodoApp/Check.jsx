import TodoText from "./TodoText";

const Check = ({ todo, handleTodoCheck }) => {
  return (
    <div className="flex items-center gap-4 flex-1">
      <input
        checked={todo.completed}
        onChange={() => handleTodoCheck(todo.id)}
        type="checkbox"
        className="w-5 h-5 cursor-pointer rounded"
      />
      <TodoText todo={todo}/>
    </div>
  );
};
export default Check