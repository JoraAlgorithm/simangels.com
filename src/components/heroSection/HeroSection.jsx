import React from "react";
import Navbar from "./navbar/Navbar";
import "./HeroSection.css";
import { IoIosArrowRoundForward } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className="heroMain">
      <Navbar />

      <div className="h-full flex flex-col justify-end items-center text-white pb-32 mx-4">
        <h1 className="font-bold text-lg sm:text-3xl">
          STAY ORGANIZED. STAY CONNECTED.
        </h1>
        <h3 className="text-[#727272] text-[13px] text-center sm:text-lg mt-2 mb-6">
          An all-in-one, easy to use app for note-taking, daily tasks with
          reminders, messaging, call, video calling and more.
        </h3>
        <button className="flex items-center gap-2 bg-yellow-500 text-black font-semibold rounded py-2 px-6 sm:py-3 sm:px-8">
          Let's Go
          <IoIosArrowRoundForward className="animation" size={25} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
