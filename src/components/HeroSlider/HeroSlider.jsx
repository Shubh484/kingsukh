import React, { useRef } from "react";
import Rooms from "../Rooms/Rooms";
import room1 from "../../resources/room1.jpg";
import room2 from "../../resources/out.jpg";
import room3 from "../../resources/mithonDam.webp";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const roomData = [
  {
    roomImage: room1,
    roomTitle: " Cozy Haven Room",
    roomDescription:
      "  Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
    beforeText: "Starting at",
    roomPricing: <b>Rs. 1000/night</b>,
  },
  {
    roomImage: room3,
    roomTitle: " Cozy Haven Room",
    roomDescription:
      "  Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
    beforeText: "Starting at",
    roomPricing: <b>Rs. 1000/night</b>,
  },
  {
    roomImage: room2,
    roomTitle: " Cozy Haven Room",
    roomDescription:
      "  Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
    beforeText: "Starting at",
    roomPricing: <b>Rs. 1000/night</b>,
  },
  {
    roomImage: room1,
    roomTitle: " Cozy Haven Room",
    roomDescription:
      "  Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
    beforeText: "Starting at",
    roomPricing: <b>Rs. 1000/night</b>,
  },
];

const HeroSlider = () => {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = sliderRef.current.offsetWidth;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="mt-[100px] ml-[40px]">
        <p className="text-4xl font-medium">
          Our Living <b className="text-[#F67280] text-5xl">Room</b>
        </p>
        <p className="mt-[10px] w-[150px] h-[5px] bg-[#F67280]"></p>
      </div>
      <div>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full"
            onClick={() => handleScroll("left")}
          >
            <FaArrowCircleLeft />
          </button>

          <div
            className="flex overflow-x-scroll gap-4 scrollbar-hide mr-[60px] ml-[20px]"
            ref={sliderRef}
          >
            {roomData.map((room, index) => (
              <Rooms key={index} {...room} />
            ))}
          </div>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2  p-2 rounded-full"
            onClick={() => handleScroll("right")}
          >
            <FaArrowCircleRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
