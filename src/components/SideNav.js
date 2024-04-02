import React, { useState, useEffect } from "react";
import { MdDashboard } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { GoArrowSwitch } from "react-icons/go";
import { FiAlignJustify } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { motion } from "framer-motion";

function SideNav() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const handleSupport = () => {
    console.log("Support clicked");
  };
  const NavLinks = [
    {
      icon: <IoHomeOutline />,
      text: "Home",
      link: "/",
    },
    {
      icon: <GoArrowSwitch />,
      text: "Trade",
      link: "/trade",
    },
    {
      icon: <CiWallet />,
      text: "Wallet",
      link: "/wallet",
    },
  ];
  const handleNavItemClick = (index) => {
    setActiveNavItem(index); // Update active navigation item when clicked
  };
  useEffect(() => {
    setActiveNavItem(0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className=" flex flex-col max-w-[256px] fixed top-0 left-0 h-screen rounded-xl font-medium bg-[#1A1E1C]"
    >
      <div className="flex items-center justify-between mx-2 mt-8 mb-2  text-xl">
        <img src="/carboncellLogo.png" alt="" className="w-1/2" />
        <FiAlignJustify className="cursor-pointer" />
      </div>
      <div className="flex items-center gap-5 cursor-pointer hover:bg-[#333333] px-3 py-2 hover:rounded-md mx-1 my-4 ">
        <IoSearchOutline className="text-xl" />
        <p>Search</p>
      </div>
      <div className="flex flex-col gap-[12rem]">
        <div className="mx-4">
          {NavLinks.map((nav, index) => (
            <div
              key={index}
              onClick={() => handleNavItemClick(index)}
              className={`flex items-center gap-2 px-3 py-1 mx-1 
               hover:duration-150 cursor-pointer hover:bg-[#333333] hover:rounded-md ${
                 activeNavItem === index ? "text-[#2AB42A] font-semibold" : ""
               }`}
            >
              <p>{nav.icon}</p>
              <p>{nav.text}</p>
            </div>
          ))}
        </div>
        <div className="text-[#656666]">
          <div
            onClick={handleNavItemClick}
            className="flex items-center justify-between mx-4 hover:duration-150 cursor-pointer hover:bg-[#333333] hover:rounded-md"
          >
            <div className="flex items-center gap-2 px-3 mx-1 my-1">
              {" "}
              <IoIosNotificationsOutline />
              <p>Notifications</p>
            </div>
            <div className="bg-[#2AB42A] text-black px-1  text-sm rounded-full mr-2">
              12
            </div>
          </div>
          <div className="flex items-center justify-between mx-4 hover:duration-150 cursor-pointer hover:bg-[#333333] hover:rounded-md">
            <div className="flex items-center gap-2 px-3 mx-1 my-1">
              {" "}
              <MdOutlineContactSupport />
              <p>Support</p>
            </div>
          </div>
          <div className="flex items-center justify-between mx-4 hover:duration-150 cursor-pointer hover:bg-[#333333] hover:rounded-md">
            <div className="flex items-center gap-2 px-3 mx-1 my-1">
              {" "}
              <IoSettingsOutline />
              <p>Settings</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex relative gap-1 items-center justify-between bg-[#333333] p-2 m-1 rounded-md mt-8">
        <div>
          <FaUserCircle className="text-2xl" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-medium">Brooklyn Simmons</h3>
          <p className="text-sm text-[#656666]">brooklyn@simmons.com</p>
        </div>
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FiMoreVertical className="text-2xl cursor-pointer" />
          {showDropdown && (
            <div className="absolute right-0 top-0 mt-2 w-48  bg-[#333333] rounded-md shadow-lg">
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-left hover:bg-[#616663]"
              >
                Logout
              </button>
              <button
                onClick={handleSupport}
                className="block w-full px-4 py-2 text-left hover:bg-[#616663]"
              >
                Support
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default SideNav;
