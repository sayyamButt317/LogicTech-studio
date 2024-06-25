import React from "react";
import PersonImage from "./personimage";

const BussinesSolution = () => {
  return (
    <section id="service">
      <div className='md:container md:mx-auto mt-10 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100'>
        <div className='flex flex-col lg:flex-row items-center justify-center m-12'>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-24">
            <PersonImage />
            <div className='mt-12 text-justify text-[3rem] font-serif font-semibold'>
              <span className='block'>Empowering HealthCare &</span>
              <span className='block'>Businesses Through IT</span>
              <span className='block text-blue-800'>Solutions</span>
              <p className="block text-sm font-light mt-8">We are Software Agency ,deliberately staying small to keep the quality of our team high.This allow us to be picky about the clients and products we take on .We Focus on outcome driven development and look for companies we can help deliver a big impact for customers and thus drive further success and growth for our clients  </p>
              <p className="block text-sm font-light mt-8">Our Team is Skilled in a wide range of Technologies and Techniques .Before you joining all of the team have played key roles in product managment ,software development ,DevOps along with Security & Compilance </p>
              <button class="relative inline-flex items-center justify-center p-0.5 mt-4 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-black dark:text-white ">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                More About us
              </span>
            </button>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default BussinesSolution;
