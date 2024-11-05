import React from "react";

const Form = () => {
  return (
    <section className="bg-white" id="contact">
      <div
        id="map"
        className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14626.017169499093!2d86.85973709999999!3d23.5862406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1715991642479!5m2!1sen!2sin"
          width="100%"
          height="480"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container px-6 md:px-12">
        <div className="block rounded-lg bg-white bg-opacity-80 px-6 py-12 shadow-md md:py-16 md:px-12 -mt-[100px] backdrop-blur-lg border">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full md:w-5/12 px-3">
              <form>
                <div className="relative mb-6">
                  <input
                    type="text"
                    className="peer w-full rounded border-2 border-gray-300 py-2 px-3 bg-transparent outline-none transition-all duration-200 focus:border-[#F67280] focus:ring-2 focus:ring-[#F67280]"
                    id="name"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute top-0 left-3 text-sm text-gray-500 transition-all duration-200 ease-out transform -translate-y-3 scale-75 origin-[0_0] pointer-events-none peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-0.6 peer-focus:scale-75"
                  >
                    Name
                  </label>
                </div>
                <div className="relative mb-6">
                  <input
                    type="email"
                    className="peer w-full rounded border-2 border-gray-300 py-2 px-3 bg-transparent outline-none transition-all duration-200 focus:border-[#F67280] focus:ring-2 focus:ring-[#F67280]"
                    id="email"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute top-0 left-3 text-sm text-gray-500 transition-all duration-200 ease-out transform -translate-y-3 scale-75 origin-[0_0] pointer-events-none peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-0.6 peer-focus:scale-75"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative mb-6">
                  <input
                    type="tel"
                    className="peer w-full rounded border-2 border-gray-300 py-2 px-3 bg-transparent outline-none transition-all duration-200 focus:border-[#F67280] focus:ring-2 focus:ring-[#F67280]"
                    id="mobile"
                    placeholder=" "
                  />
                  <label
                    htmlFor="mobile"
                    className="absolute top-0 left-3 text-sm text-gray-500 transition-all duration-200 ease-out transform -translate-y-3 scale-75 origin-[0_0] pointer-events-none peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-0.6 peer-focus:scale-75"
                  >
                    Mobile Number
                  </label>
                </div>
                <div className="relative mb-6">
                  <textarea
                    className="peer w-full rounded border-2 border-gray-300 py-2 px-3 bg-transparent outline-none transition-all duration-200 focus:border-[#F67280] focus:ring-2 focus:ring-[#F67280]"
                    id="message"
                    rows="3"
                    placeholder=" "
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute top-0 left-3 text-sm text-gray-500 transition-all duration-200 ease-out transform -translate-y-3 scale-75 origin-[0_0] pointer-events-none peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-0.6 peer-focus:scale-75"
                  >
                    Message
                  </label>
                </div>

                <button
                  type="button"
                  className="w-full rounded bg-[#F67280] text-white px-6 py-2 text-sm font-semibold uppercase transition-all duration-200 hover:bg-[#f79ea7] hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="w-full md:w-7/12 px-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ContactInfo title="Technical Support" phone="9007062180" />
                <ContactInfo title="Room Service" phone="9007062180" />
                <ContactInfo title="Room Booking" phone="9007062180" />
                <ContactInfo title="Customer Complaint" phone="9007062180" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ title, phone }) => (
  <div className="flex items-start bg-[#f897a1] rounded-lg p-4 shadow-md hover:bg-[#f8a4ac] transition-all">
    <div className="inline-block rounded-md bg-white p-4 text-[#F67280]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
        />
      </svg>
    </div>
    <div className="ml-6">
      <p className="font-bold text-neutral-700">{title}</p>
      <p className="text-sm text-neutral-500">{phone}</p>
    </div>
  </div>
);

export default Form;
