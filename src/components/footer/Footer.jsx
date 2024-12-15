import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-10 py-20 bg-[#13160F] flex justify-evenly items-center">
      <div className="flex flex-col gap-4">
        <p className="text-[#727272] text-sm sm:text-md">
          © 2024 Roguebred Corporation. All rights reserved{" "}
        </p>

        <div className="flex items-center gap-4 sm:gap-6 text-white">
          <MdOutlineEmail className="cursor-pointer text-[24px] sm:text-[28px]" />
          <FaInstagram className="cursor-pointer text-xl sm:text-2xl" />
          <FaTwitter className="cursor-pointer text-xl sm:text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-[#727272] text-sm sm:text-md">
          <span>Terms Conditions</span> - <span>Privacy Policy</span>
        </p>
        <span className="text-white text-sm sm:text-md">Contact Us</span>
      </div>
    </div>
  );
};

export default Footer;
