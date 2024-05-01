import React from "react";
import DBHeader from "./DBHeader";
import { Route, Routes } from "react-router-dom";
import { DBHome, DBItems, DBNewItems, DBOrders, DBUser } from "../components";

const DBRIGHTSection = () => {
  return (
    <div className="flex flex-col py-12 flex-1 h-full  px-12">
      <DBHeader />
      <div className="flex  flex-col overflow-y-scroll scrollbar-none ">
        <Routes>
          <Route path="/home" element={<DBHome />} />
          <Route path="/items" element={<DBItems />} />
          <Route path="/orders" element={<DBOrders />} />
          <Route path="/newitems" element={<DBNewItems />} />
          <Route path="/users" element={<DBUser />} />
        </Routes>
      </div>
    </div>
  );
};

export default DBRIGHTSection;
