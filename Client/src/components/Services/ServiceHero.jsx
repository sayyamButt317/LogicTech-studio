import React from "react";
import People from "../../assets/people.png";

function ServicePage() {
  return (
    <div className="w-full h-auto md:max-w-auto mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100">
      <div className="text-center md:text-left">
        <h1 className="font-sans md:font-serif text-4xl md:text-8xl font-bold text-black ml-4 md:ml-8 mt-10 md:mt-20">
          WHAT WE DO
        </h1>
        <div className="Container text-sm md:text-base md:ml-8">
          <span className="text-center md:text-left">
            Create your success stories with our Quality IT Service. See our
            key expertise below
          </span>
        </div>
      </div>
      <img src={People} alt="" className="max-w-full h-auto md:w-1/2" />
    </div>
  </div>
  
  );
}

export default ServicePage;
