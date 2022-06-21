import React from "react";
import Image from "next/image";
import {
  AiOutlineArrowUp,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-2xl tracking-widest uppercase text-[#bfbeb2]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-600 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-md"
                  src="/../public/appointment.jpg"
                  alt="/"
                  width="500"
                  height="500"
                />
              </div>
              <div>
                <h2 className="py-2">DF Buidling Solutions</h2>
                <p>Home Improvement & Renovation Specialists</p>
                <p className="py-4">
                  No job too small. Contact us now for an appointment & quote on
                  your desired project.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with us</p>
                <div className="flex items-center justify-between py-4">

                  <a href="tel://+353876136030" className="rounded-full mx-3 shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlinePhone size={40} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-500 rounded-xl lg:p-4">
            <div className="p-4">
              <form
              action="https://getform.io/f/4b883e2e-0d6a-4acd-93b3-fd941113ed12"
              method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-400"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-400"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-400"
                    type="email"
                    name="email"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-400"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                  name="message"
                    className="border-2 rounded-lg p-3 border-gray-400"
                    rows={10}
                  ></textarea>
                </div>
                <button type='submit' className="w-full p-4 text-gray-900 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-md shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineArrowUp className="text-[#bfbeb2]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
