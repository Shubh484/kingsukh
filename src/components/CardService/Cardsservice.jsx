import React from "react";

const Cardsservice = (props) => {
  return (
    <div className="bg-white shadow-lg flex flex-col justify-center items-center rounded-lg overflow-hidden m-4 max-w-sm transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-[#fd939d] hover:text-white">
      <img
        src={props.image}
        alt={props.heading}
        className="w-20 h-20 object-cover rounded-full transition duration-3000 ease-in-out transform mb-4"
      />
      <div className="p-6 text-center">
        <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
          {props.heading}
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Cardsservice;
