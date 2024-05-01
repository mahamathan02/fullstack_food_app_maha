import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/imgs/logo (2).png";
import { isActiveStyles, isActivenotStyles } from "../utils/style";

const DBLEFTSection = () => {
  return (
    <div className=" h-full py-12 flex flex-col  bg-blend-hard-light-light  backdrop-blur-md min-w-210 w-300 gap-3 shadow-md  ">
      <NavLink to={"/"} className="flex justify-start items-center gap-4 p-2">
        <img src={logo} className=" w-12 " alt="" />
        <p className="font-semibold text-xl">City</p>
      </NavLink>
      <hr />
      <ul className="flex  flex-col gap-4">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles}  px-4 py-2 border-l-8 border-red-500 hover:bg-red-300 `
              : isActivenotStyles
          }
          to={"/dashboard/home"}
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles}  px-4 py-2  border-l-8 border-red-500 hover:bg-red-200`
              : isActivenotStyles
          }
          to={"/dashboard/orders"}
        >
          Orders
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles}  px-4 py-2  border-l-8  border-red-500 hover:bg-red-200`
              : isActivenotStyles
          }
          to={"/dashboard/items"}
        >
          Items
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles}  px-4 py-2  border-l-8  border-red-500 hover:bg-red-100`
              : isActivenotStyles
          }
          to={"/dashboard/newitems"}
        >
          NewItems
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles}  px-4 py-2   border-l-8 border-red-500 hover:bg-red-200`
              : isActivenotStyles
          }
          to={"/dashboard/users"}
        >
          Users
        </NavLink>
      </ul>

      <div className="w-full items-center justify-center flex  h-225 mt-auto px-2 gap-2">
        <div className="w-full h-full  rounded-md bg-red-400 flex flex-col items-center justify-center gap-2">
          <div className=" w-12 h-12 flex items-center justify-center rounded-full border bg-white gap-2">
            <p className=" text-2xl font-bold text-red-500">?</p>
          </div>
          <p className="text-xl font-semibold text-primary">Helping Center</p>
          <p className="text-base text-gray-300 text-center capitalize">
            having trouble in city please contact us for more question
          </p>
          <p className="px-4 py-2 rounded-full bg-primary text-red-500 font-semibold cursor-pointer gap-2">
            Get in Touch
          </p>
        </div>
      </div>
    </div>
  );
};

export default DBLEFTSection;
