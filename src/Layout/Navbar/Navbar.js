import { Link } from "react-router-dom";
const items = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "TodoApp",
    path: "/todoApp",
  },
  {
    name: "Calculator",
    path: "/Kalculator",
  },
];
const Navbar = () => {
  return (
    <div className="flex mt-10 mx-10 p-5 text-[#949799]    justify-end font-semibold gap-3 border-[#f0f0f2]  ">
      <nav>
        <div className="flex gap-4 ">
          {items.map((item) => {
            return (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-orange-500"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
