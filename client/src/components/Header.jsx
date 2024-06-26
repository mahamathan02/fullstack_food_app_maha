import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/imgs/logo (2).png";
import { isActiveStyles, isActivenotStyles } from "../utils/style";
import { motion } from "framer-motion";
import { buttonclick, slidetop } from "../animations/index";
import { MdLogout, MdShop, MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import cherry from "../assets/imgs/cherries-2905964_1280.jpg";
import { getAuth } from "firebase/auth";
import { app } from "../config/firebase.config";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((state) => state.user.value);
  const [ismenu, setmenu] = useState(false);
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();
  const signOut = () => {
    firebaseAuth
      .signOut()
      .then(() => {
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <header className="fixed backdrop-blur-md z-50 inset-x-0 top-0 flex items-center justify-between px-12  md:px-20 py-6">
      <NavLink to={"/"} className="flex justify-center items-center gap-4">
        <img src={logo} className=" w-12 " alt="" />
        <p className="font-semibold text-xl">City</p>
      </NavLink>

      <nav className=" flex items-center justify-center gap-8">
        <ul className=" hidden md:flex items-center justify-center gap-16">
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isActivenotStyles
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isActivenotStyles
            }
            to={"/menu"}
          >
            Menu
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isActivenotStyles
            }
            to={"/services"}
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? isActiveStyles : isActivenotStyles
            }
            to={"/aboutus"}
          >
            About Us
          </NavLink>
        </ul>
        <motion.div {...buttonclick} className="relative cursor-pointer">
          <MdShoppingCart className="text-3xl  text-textColor" />

          <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center absolute -top-4 -right-1">
            <p className=" text-primary text-base  font-semibold">2</p>
          </div>
        </motion.div>

        {user?.name ? (
          <>
            <div
              className="relative cursor-pointer  "
              onMouseEnter={() => {
                setmenu(true);
              }}
            >
              <div className="w-12 h-12  rounded-full cursor-pointer overflow-hidden shadow-md flex items-center justify-center bg-red-300">
                <motion.img
                  className="w-full h-full object-cover"
                  src={
                    user?.picture
                      ? user?.picture
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGudC4lC7QWrwolFFMWxFs2QW_IfWR965AXw&s"
                  }
                  whileHover={{ scale: 1.15 }}
                  referrerPolicy="no-referrer"
                />
              </div>
              {ismenu && (
                <motion.div
                  {...slidetop}
                  onMouseLeave={() => {
                    setmenu(false);
                  }}
                  className="px-6 w-48 py-4 bg-slate-100 rounded-md backdrop-blur-md shadow-md absolute  top-12 right-0 flex flex-col 
                gap-4 "
                >
                  <Link
                    className="hover:text-red-500 text-xl text-textColor"
                    to={"/dashboard/home"}
                  >
                    Dashboard
                  </Link>

                  <Link
                    className="hover:text-red-500 text-xl  text-textColor "
                    to={"/profile"}
                  >
                    My profile
                  </Link>
                  <Link
                    className="hover:text-red-500 text-xl  text-textColor "
                    to={"/user-orders"}
                  >
                    {" "}
                    Orders
                  </Link>
                  <motion.div
                    {...buttonclick}
                    onClick={signOut}
                    className="group flex items-center px-3 py-2 rounded-md shadow-md bg-gray-100 hover:bg-gray-300 gap-3 "
                  >
                    <MdLogout className="text-2xl text-textColor group-hover:text-headingColor" />
                    <p className=" text-xl text-textColor group-hover:text-headingColor">
                      Sign Out
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </>
        ) : (
          <>
            <NavLink to={"/login"}>
              <motion.button
                {...buttonclick}
                className="px-4 py-2 rounded-md bg-lighttextGray border border-red-300 cursor-pointer"
              >
                Login
              </motion.button>
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
