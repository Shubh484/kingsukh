import React from "react";

import roomservice from "../../resources/room1.jpg";

import wifi from "../../resources/wifi.jpg";
import parking from "../../resources/parking.jpg";
import pickup from "../../resources/pickup.png";
import breakfast from "../../resources/breakfast.jpg";
import design from "../../resources/header.jpg";
import Cardsservice from "../CardService/Cardsservice";

const ServiceDesign = () => {
  return (
    <>
      <div className="py-10" id="services">
        <div className="flex items-center justify-center">
          <img src={design} alt="" />
          <h2 className="barlow-condensed-thin font-bold text-[#F67280] mx-3 text-2xl tracking-widest">
            KINGSUKH GUEST HOUSE
          </h2>
          <img src={design} alt="" />
        </div>
        <h1 className="gilda-display-regular flex justify-center text-3xl md:text-5xl my-5">
          Luxury Rooms & Suites
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        <Cardsservice
          image={roomservice}
          heading="Room Service"
          description="Enjoy in-room dining with our swift and dedicated room service, ensuring comfort at your fingertips."
        />

        <Cardsservice
          image={wifi}
          heading="Wifi-Facility"
          description="Stay connected 24/7 with high-speed Wi-Fi throughout the guest house."
        />
        <Cardsservice
          image={pickup}
          heading="Pickup & Drop"
          description="Travel hassle-free with our convenient pick-up and drop-off services, available upon request."
        />
        <Cardsservice
          image={parking}
          heading="Parking"
          description="ecure, spacious parking is available on-site, so you can relax knowing your vehicle is safe."
        />
        <Cardsservice
          image={breakfast}
          heading="Breakfast"
          description="Start your day right with a delicious, freshly prepared breakfast included with your stay."
        />
      </div>
    </>
  );
};

export default ServiceDesign;
