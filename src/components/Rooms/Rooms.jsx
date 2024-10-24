import React from "react";

const Rooms = ({
  roomImage,
  roomDescription,
  roomPricing,
  roomTitle,
  beforeText,
}) => {
  return (
    <div className="mt-[100px] border p-2 rounded-md bg-white shadow-2xl w-[30rem] pb-2 ml-[1rem]">
      <div>
        <img
          className="w-[500px] h-[250px] object-cover"
          src={roomImage}
          alt="rooms"
        />
      </div>
      <div>
        <p className="text-[1.3rem] font-sans font-bold pb-2">{roomTitle}</p>
        <p className="text-[0.9rem] font-serif font-medium pb-2">
          {roomDescription}
        </p>
        <p className="text-[1rem] font-sans pb-2">
          {beforeText} {roomPricing}
        </p>
        <button className="border rounded-md p-2 bg-[#F67280] text-white font-sans font-bold px-[8.8rem] hover:text-black hover:bg-white ">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default Rooms;
