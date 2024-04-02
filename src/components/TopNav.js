import React from "react";
import { PiHandWavingFill } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
import "./TopNav.css";

function TopNav({ onOpen }) {
  return (
    <div className="px-2">
      <div className="h-[80px] flex items-center gap-3 justify-between md:justify-between mx-10 my-3">
        <FaBars className="block sm:hidden  cursor-pointer " onClick={onOpen} />
        <div>
          <h1 className="text-2xl font-bold  text-white my-2 flex items-center gap-2 xs:text-2xl  lg:text-4xl">
            Hello,
            <span data-text="Brooklyn Simmons" className="name">
              Brooklyn
            </span>
            <span className="text-[#D6D828] moving-icon hidden md:block sm:text-xl md:text-2xl lg:text-4xl">
              <PiHandWavingFill />
            </span>
          </h1>

          <h3 className="text-sm  font-medium md:text-xl">
            Welcome to <span className="text-[#2AB42A]">spot trading!</span>{" "}
          </h3>
        </div>
        <div>
          <button  className=" moving-btn text-sm rounded-md bg-[#2AB42A] hover:bg-green-600 p-2 xs:text-base xs:p-2 sm:p-2 lg:text-xl lg:p-3">
            Start Trading
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
