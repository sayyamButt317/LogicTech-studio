import React from "react";

import LOGO from "./Logo"
// import Chaticon from "./chaticon";
import { useNavigate } from 'react-router-dom';


function Header () {
  const navigate = useNavigate();
  const handleClickHome = () => {
   
    navigate('/');
  };
  const handleClickService = () => {
  
    navigate('/Service');
  };
  const handleClickAbout = () => {
 
    navigate('/About');
  };
  const handleClickContact = () => {
   
    navigate('/Contact');
  };
  
  return (
    <header className="w-full h-20 flex items-center bg-black">
      <div className="container flex items-center justify-between mx-auto px-4">
        
      <LOGO/>
        {/* Menu */}
        <div className="hidden md:flex items-center gap-8">
          <p onClick={handleClickHome} className="text-white hover:text-gray-500 transition duration-300 cursor-pointer">Home</p>
          <p onClick={handleClickService} className="text-white hover:text-gray-500 transition duration-300 cursor-pointer">Services</p>
          <p  onClick={handleClickAbout} className="text-white hover:text-gray-500 transition duration-300 cursor-pointer">About</p>
          <p onClick={handleClickContact} className="text-white hover:text-gray-500 transition duration-300 cursor-pointer ">Contact</p>
        </div>

        {/* Chat Icon */}
       {/* <Chaticon/> */}
      </div>
    </header>
  );
};

export default Header;
