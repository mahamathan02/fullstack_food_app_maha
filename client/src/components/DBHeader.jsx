import React from "react";
import { useSelector } from "react-redux";
import { BsFillBellFill, BsToggles2 } from "react-icons/bs";
import { MdSearch, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { buttonclick } from "../animations";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../config/firebase.config";

const DBHeader = () => {
  const navigate = useNavigate();

  const firebaseAuth = getAuth(app);

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
  const user = useSelector((state) => state.user);
  return (
    <div className="w-full  flex items-center justify-between gap-3 ">
      <p className="text-2xl text-headingColor">
        Welcome to city
        {user?.name && (
          <span className="text-base text-gray-500 block">{`Hello ${user?.name}...!`}</span>
        )}
      </p>
      <div className="items-center justify-center flex gap-4">
        <div className="flex items-center justify-center gap-3 px-4 py-2 bg-blend-soft-light backdrop-blur-md rounded-md shadow-md">
          <MdSearch className="text-gray-400 text-2xl" />
          <input
            type="text"
            placeholder="Search Here.."
            className="rounded-md  border-none outline-none bg-transparent font-semibold "
          />
          <BsToggles2 className="text-gray-400 text-2xl " />
        </div>
        <motion.div
          {...buttonclick}
          className="w-10 h-10 rounded-md backdrop-blur-md shadow-md flex items-center justify-center"
        >
          <BsFillBellFill className="text-gray-400 text-xl" />
        </motion.div>

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
      </div>
    </div>
  );
};

export default DBHeader;
