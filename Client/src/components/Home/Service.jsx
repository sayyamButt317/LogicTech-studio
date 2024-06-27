import React from "react";

const Service = () => {
  return (
    <section id="service">
      <div className="container flex flex-col justify-center items-center lg:pt-4">
        <div className="text-center">
        <span className="block text-blue-500 text-lg font-lg font-serif ">WHAT WE DO</span>
          <h2
            data-aos="fade-up"
            data-aos-duration="400"
            className="text-sky-950 font-[800] text-2xl mb-5 "
          >
            OFFERS SIMPLE AND ELEGANT SOLUTION
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="600"
            className="lg:max-w-[800px] lg:max-auto text-headingColor font-[500] text-[16px] leading-7">
            We help enterprises through custom business solutions and provide IT outsourcing services to companies with agility, quality, and commitment.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Service;
