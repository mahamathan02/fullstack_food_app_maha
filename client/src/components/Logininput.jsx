import React from "react";
import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { fade, fadeInOut } from "../animations";

const Logininput = ({
  placeHolder,
  icons,
  inputstate,
  inputstatefunc,
  type,
  issignUp,
}) => {
  const [isFocus, setIsfocus] = useState(false);
  return (
    <motion.div
      {...fadeInOut}
      className={`flex items-center justify-center gap-4 bg-cardOverlay backdrop-blur-md rounded-md w-full px-4 py-4 ${
        isFocus ? "shadow-md shadow-red-400" : "shadow-none"
      }`}
    >
      {icons}

      <input
        type={type}
        placeholder={placeHolder}
        className="w-full h-full bg-transparent border-none outline-none text-headingColor text-lg font-semibold "
        value={inputstate}
        onChange={(e) => inputstatefunc(e.target.value)}
        onFocus={() => setIsfocus(true)}
        onBlur={() => setIsfocus(false)}
      />
    </motion.div>
  );
};

export default Logininput;
