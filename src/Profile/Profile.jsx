import React, { useState } from "react";
import Board from "./Board";

const Profile = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="bg-gray-100 flex flex-col h-[70px] p-4 rounded-lg shadow ">
      <div>
        <button
          onClick={() => setIsProfileOpen((isProfileOpen) => !isProfileOpen)}
          className=" bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          <i className="fa-solid fa-circle-user mr-2"></i> Profile{" "}
          <i class="fa-solid fa-angle-down ml-4"></i>
        </button>
        {isProfileOpen? <Board /> : null }
      </div>
    </div>
  );
};

export default Profile;
