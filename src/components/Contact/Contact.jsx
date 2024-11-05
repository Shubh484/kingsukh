import React from "react";
import Form from "../Form/Form";

const Contact = () => {
  return (
    <div className="mt-[100px]">
      <div>
        <div className=" ml-[10px]">
          <p className="text-4xl font-medium pb-2">Send a Message</p>
          <p className="h-[5px] w-[180px] bg-[#F67280]"></p>
          <div className="mt-[40px]">
            <Form />
          </div>
          <button></button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Contact;
