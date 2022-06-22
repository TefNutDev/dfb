import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlinePhone,
} from "react-icons/ai";
import structure from '../public/assets/icons/structure.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(()=> {
    const handleShadow = () => {
        if (window.scrollY >=90){
            setShadow(true)
        } else {
            setShadow(false)
        }
    }
    window.addEventListener('scroll', handleShadow);
  },[])

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[99]' : 'fixed w-full h-20 z-[100]'}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <Link href='/'>
        <Image src={structure} alt="/" width="100" height="60" />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">HOME</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">ABOUT</li>
            </Link>
            <Link href="/#services">
              <li className="ml-10 text-sm uppercase hover:border-b">
                SERVICES
              </li>
            </Link>
            <Link href="/#gallery">
              <li className="ml-10 text-sm uppercase hover:border-b">
                GALLERY
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                CONTACT
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#bfbeb2] p-10 ease-in duration-500"
              : "fixed left-[-120%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src={structure}
                width="70"
                height="55"
                alt=""
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Renovation & Home Improvement Specialist
              </p>
            </div>
          </div>
          <div className="py-4 flex-col">
            <ul>
              <Link href="/">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#services">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Services</li>
              </Link>
              <Link href="/#gallery">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Gallery</li>
              </Link>
              <Link href="/#contact">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#000000]">
                Get in touch for a quote today!
              </p>
              <div className="flex items-center justify-center my-4 w-full sm:w-[80%]">
                <a href='tel://+353876136030' className="rounded-full mx-3 shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlinePhone size={50} />
                </a>
                <div className="rounded-full mx-3 shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <Link onClick={()=> setNav(false)} href="/#contact">
                  <AiOutlineMail size={50} />
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
