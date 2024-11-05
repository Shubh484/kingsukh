import React from "react";
import GalleryModel from "../GallaryModel/GallaryModel";

const Gallary = () => {
  return (
    <div className="mt-[100px] ">
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl font-medium">GALLARY</p>
        <p className="mt-[5px]  h-[5px] w-[80px] bg-[#F67280]"></p>
      </div>
      <div className="mt-[20px]">
        <GalleryModel />
      </div>
    </div>
  );
};

export default Gallary;
