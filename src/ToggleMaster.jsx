import { useState } from "react";
const ToggleMaster = () => {
  const [toggleText, setToggleText] = useState("Offline🔴");
  const [inputLimit, setInputLimit] = useState({maxLength: 10});
  return (
    <div className="flex flex-col justify-center items-center  gap-3">
      <h1>Toggle Master</h1>
      <button
        onClick={() =>
          setToggleText(toggleText === "Offline🔴" ? "Online🟢" : "Offline🔴")
        }
        className="px-4 py-2 bg-blue-300 rounded-md shadow-lg hover:bg-blue-400 transition duration-300"
      >
        Toggle
      </button>
      <p>{toggleText}</p>

      <div className="text-center mt-4">
        <h1>Character counter</h1>
        <input
        value={inputLimit.maxLength}
        onChange={(e) => setInputLimit({...inputLimit, maxLength: e.target.value > 20 ? 20 : e.target.value})}
          className="border-2 border-gray-300 rounded-md p-2 w-full max-w-xs"
          type="text"
        />
      </div>
    </div>
  );
};

export default ToggleMaster;
