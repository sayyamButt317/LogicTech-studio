import React from "react";
import PersonImage from "./personimage";

const BussinesSolution = () => {
  return (
    <section id="service">
      <div className="container mx-auto mt-10 h-full w-full rounded-md bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 p-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div
            data-aos="fade-right"
            data-aos-duration="600"
            className="flex-shrink-0"
          >
            <PersonImage />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="700"
            className="lg:w-1/2 text-justify  text-2xl font-display "
          >
               <span className="block text-sky-500 text-sm font-medium ">OUR STORY</span>
            <span
              data-aos="fade-left"
              data-aos-duration="600"
              className="block text-blue-950 font-semibold"
            >
             NOT ONLY DELIVER PRODUCT 
            </span>
            
            <span className="block text-blue-950 font-bold ">BUT ALSO REALIZE A BETTER </span>
            <span className="block text-blue-950 font-bold">WAY OF WRITING SOFTWARE</span>
            <p className="text-sm font-light mt-8">
              We are a Software Agency, deliberately staying small to keep the
              quality of our team high. This allows us to be picky about the
              clients and products we take on. We focus on outcome-driven
              development and look for companies we can help deliver a big
              impact for customers, thus driving further success and growth for
              our clients.
            </p>
            <p className="text-sm font-light mt-8">
              Our team is skilled in a wide range of technologies and
              techniques. Before joining, all of our team members have played
              key roles in product management, software development, DevOps,
              along with security and compliance.
            </p>
            <button className="relative inline-flex items-center justify-center p-0.5 mt-4 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                More About Us
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BussinesSolution;
