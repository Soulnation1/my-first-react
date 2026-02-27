import { useState } from "react";
const ActiveButtons = [
  { label: "small", id : "btn1" },
  { label: "medium", id : "btn2" },
  { label: "large", id : "btn3" },
  { label: "x-large", id : "btn4" },
]
const SelectionApp = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  return (
    <div>
      <div className="flex justify-center items-center"><h1>Selection App</h1></div>
      {ActiveButtons.map((Activebtn) => (
        <button
        className={`bg-green-500 p-2 m-2 ${selectedButton === Activebtn.id ? 'bg-red-500' : 'bg-gray-500'}`}
        onClick={()=> setSelectedButton(Activebtn.id)}
        key={Activebtn.id}>{Activebtn.label}</button>
      ))}
    <h1
    className={`font-bold text-2xl m-4  `}
    >{selectedButton}</h1>
    </div>
  )
}

export default SelectionApp