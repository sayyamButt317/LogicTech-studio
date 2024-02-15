import React from "react";
import Virtual from "../../assets/virtual.png";
import enhanced from "../../assets/enhanced.png";
import info from "../../assets/info.png";

function AboutPage() {
  return (
    <div className="w-full h-auto mt-5 md:mx-auto ">
      <div className="flex flex-col md:flex-row bg-gray-100 ">
        <div className="flex flex-col md:flex-row mx-auto items-center justify-between">
          <img
            src={info} width={100} height={100} 
            
            alt="Code GIF"
          />
          <span className="font-serif text-black text-4xl font-bold mb-4 md:w-1/2 md:px-6 text-center md:text-left">
            Transforming Lives Through Technology
          </span>
          
    
          <img
            src={enhanced}
            className="max-w-full h-auto md:w-1/2 mt-4 md:mt-0"
            alt="Code GIF"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;