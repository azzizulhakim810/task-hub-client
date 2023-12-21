import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import logo from "../../../public/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { IoMdNotifications } from "react-icons/io";
// import { AuthContext } from "../providers/AuthProvider";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import { TooltipDefault } from "../Tooltip/TooltipDefault";

const Navbar = () => {
  const { user, signout } = useContext(AuthContext);
  // const [announcementCount, setAnnouncementCount] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  // const axiosSecure = useAxiosSecure();

/*   useEffect(()=> {
    axiosSecure.get('/announcementCount')
  .then(res => setAnnouncementCount(res.data?.count))
  }, [axiosSecure]) */
// console.log(announcementCount);



  window.addEventListener("scroll", () => {
    const currentScrollPos = window.scrollY;
    if(currentScrollPos == 0) {
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("hambarger").style.color = "white";
      document.getElementById("item").style.color = "white";
      document.getElementById("logo").style.color = "white";
      document.getElementById("navbar").style.borderBottom = "0px solid transparent";
    }

    if(currentScrollPos > 50) {
      document.getElementById("navbar").style.transition = 'ease-in-out';
      document.getElementById("navbar").style.transitionDuration = '.3s';
      document.getElementById("navbar").style.backgroundColor = "white";
      document.getElementById("hambarger").style.color = "#E8489E";
      document.getElementById("item").style.color = "#E8489E";
      document.getElementById("logo").style.color = "#E8489E";
      document.getElementById("navbar").style.borderBottom = "1px solid #E5E7EB";
    }
    
  });

  const handleSignOut = () => {
    signout().then().catch();
    navigate(location?.state ? location.state : "/signin");
  };

/*     const handleDropdown = () => {
    console.log("hello");
  } */
  // Menu Item Creation
  const menuItem = (
    <div className="text-[15px] font-medium lg:flex grid grid-cols-1">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " underline decoration-[2px] underline-offset-8 capitalize py-1 px-2 mx-2"
            : "  py-1 px-2 mx-2"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/blogs"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " underline decoration-[2px] underline-offset-8  capitalize py-1 px-2 mx-2 "
            : "  py-1 px-2 mx-2"
        }
      >
        Blogs
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " underline decoration-[2px] underline-offset-8  capitalize py-1 px-2 mx-2 "
            : "  py-1 px-2 mx-2"
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? " underline decoration-[2px] underline-offset-8  capitalize py-1 px-2 mx-2 "
            : "  py-1 px-2 mx-2"
        }
      >
        Contact Us
      </NavLink>
     { user &&
       <NavLink
       to="/dashboard/myProfile"
       className={({ isActive, isPending }) =>
         isPending
           ? "pending"
           : isActive
           ? " underline decoration-[2px] underline-offset-8  capitalize py-1 px-2 mx-2 "
           : "  py-1 px-2 mx-2"
       }
     >
       Dashboard
     </NavLink>
     }

    
    </div>
  );
  // console.log(user);
  return (
    <div id="navbar" className="w-full  z-50">
      <div className="navbar w-11/12 mx-auto py-6">
        <div className="navbar-start ">
          <div className="dropdown">
            <label
              id="hambarger"
              tabIndex={0}
              className="btn bg-transparent p-0  me-4 border-none text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-8 z-[1] px-3 py-4 shadow bg-white rounded-none w-[200px]"
            >
              {menuItem}
            </ul>
          </div>
          {/* Logo  */}
          <Link to="/" className=" normal-case font-bold flex align-middle items-center">
            {/* <img
              id="image"
              src="https://i.ibb.co/HX9fnGp/Logo-white.png"
              className="md:w-40 w-36 h-8 md:h-11 -ml-2"
              alt=""
            /> */}
            <span id="logo" className="text-2xl text-white tracking-wider font-nova">TaskHub</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul id="item" className="menu menu-horizontal text-white  px-1">
            {menuItem}
          </ul>
        </div>

        {/* For tab & desktop  */}
        <div className="navbar-end hidden md:flex space-x-4 ">
        
          {/* Profile Picture */}
          {user ? (
            <div className="dropdown dropdown-bottom">
            <div tabIndex="0" role="button" className="btn p-0 bg-transparent hover:bg-transparent border-none -mt-1">
              <div className="avatar">
                        <div className="md:w-10 w-8 rounded-full ring ring-[#E8489E] relative">
                          <div className="border-pink-600 z-100 absolute">
                            <img className="w-full object-fill " src={user?.photoURL} />
                          </div>
                        </div>
                      </div>
            </div>
            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40 -ml-16 divide-y-[1px] divide-gray-200">
              <li className="px-4 py-2">{user?.displayName}</li>
              <li><Link to="/">Dashboard</Link ></li>
              <li><button onClick={handleSignOut}>Signout</button></li>
            </ul>
          </div>
          ) : (
            ""
          )}

          <div className="">
            {/* signIn button  */}
            {user ? (
              <div className="flex justify-center items-center gap-6 ">
                {/* <div className="indicator">
                  <span className="indicator-item badge ">{
                    announcementCount > 0 ? announcementCount : 0
                  }</span>
                  <button className="flex">
                    <IoMdNotifications className="md:text-3xl text-cyan-500" />
                  </button>
                </div> */}

                
              </div>
            ) : (
              <div className="flex justify-center items-center gap-6 ">
                {/* <div className="indicator">
                  <span className="indicator-item badge ">1</span>
                  <button className="flex">
                    <IoMdNotifications className="md:text-3xl text-cyan-500" />
                  </button>
                </div> */}

                <Link to="/signin">
                  <button className=" bg-cyan-500 hover:bg-white  text-white hover:text-cyan-500 rounded-3xl border-none md:text-sm text-xs px-6 py-3 font-bold">
                    Join Us
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* For mobile only  */}
        <div className="navbar-end md:hidden flex space-x-3 w-full">
          {/* Profile Picture */}
          <div>
            {user ? (
              <div className="avatar">
                <div className="md:w-10 w-8 rounded-full ring ring-[#E8489E] ">
                  <img className="w-full object-fill " src={user?.photoURL} />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="flex items-center">
            {/* login & logout button  */}
            <div>
            <div className="flex justify-center items-center gap-6 ">
                  
                  
                </div>
              {/* {user ? (
                <div className="flex justify-center items-center gap-6 ">
                  <div className="indicator ">
                    <span className="indicator-item badge ">{
                      announcementCount > 0 ? announcementCount : 0
                    }</span>
                    <button className="flex">
                      <IoMdNotifications className=" text-3xl text-cyan-500" />
                    </button>
                  </div>
                  
                </div>
              ) : (
                <div className="flex justify-center items-center gap-4">
                  <div className="indicator ">
                    <span className="indicator-item badge ">1</span>
                    <button className="flex">
                      <IoMdNotifications className=" text-3xl text-cyan-500" />
                    </button>
                  </div>
                  <Link to="/joinUs">
                    <button className=" bg-cyan-500 hover:bg-white  text-white hover:text-cyan-500 rounded-3xl border-none md:text-sm text-xs px-6 py-3 font-bold">
                      Join Us
                    </button>
                  </Link>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
