import React from "react";
import App from "../../assets/app.png";
function ContactPage() {
  return (
    <div className="w-full h-auto md:max-auto">
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100">
          
      <span className="text-black text-7xl font-bold ml-[100px] ">
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
