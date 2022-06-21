import React from "react";
import Image from "next/image";
import work1 from '../public/work1.jpg';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-20">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-2xl tracking-widest text-[#bfbeb2] py-4">
            About
          </p>
          <p className="py-8">
            At DF Building Services we take pride in our work. 30+ years
            experience in all aspects of home improvement and renovations. Based
            in County Westmeath, we are happy to offer free assessment and
            quotations for homes in the Midlands region. No job too small, we
            will do our best to provide a cost-effective solution to your
            desired renovations.
          </p>
          <p className="py-4">
            Fully qualified and insured. All work complies with latest building
            rules and regulations. Safe working methods and practices on all of
            our job sites. Our business has been built on our high quality of
            work, customer satisfaction and transparency.
          </p>
          <p className="py-4">
            Extending your home both enables more space and adds value to your
            property. Whether it be a home office, living area or a bigger
            kitchen, we offer time efficient & cost effective solutions to your
            spacial problems. Attic conversions are also becomming more popular.
            Turn the unused space into a beautiful master bedroom, a home bar or
            a gaming room for the kids. By using quality insulation we can help
            keep the heat in your home. Up to 30% of the heat in your home can
            escape from the roof if not properly insulated. Great opportunity to
            become more energy efficient & add much more space to your home.
          </p>
          <p className="py-4">
            Happy where you live but would love the extra space? Renovating is
            much more cost effective than selling up and moving. Extensions not
            always necessary as well planned renovation can open up the whole
            house. Have a look at some our latest projects below. If you think
            we can be of service, then contact us now to arrange an appointment.
            We look forward to hearing from you.
          </p>
        </div>
        <div className="py-6 w-full h-auto m-auto shadow-lg shadow-gray-600 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={work1}
            alt="/"
            width="500"
            height="650"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
