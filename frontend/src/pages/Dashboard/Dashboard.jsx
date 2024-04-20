import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    async function get() {
      try {
        const res = await fetch("api/users/all");
        const data = await res.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }
    get();
  }, []);
  function getCurrentDate(d) {
    const currentDate = new Date(d);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  return (
    <div className="flex flex-col items-center justify-center">
      
      <h1 className='my-8 font-bold text-4xl text-green-400'>Information About All Users</h1>
      <div className="flex sm:min-w-[650px]  rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <table className="p-4 w-full m-4">
          <tr className="">
            <th>S.No.</th> <th>Name</th>
            <th>Username</th>
            <th>Gender</th>
            <th>Join Date</th>
          </tr>
          {Users.length > 0 &&
            Users.map((user, id) => (
              <tr>
                <td className="w-fit mx-2 font-semibold text-lg">{id + 1}</td>

                <td className="w-fit mx-2 font-semibold text-lg">
                  {user.fullName}
                </td>
                <td className="w-fit mx-2 font-semibold text-lg">
                  {user.username}
                </td>
                <td className="w-fit mx-2 font-semibold text-lg">
                  {user.gender}
                </td>
                <td className="w-fit mx-2 font-semibold text-lg">
                  {getCurrentDate(user.createdAt)}
                </td>
              </tr>
            ))}
        </table>
      </div>
      <Link
        to="/"
        class="relative inline-flex items-center justify-center my-4 outline-none p-0.5  me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 outline-none bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Go to Chat
        </span>
      </Link>
    </div>
  );
};
