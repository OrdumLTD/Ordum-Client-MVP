"use client";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import React from "react";

function SideBar() {
  return (
    <div className="stiky top-0 w-8 md:w-20 h-full border-r border-black bg-white absolute">
      <ul className="relative grid content-center content-center gap-2 md:gap-4 pt-2 pl-1.5 md:pt-6 md:px-5">
        <li className="relative">
          <div className="">
            <button
              className="w-5 h-5 md:w-12 md:h-12 rounded-full 
                        bg-black"
            ></button>
          </div>
        </li>
        <li className="relative">
          <div className="">
            <button
              className="w-5 h-5 md:w-12 md:h-12 rounded-full 
                        bg-white "
            >
              <AddCircleIcon className="hidden md:block" />
              <AddCircleIcon className="block md:hidden" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
