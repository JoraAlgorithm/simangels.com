import React from "react";
import { MdOutlineTaskAlt } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaBrain } from "react-icons/fa";

const Features = () => {
  return (
    <div className="px-10 py-20 bg-[#13160F] flex flex-col sm:flex-row items-center justify-center gap-20 text-white">
      <div className="flex flex-col items-center gap-6">
        <div className="sm:w-44 sm:h-44 w-32 h-32 rounded-full bg-yellow-500 flex items-center justify-center">
          <MdOutlineTaskAlt size={90} />
        </div>
        <h1 className="uppercase font-semibold text-xl">Tasks</h1>
        <p className="text-center text-sm sm:text-md mx-4">
          NotesnChat offers an intuitive, user-friendly task management feature
          designed to streamline your productivity and organization.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="sm:w-44 sm:h-44 w-32 h-32 rounded-full bg-[#2F83C5] flex items-center justify-center">
          <MdOutlineModeEdit size={90} />
        </div>
        <h1 className="uppercase font-semibold text-xl">NOTES</h1>
        <p className="text-center text-sm sm:text-md mx-4">
          NotesnChat offers an intuitive, user-friendly task management feature
          designed to streamline your productivity and organization.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="sm:w-44 sm:h-44 w-32 h-32 rounded-full bg-[#B02B2C] flex items-center justify-center">
          <FaBrain size={90} />
        </div>
        <h1 className="uppercase font-semibold text-xl">AI</h1>
        <p className="text-center text-sm sm:text-md mx-4">
          NotesnChat offers an intuitive, user-friendly task management feature
          designed to streamline your productivity and organization.
        </p>
      </div>
    </div>
  );
};

export default Features;
