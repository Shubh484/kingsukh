import React, { useState } from "react";
import { useUser } from "../../context/userContext";

const Hamburger = () => {
  const { isOpen, setIsOpen, toggleMenu } = useUser();

  return (
    <div>
      <div className="space-y-1 cursor-pointer" onClick={toggleMenu}>
        <span
          className={`block h-1 w-8 bg-[#00796B] ${
            isOpen ? "rotate-45 translate-y-1" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-8 bg-[#00796B] ${isOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`block h-1 w-8 bg-[#00796B] ${
            isOpen ? "-rotate-45 -translate-y-1" : ""
          }`}
        ></span>
      </div>
      {/* <div
        className={`md:flex md:items-center md:space-x-8 absolute md:static bg-[#E0F7FA] h-full w-full md:w-auto left-0 md:left-auto transition-all duration-300 ease-in ${
          isOpen ? "top-14 opacity-100" : "top-[-200px] opacity-0"
        }`}
      >
        <ul className="">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Room</li>
          <li>Gallary</li>
          <li>Contact</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Hamburger;
