import React from "react";
import App from "../../assets/app.png";
function ContactPage() {
  return (
    <div className="w-full h-auto md:max-auto">
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-900">
          
      <span className="font-sans md:font-serif text-4xl md:text-8xl font-bold text-white ml-4 md:ml-8 mt-10 md:mt-20 ">
        GET IN TOUCH!.
        <p1 className="flex flex-col text-2xl items-center mt-3 sm:text-1xl "> Contact Us & You’ll Hear Back TODAY.</p1>
      </span>
    
        
     
      <div className="object-right">
        <img src={App} className=""></img>
      </div>
      </div>
    </div>
  );
}

export default ContactPage;
