import React from "react";
import enhanced from "../../assets/enhanced.png";


function AboutPage() {
  return (
    <div className="w-full h-auto mt-5 md:mx-auto ">
      <div className="flex flex-col md:flex-row bg-gray-900">
        <div data-aos="fade-left"  data-aos-duration="1400"
        className="flex flex-col md:flex-row mx-auto items-center justify-between">
           
          <span className="font-serif text-white text-4xl font-bold mb-4 md:w-1/2 md:px-10 text-center md:text-left">
            Transforming Lives Through Technology
            <p 
           className="font-serif text-white text-[1rem] gap-3 font-light mt-10 px-4 justify-center">
              For Start-ups, our business provides a comprehensive solution to streamline Operations,manage Projects, and Collaboration effectively. From task delegation to team Communication.
             
            </p>
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
