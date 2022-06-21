import React from "react";
import Image from "next/image";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Link from "next/link";
import logo from '../public/dfblogo.png';

const Main = () => {
  return (
    <div id='home' className="w-full h-screen text-center py-20">
      <div className="my-20 max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <Image
            src={logo}
            alt="/"
            width="350"
            height="220"
          />
          <h1 className="py-2 text-[#2e2e2f]">
            Renovation & Home Improvement Specialist
          </h1>
          <p className="py-2 uppercase text-sm tracking-widest text-gray-600">
            No job too small{" "}
          </p>
          <p>
            With over 30 years experience in the industry, DF Building Services
            has the tools you need to upgrade your home today. Based in Kinnegad, Co. Westmeath, we cover all parts of Westmeath & surrounding areas. Ranging from Attic
            Conversions to House Extensions and everything in between. We take
            pride in our work and always co-operate with our clients
            to get the job done as smoothly as possible. High attention to detail and industry approved building techniques
            to ensure our Home Improvements are of high standard and comply with relevant building regulations. Don&apos;t hesitate
            to contact us now to make an enquiry! </p>
            <p className="py-4 uppercase text-sm tracking-widest underline text-bold">No New Builds</p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full mx-3 shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <Link href="/#contact">
              <AiOutlineMail size={40} />
            </Link>
            </div>
            <a href='tel://+353876136030' className="rounded-full mx-3 shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlinePhone size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
