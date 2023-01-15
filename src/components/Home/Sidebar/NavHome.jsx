import React, { useState } from "react";
import { FaHome, FaLocationArrow, FaImages, FaInfo } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const NavHome = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="fixed z-40 left-0 flex justify-center items-center">
      <div className="ml-6 flex w-16 flex-col items-center py-6">
        <div className="items-center justify-center rounded-md bg-darkgray opacity-70 p-4 text-white" onClick={() => {setSidebarToggle((prev) => !prev)}}>
            <GiHamburgerMenu size={28}/>
        </div>
        <div
          className={`${
            sidebarToggle ? "block" : "hidden"
          } rounded-md bg-darkgray opacity-70 my-10`}
        >
          <ul className="text-white">
            <a href="#about" className="">
              <li className="p-5 hover:bg-gray  active:bg-gray">
                <FaHome size={28} />
              </li>
            </a>
            <a href="#offer">
              <li className="p-5">
                <FaHome size={28} />
              </li>
            </a>
            <a href="#info">
              <li className="p-5">
                <FaInfo size={28} />
              </li>
            </a>
            <a href="#gallery">
              <li className="p-5">
                <FaImages size={28} />
              </li>
            </a>
            <a href="#contact">
              <li className="p-5">
                <FaLocationArrow size={28} />
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavHome;
