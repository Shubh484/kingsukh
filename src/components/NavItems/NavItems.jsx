import React from "react";
import { useUser } from "../../context/userContext";
import Hamburger from "../Hamburger/Hamburger";

const NavItems = () => {
  const { isOpen } = useUser();
  return (
    isOpen && (
      <>
        <div className="w-screen h-screen fixed top-0 flex justify-center items-center bg-[#355C7D]">
          <div className="fixed top-5 right-4">
            <Hamburger />
          </div>
          <ul className="space-y-3 text-white text-xl font-sans font-bold tracking-wider mt-[-40px]">
            <li className="hover:text-[#F67280]">
              <button>Home</button>
            </li>
            <li className="hover:text-[#F67280]">
              {" "}
              <button>About</button>
            </li>
            <li className="hover:text-[#F67280]">
              {" "}
              <button>Services</button>
            </li>
            <li className="hover:text-[#F67280]">
              {" "}
              <button>Room</button>
            </li>
            <li className="hover:text-[#F67280]">
              {" "}
              <button>Gallary</button>
            </li>
            <li className="hover:text-[#F67280]">
              {" "}
              <button>Contact</button>
            </li>
            <li>
              <button className="border p-4 rounded-md bg-[#F67280] ml-[-20px] mt-[10px] hover:text-black hover:bg-white">
                BOOK NOW
              </button>
            </li>
          </ul>
        </div>
      </>
    )
  );
};

export default NavItems;
