import React from "react";
import StepperWidget from "../../Utils/StepperWidget";
import ai from "../../assets/ai.png";

const Work = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-6">
      <div data-aos="fade-up"
            data-aos-duration="600" className="lg:w-1/2">
        <h1 className="font-normal text-sky-400 text-lg md:text-md ml-4 md:ml-8 mt-10 md:mt-20">
          HOW WE WORK
        </h1>
        <div className="block text-3xl md:text-2xl font-bold md:ml-8">
          <p data-aos="fade-left"
          data-aos-duration="600" className="text-black">WORKED WITH START-UPS AND</p>
          <p  data-aos="fade-right"
          data-aos-duration="600" className="text-black">MORE ESTABLISHED COMPANIES</p>
          <p className="flex flex-row text-sm font-thin mt-8">
            We are a Software Agency, deliberately staying small to keep the quality of our team high.
          </p>
          <p className="flex flex-row text-sm font-thin">
            This allows us to be picky about the clients and products we take on.
          </p>
        </div>
        <StepperWidget />
        <button className="relative font-sans inline-flex ml-8 mt-8 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text- rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-black dark:text-white">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md">
            HOW WE WORK
          </span>
        </button>
      </div>
      <div 
      data-aos="fade-up"
      data-aos-duration="600"
      className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
        <img src={ai} alt="" className="object-cover mt-6 rounded-lg h-86 w-3/4 lg:w-full lg:h-[36rem]" />
      </div>
    </div>
  );
};

export default Work;
