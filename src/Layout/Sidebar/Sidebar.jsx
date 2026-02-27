import { NavLink } from "react-router-dom";
const Navlinks = [
  {
    path: "./",
    name: "Home",
  },
  {
    path: "./about",
    name: "About",
  },
  {
    path: "./portfolio",
    name: "Portfolio",
  },
  {
    path: "./contact",
    name: "Contact",
  },
  {
    path: "./pages",
    name: "Pages",
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen  ">
      <div className=" h-[30%] flex justify-center items-center  ">
        <img
          src="/react-logo.png"
          alt=""
          className="h-[100px] w-[100px] rounded-full "
        />
      </div>
      <aside className="flex flex-col  px-2  m-4  ">
        {
        Navlinks.map((Navlink) => {
          return (
            <NavLink key={Navlink.path} to={Navlink.path} className={" flex p-3 shadow-xl hover:text-orange-500"} >
              {Navlink.name}
            </NavLink>
          );
        })}
      </aside>
    </div>
  );
};

export default Sidebar;
