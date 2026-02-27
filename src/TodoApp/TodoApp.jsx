import { useState, useEffect } from "react";
import AddTodos from "./AddTodo";
import Check from "./Check";

const TodoApp = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [hoveredTodoId, setHoveredTodoId] = useState(null);
  const [hoveredAddButton, setHoveredAddButton] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem("todos");
    if (savedData) {
      setTodos(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleAddTodo = () => {
    if (inputTodo.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputTodo,
        completed: false,
      };

      setTodos([...todos, newTodo]);
      setInputTodo("");
    }
  };
  const DeleteTodo = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };
  const handleTodoCheck = (id) => {
    const checkedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );

    setTodos(checkedTodos);
  };

  return (
    <div className="flex flex-col rounded-lg  items-center bg-[#bac6b4] min-h-screen  mb-[100px] ">
      <div className="flex  justify-center mt-5 mb-20 underline font-bold text-2xl items-center text-black">
        <h1>To-do List</h1>
      </div>
      <AddTodos
        handleAddTodo={handleAddTodo}
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
        setHoveredAddButton={setHoveredAddButton}
        hoveredAddButton={hoveredAddButton}
      />
      <div
        className={`w-[95%] gap-20  mt-5 mb-[100px] bg-[#dde2f7] rounded-xl px-8 ${todos.length === 0 ? "w-[50%] mt-20 justify-center items-center flex block" : ""}`}
      >
        {todos.length === 0 ? (
          <h1 className="text-red-500 font-bold p-4 text-xl m-10">
            Add atleast one todo....
          </h1>
        ) : (
          <ol className=" flex flex-col  py-4  gap-8  ">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex gap-4 w-full px-6  py-3 bg-white rounded-lg shadow-md  hover:scale-105 transition"
              >
                <Check todo={todo} handleTodoCheck={handleTodoCheck} />

                <div>
                  <button
                    onClick={() => DeleteTodo(todo.id)}
                    onMouseEnter={() => setHoveredTodoId(todo.id)}
                    onMouseLeave={() => setHoveredTodoId(null)}
                    className="flex items-center justify-center  px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 "
                  >
                    <i className="fa-solid fa-trash text-sm"></i>
                  </button>
                  <span
                    className={`${hoveredTodoId === todo.id ? "block" : "hidden"} absolute block rounded-md px-2  bg-black text-white  mt-[-80px] ml-[-130px] text-sm`}
                  >
                    click the button to delete Todo
                  </span>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
