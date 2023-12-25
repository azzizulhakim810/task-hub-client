import { Link, NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { MdPostAdd } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { FaUserGear  } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Dashboard = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useContext(AuthContext);
  const photoURL = user?.photoURL;
  const email = user?.email;
  const name = user?.displayName;
  // console.log(photoURL, email);
  // const [isAdmin, setIsAdmin] = useState();

/* useEffect(() => {
  axiosSecure.get(`/checkAdmin/?email=${userEmail}`)
  .then(res => setIsAdmin(res.data?.role))
}, [axiosSecure, userEmail]) */

// console.log(isAdmin);
/*   const adminMenu = (
    <div className="text-[15px] font-medium flex flex-col">
      <NavLink
        to="/dashboard/myProfile"
        className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " capitalize  bg-white text-pink-600 px-6 py-2 rounded-lg transition-all duration-500"
                : "px-2 py-2"
            }
      >
       
        <li className="flex items-center gap-2 md:text-base text-sm justify-start"><CgProfile /> Admin Profile </li>
      </NavLink>

      <NavLink
        to="/dashboard/manageUsers"
        className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " capitalize  bg-white text-pink-600 px-6 py-2 rounded-lg transition-all duration-500"
                : "px-2 py-2"
            }
      >
        Manage Users
      </NavLink>
     

       <NavLink
       to="/dashboard/reportedComments"
       className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " capitalize  bg-white text-pink-600 px-6 py-2 rounded-lg transition-all duration-500"
                : "px-2 py-2"
            }
     >
       Reported Comments
     </NavLink>
       
       <NavLink
       to="/dashboard/makeAnnouncement"
       className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " capitalize  bg-white text-pink-600 px-6 py-2 rounded-lg transition-all duration-500"
                : "px-2 py-2"
            }
     >
       
       <li className="flex items-center gap-2 md:text-base text-sm justify-start"><MdPostAdd />
       Make Announcement</li>
     </NavLink>
     
    </div>

  ); */

  const userMenu = (
    <div className="text-[15px] font-medium flex flex-col">
      {/* <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " capitalize  bg-white text-pink-600 px-6 py-2 rounded-lg transition-all duration-500"
                : "px-2 py-2"
            }
            to="/dashboard/myprofile"
          >
            <li className="flex items-center gap-2 md:text-lg text-sm justify-start"><CgProfile />My Profile</li>
          </NavLink>  */}
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " capitalize  bg-white text-pink-600 px-6 py-2 rounded-lg transition-all duration-500"
                : " px-2 py-2"
            }
            to="/dashboard/createNew"
          >
            <li className="flex items-center gap-2 md:text-lg text-sm justify-start"><MdPostAdd />
Create Task</li>
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " capitalize  bg-white text-pink-600 px-6 py-2 rounded-xl transition-all duration-500"
                : " px-2 py-2"
            }
            to="/dashboard/myTasks"
          >
            <li className="flex items-center gap-2 md:text-lg text-sm justify-start"><FaUserEdit />
My Tasks</li>
          </NavLink>

          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " capitalize  bg-white text-pink-600 px-6 py-2 rounded-xl transition-all duration-500"
                : " px-2 py-2"
            }
            to="/dashboard/manageTasks"
          >
            <li className="flex items-center gap-2 md:text-lg text-sm justify-start"><FaUserGear  />
Manage Tasks</li>
          </NavLink>
     
    </div>

  );

  const home = (
    <div className="text-[15px] font-medium flex flex-col">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " capitalize  bg-white text-pink-600 px-6 py-2 rounded-xl transition-all duration-500"
                : " px-2 py-2"
            }
            to="/"
          >
            <li className="flex items-center gap-2 md:text-lg text-sm justify-start"><IoHomeOutline />
Home</li>
          </NavLink>
     
    </div>

  );


  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-[150px] md:w-64 bg-pink-600 md:p-6 p-2 pt-6">
        {/* Sidebar content */}
        <Link to="/" className=" normal-case font-bold  flex flex-col align-middle items-center">
            <img
              id="image"
              src={photoURL}
              className="md:w-16 w-20 rounded-full -ml-2"
              alt=""
            />
            <span id="logo" className="text-xl pt-2 text-white tracking-wider font-poppins">{name}</span>
          </Link>
        <ul className="flex flex-col gap-2 text-white font-semibold py-4">
          
          {userMenu}
          
          <div className="h-[2px] w-full bg-white my-6"></div> 

          {home}

          
          
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="w-full bg-white shadow-lg">
          {/* Navbar content */}
          <nav className="container mx-auto px-4">
            <div className="flex py-6">
            <Link to="/" className=" normal-case font-bold ">
            <span id="logo" className="md:text-4xl text-2xl text-pink-600 tracking-wider font-nova">TaskHub</span>
          </Link>
             
            </div>
          </nav>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
