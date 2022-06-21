import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-2xl tracking-widest text-[#bfbeb2] py-4 uppercase">
          Services
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
          <div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/icons/exterior.png"
                  alt="/"
                  width="94px"
                  height="94px"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2>Extenstions</h2>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/icons/roof.png"
                  alt="/"
                  width="94px"
                  height="94px"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2>Attic Conversion</h2>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/icons/paintroller.png"
                  alt="/"
                  width="94px"
                  height="94px"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2>Painting</h2>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/icons/hammer.png"
                  alt="/"
                  width="94px"
                  height="94px"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2>Flooring</h2>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/icons/plug.png"
                  alt="/"
                  width="94px"
                  height="94px"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2>Electrical</h2>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/icons/pipe.png"
                  alt="/"
                  width="94px"
                  height="94px"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2>Plumbing</h2>
              </div>
            </div>
          </div>
          <div className="p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/icons/toolbox.png"
                  alt="/"
                  width="94px"
                  height="94px"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2>Renovations</h2>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/icons/jackhammer.png"
                  alt="/"
                  width="94px"
                  height="94px"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2>Demoliton &</h2>
                <h2>Strip Out</h2>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/icons/kitchen.png"
                  alt="/"
                  width="94px"
                  height="94px"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2>Kitchens</h2>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/icons/heating.png"
                  alt="/"
                  width="94px"
                  height="94px"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2>Insulation</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
