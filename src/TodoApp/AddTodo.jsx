import React from 'react'

const AddTodos = ({inputTodo, setInputTodo,setHoveredAddButton,hoveredAddButton,handleAddTodo}) => {
  return (
     <div className="flex gap-4 ">
        <input
          type="text"
          value={inputTodo}
          onChange={(e) => {
            setInputTodo(e.target.value);
          }}
          className="bg-white px-2 rounded-md shadow-2 "
        />
        <button
          onClick={handleAddTodo}
          onMouseEnter={() => setHoveredAddButton(true)}
          onMouseLeave={() => setHoveredAddButton(null)}
          className="px-3 py-2 bg-green-500 rounded-md font-bold hover:bg-green-600 text-white hover:scale-105 transition"
        >
          Add Todo
        </button>
        <span
          className={` ${hoveredAddButton ? "block" : "hidden"} absolute  rounded-md px-2 bg-black text-white  text-md ml-[150px] mt-[-40PX] px-4 `}
        >
          click the button to add Todo
        </span>
      </div>
  )
}

export default AddTodos