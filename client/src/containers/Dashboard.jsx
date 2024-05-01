import React from "react";
import { DBLEFTSection, DBRIGHTSection } from "../components";

const Dashborad = () => {
  return (
    <div className="w-screen h-screen bg-primary flex  items-center">
      <DBLEFTSection />
      <DBRIGHTSection />
    </div>
  );
};

export default Dashborad;
