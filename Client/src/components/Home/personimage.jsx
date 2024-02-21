import React from 'react'
import heroImg from "../../assets/hero.svg";
import CountUp from "react-countup";
function personimage() {
  return (
    <div className="md-basis-1/3 mt-10 sm:mt-0">
    <figure className="flex items-center justify-center">
      <img src={heroImg} alt=""></img>
    </figure>
  </div>
  )
}

export default personimage