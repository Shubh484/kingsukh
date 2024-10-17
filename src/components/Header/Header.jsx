import React from "react";
import Hamburger from "../Hamburger/Hamburger";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className="flex justify-between items-center ml-[20px] mr-[20px] mt-4">
      <div>
        <p className="text-3xl font-sans font-bold">KingSukh</p>
      </div>
      <div className={styles.hamburger}>
        <Hamburger />
      </div>
      <div className={styles.nav__items__list}>
        <ul className="flex justify-center items-center space-x-8 text-[18px] font-sans font-medium cursor-pointer">
          <li className="hover:text-[#FF6F61]">Home</li>
          <li className="hover:text-[#FF6F61]">About</li>
          <li className="hover:text-[#FF6F61]">Services</li>
          <li className="hover:text-[#FF6F61]">Room</li>
          <li className="hover:text-[#FF6F61]">Gallary</li>
          <li className="hover:text-[#FF6F61]">Contact</li>
        </ul>
      </div>
      <div>
        <button
          className={`border border-s-gray-400 p-3 rounded-md font-sans font-bold text-white text-[16px] bg-[#00796B] ${styles.nav__items__list}`}
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default Header;
