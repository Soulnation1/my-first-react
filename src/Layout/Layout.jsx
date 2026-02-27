import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

const Layout = () => {
  return (
    <div className=" grid grid-cols-10 w-screen h-screen ">
      <div className=" bg-[#1c1817] col-span-2  text-white h-screen">
        <Sidebar />
      </div>
      <div className="fixed left-64 right-0 bg-white shadow z-10">
        <Navbar />
        <div className=" h-[calc(100vh-4rem)] overflow-y-auto p-6 bg-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
