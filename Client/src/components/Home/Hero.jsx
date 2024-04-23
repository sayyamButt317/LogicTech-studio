import React from "react";
// import BackgroundImage from "../../assets/bge.avif";
import BackgroundImage from "../../assets/background.jpg";

function Hero() {
  return (
    <div
      className="w-full h-[900px] bg-cover"
      style={{
        // backgroundImage: `url(${BackgroundImage})`,
        backgroundImage: `url(${BackgroundImage})`,
      }}
    ></div>
  );
}

export default Hero;
