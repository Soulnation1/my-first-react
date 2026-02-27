import {useState  } from "react";
import { Link } from "react-router-dom";
import SignUp from "../Forms/SignUp";
const buttons = 
  {label1: "Personal Profile",
  label2: "login",
  label3: "dashboard",
  label4: "longitude",
  };
//  className=" text-white px-4 shadow-sm rounded-md m-2 hover:bg-gray-500 transition hover:scale-105"
const Board = () => {
  const [isClicked, setIsClicked] = useState(null);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  return (
    <div className="rounded-md   relative bg-gray-400 flex flex-col w-[155px]">
      {Object.values(buttons).map((btn, index) => (
        <button
           value={isClicked}
     onClick={()=> setIsClicked((`${btn} button was clicked`))}

        key={index} className=" text-white px-4 shadow-sm rounded-md m-2 hover:bg-gray-500 transition hover:scale-105">
          {btn}
        </button>
      ))}
     <Link
     to="/SignUp"
     value={isClicked}
onClick={()=> setIsSignUpOpen((isSignUpOpen) => !isSignUpOpen)}     className=" text-white px-4 shadow-sm rounded-md m-2 hover:bg-gray-500 transition hover:scale-105">
       Sign Up <i className="fa-solid fa-angle-right ml-2"></i>
      </Link>
     {isSignUpOpen? <SignUp/> : null}
    </div>
  );
};

export default Board;
