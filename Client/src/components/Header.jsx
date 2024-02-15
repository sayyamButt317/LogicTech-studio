import React from "react";

import LOGO from "../components/Logo"
import Chaticon from "../components/chaticon";
import { useNavigate } from 'react-router-dom';


const Header = () => {
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
    <header className="w-full h-20 flex items-center ">
      <div className="container flex items-center justify-between mx-auto px-4">
        
      <LOGO/>
        {/* Menu */}
        <div className="hidden md:flex items-center gap-8">
          <p onClick={handleClickHome} className="text-gray-600 hover:text-gray-900 transition duration-300 cursor-pointer">Home</p>
          <p onClick={handleClickService} className="text-gray-600 hover:text-gray-900 transition duration-300 cursor-pointer">Services</p>
          <p  onClick={handleClickAbout} className="text-gray-600 hover:text-gray-900 transition duration-300 cursor-pointer">About</p>
          <p onClick={handleClickContact} className="text-gray-600 hover:text-gray-900 transition duration-300 cursor-pointer ">Contact</p>
        </div>

        {/* Chat Icon */}
       <Chaticon/>
      </div>
    </header>
  );
};

export default Header;
