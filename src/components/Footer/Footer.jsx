import React from "react";
import logo from "../../resources/flower.jpg";
import { FaHome, FaBuilding, FaHotel, FaPhoneAlt } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineLocalAirport } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="text-white p-10 mt-[100px] bg-[#F67280]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="vanity flex items-center text-white cursor-pointer transition-all hover:text-brown mb-5">
            {/* <img src={logo} alt="" width={100} /> */}
            <div className="ml-3">
              <span className="text-4xl"> Kingsukh </span>
              <br /> <span className="barlow-condensed-thin">GUEST HOUSE</span>
            </div>
          </div>
          <p className="mt-5">
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your getaway
            truly extraordinary.
          </p>
        </div>
        <div>
          <h1 className="text-xl gilda-display-regular mb-5">Service Links</h1>
          <div className="flex items-center space-x-3 my-2">
            <FaHandsHelping />
            <p className="hover:underline underline-offset-4 decoration-brown transition-all cursor-pointer">
              Concierge Assistance
            </p>
          </div>
          <div className="flex items-center space-x-3 my-2">
            <TbBrandBooking />
            <p className="hover:underline underline-offset-4 decoration-brown transition-all cursor-pointer">
              Flexible Booking Options
            </p>
          </div>
          <div className="flex items-center space-x-3 my-2">
            <MdOutlineLocalAirport />
            <p className="hover:underline underline-offset-4 decoration-brown transition-all cursor-pointer">
              Airport Transfers
            </p>
          </div>
          <div className="flex items-center space-x-3 my-2">
            <MdHealthAndSafety />
            <p className="hover:underline underline-offset-4 decoration-brown transition-all cursor-pointer">
              Wellness & Recreation
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-xl gilda-display-regular mb-5">Information</h1>
          <div className="flex items-center my-2">
            <FaPhoneAlt />
            <p className="ml-3">+91 9007062180</p>
          </div>
          <div className="flex items-center my-2">
            <IoMail />
            <p className="ml-3">kkghosh0099@gmail.com</p>
          </div>
          <div className="flex items-center my-2">
            <CiLocationOn size={30} />
            <p className="ml-3">
              Beside Barshal Water Tank, Manpur, Barhanti,
              <br /> West Bengal 723156
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-xl gilda-display-regular mb-5">Newsletter</h1>
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded mb-2 text-black"
            />
            <button className="bg-white text-black font-medium p-2 rounded transition-all hover:bg-[#F67280] hover:text-white hover:font-bold hover:mt-[2px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
