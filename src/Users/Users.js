

import { useEffect, useState } from "react";

const Users = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users);
    }
    getUsers();
  }, []);

  return (
    <ul className="grid grid-cols-3  gap-6 p-6 mb-20">
      {Users.map((User) => (
        <li
          key={User.id}
          className="p-8 border-2 rounded-xl text-center"
        >
          <img
            src={User.image}
            alt={User.firstName}
            className="mx-auto h-20"
          />

          <h3 className="font-semibold text-xl">
            {User.firstName} {User.lastName}
          </h3>

          <p className="text-sm text-gray-500 ">{User.email}</p>
          <p className="text-sm text-gray-500">{User.phone}</p>
        </li>
      ))}
    </ul>
  );
};

export default Users;
