import React, { useRef } from "react";
import Rooms from "../Rooms/Rooms";
import room1 from "../../resources/room1.jpg";

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
    roomImage: room1,
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
  const sliderRef = useRef(null); // Step 1: Reference to the slider container

  // Step 2: Scroll function to move left or right
  const handleScroll = (direction) => {
    const scrollAmount = sliderRef.current.offsetWidth; // Get container width
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth", // Smooth scrolling effect
    });
  };
  return (
    <div>
      <div className="relative">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full"
          onClick={() => handleScroll("left")}
        >
          ◀
        </button>

        {/* Slider Container */}
        <div
          className="flex overflow-x-scroll gap-4 scrollbar-hide"
          ref={sliderRef} // Step 1: Attach ref to the container
        >
          {roomData.map((room, index) => (
            <Rooms key={index} {...room} /> // Render each card
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-300 p-2 rounded-full"
          onClick={() => handleScroll("right")}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
