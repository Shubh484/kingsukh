import React from "react";
import hero_image from "../../resources/palash.webp";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className="mt-[100px]">
      <div
        className={`flex justify-center items-center space-x-24 ${styles.mobile}`}
      >
        <img src={hero_image} alt="hero" width={700} />
        <div className={`${styles.text_section}`}>
          <p
            className={`text-[2rem] font-sans font-semibold text-[#373737] italic w-[20rem] ${styles.mobile_para}`}
          >
            Where Every Moment Feels Like Home, Together.
          </p>
          <button
            className={`border p-4 rounded-md text-white font-bold  bg-[#F67280] hover:text-black hover:bg-white mt-2 ${styles.button}`}
          >
            BOOK NOW
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
