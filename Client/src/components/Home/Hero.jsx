import React from "react";
import Spline from "@splinetool/react-spline";
import Sidebar from "./sidebar";

function Hero() {
  return (
    <>
      <div className="relative w-full h-[900px] bg-cover">
        {/* Company Title and Description */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white z-20">
          <div className="mx-auto max-w-md sm:ml-4 md:ml-14">
            <h1 data-aos="fade-right"
          data-aos-duration="600" className="font-sans md:font-serif text-2xl md:text-4xl">
              Welcome to LogicTech
            </h1>
            <p className="text-xs md:text-sm">
             we're dedicated to transforming your
              digital aspirations into reality. With our innovative software
              solutions and cutting-edge technology expertise, we empower
              businesses to thrive in the digital age.
            </p>
            <button class="relative inline-flex items-center justify-center p-0.5 mt-4 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Explore our Services
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mt-4 mb-2 me-2 overflow-hidden text-sm font-medium text- rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
               Contact Us!
              </span>
            </button>
          
          </div>
        </div>


        {/* Text Content */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-white z-20 text-center">
          <h1 className="font-sans md:font-serif text-2xl md:text-4xl font-bold mb-4 mt-8">
            TURN YOUR VISION INTO REALITY
          </h1>
          <p className="text-sm md:text-lg">Let's Start Building Together</p>
        </div>

        <div className="absolute top-16 right-4 text-white z-20 text-right">
          <Sidebar/>
        </div>

        {/* Additional Text - Right */}
        <div className="absolute bottom-4 right-4 text-white z-20 text-right">
          <p className="text-sm md:text-lg">Discover what we can do for you</p>
          <p className="text-sm md:text-lg font-bold">
            Explore Our Services Below
          </p>
        </div>

        {/* Spline Scene */}
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
          <Spline scene="https://prod.spline.design/6Ynr7fNnLGCUoA-U/scene.splinecode" />
        </div>
      </div>
    </>
  );
}

export default Hero;
